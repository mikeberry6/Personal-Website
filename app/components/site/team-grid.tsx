import Image from 'next/image';

import { Card } from '@/app/components/ui/card';

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name} className="flex h-full flex-col overflow-hidden">
          <div className="relative h-60 w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 280px, 100vw"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-foreground/60">{member.role}</p>
            </div>
            <p className="text-sm text-foreground/70">{member.bio}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
