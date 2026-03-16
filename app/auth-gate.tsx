'use client';

import { useState, useEffect, type ReactNode, type FormEvent } from 'react';

export default function AuthGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      setAuthenticated(true);
    }
    setMounted(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === '123') {
      sessionStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
    } else {
      setError(true);
      setPassword('');
    }
  }

  if (!mounted) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 rounded-lg border border-[var(--color-border)] p-8"
      >
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Login
        </h1>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-foreground/80"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            autoFocus
            className="w-full rounded-md border border-[var(--color-border)] bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          {error && (
            <p className="text-sm text-red-500">Incorrect password.</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[var(--color-primary)] px-4 py-2 font-medium text-white hover:opacity-90 transition-opacity"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
