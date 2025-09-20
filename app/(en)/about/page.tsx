import type { Metadata } from 'next';

import { TeamGrid, type TeamMember } from '@/app/components/site/team-grid';
import { Timeline, type TimelineItem } from '@/app/components/site/timeline';
import { Values, type Value } from '@/app/components/site/values';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Acme',
  description:
    'Acme is a distributed team of product, engineering, and operations leaders focused on helping teams ship strategic outcomes.',
  path: '/about'
});

const team: TeamMember[] = [
  {
    name: 'Elise Navarro',
    role: 'CEO & Co-founder',
    bio: 'Former COO at growth-stage SaaS companies, Elise guides our customer success and operations teams.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Harlan Diaz',
    role: 'CTO & Co-founder',
    bio: 'Harlan built engineering enablement platforms for Fortune 500 teams before starting Acme.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Yara Ahmed',
    role: 'VP Product',
    bio: 'Yara partners with clients to translate strategy into iterative roadmaps with measurable impact.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'
  }
];

const timeline: TimelineItem[] = [
  {
    year: '2019',
    title: 'Acme founded',
    description: 'We launched in Seattle to help teams move beyond status reports and into outcome-focused delivery.'
  },
  {
    year: '2021',
    title: 'Global presence',
    description: 'Opened offices on three continents and expanded our platform to support regulated industries.'
  },
  {
    year: '2024',
    title: 'Platform + services',
    description: 'Shipped the Acme operating system combining insights, automation, and expert coaching.'
  }
];

const values: Value[] = [
  {
    title: 'Outcomes over output',
    description: 'We anchor every engagement on measurable business impact, not story points or vanity metrics.'
  },
  {
    title: 'Build in the open',
    description: 'Transparency fuels trust. We share context, trade-offs, and learnings with clients every sprint.'
  },
  {
    title: 'Operate responsibly',
    description: 'Security, accessibility, and sustainability are built-in defaults, not add-ons.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="space-y-6">
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Meet the team</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            We are product operators, engineers, and strategists who have lived the pain of shipping complex
            programs. Acme exists to make strategic delivery feel calm and predictable.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <TeamGrid members={team} />
        </Container>
      </Section>
      <Section className="bg-secondary/5">
        <Container className="grid gap-12 lg:grid-cols-[1fr,2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Our journey</h2>
            <p className="text-sm text-foreground/70">
              From boutique consultancy to platform company, our focus has always been to align delivery with
              outcomes.
            </p>
          </div>
          <Timeline items={timeline} />
        </Container>
      </Section>
      <Section>
        <Container className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">What drives us</h2>
          <Values items={values} />
        </Container>
      </Section>
    </>
  );
}
