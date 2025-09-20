import { spawn } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';

const siteUrl = process.env.LIGHTHOUSE_URL ?? 'http://127.0.0.1:3000';
const reportsDir = 'reports';

if (!existsSync(reportsDir)) {
  mkdirSync(reportsDir, { recursive: true });
}

const server = spawn('pnpm', ['start'], {
  stdio: 'inherit',
  env: { ...process.env, PORT: '3000', HOSTNAME: '127.0.0.1' }
});

async function waitForServer() {
  for (let i = 0; i < 30; i += 1) {
    try {
      const response = await fetch(siteUrl, { method: 'HEAD' });
      if (response.ok) {
        return;
      }
    } catch (error) {
      // ignore and retry
    }
    await delay(1000);
  }
  throw new Error('Server did not start in time.');
}

async function run() {
  try {
    await waitForServer();
    const lighthouse = spawn(
      'npx',
      ['lighthouse', siteUrl, '--output=html', `--output-path=${reportsDir}/lh.html`, '--quiet', '--chrome-flags="--headless"'],
      { stdio: 'inherit' }
    );
    await new Promise((resolve, reject) => {
      lighthouse.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Lighthouse exited with code ${code}`));
        }
      });
    });
  } finally {
    server.kill('SIGINT');
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
