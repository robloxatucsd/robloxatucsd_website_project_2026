import Image from "next/image";
import Link from 'next/link';

import NavBar from '../modules/navbar';

// Team Member Card Component
interface TeamMemberProps {
  name: string;
  position: string;
}

function TeamMemberCard({ name, position }: TeamMemberProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4">
      {/* Profile Image Placeholder */}
      <div className="w-16 h-16 rounded-full bg-amber-50 flex-shrink-0" />
      
      {/* Text Stack */}
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-[#A3A3A3] text-sm">{position}</p>
      </div>
    </div>
  );
}

// Team Section Component
interface TeamSectionProps {
  title: string;
  members: { name: string; position: string }[];
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-white text-2xl font-bold mb-6 text-left">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  // Generate placeholder data
  const execs = Array.from({ length: 6 }, (_, i) => ({
    name: `Executive ${i + 1}`,
    position: 'Executive Officer'
  }));

  const finance = Array.from({ length: 3 }, (_, i) => ({
    name: `Finance Member ${i + 1}`,
    position: 'Finance Officer'
  }));

  const marketing = Array.from({ length: 6 }, (_, i) => ({
    name: `Marketing Member ${i + 1}`,
    position: 'Marketing Officer'
  }));

  const team1 = Array.from({ length: 6 }, (_, i) => ({
    name: `Team Member ${i + 1}`,
    position: 'Team Officer'
  }));

  const team2 = Array.from({ length: 6 }, (_, i) => ({
    name: `Team Member ${i + 1}`,
    position: 'Team Officer'
  }));

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Officers</h1>
          <p className="text-[#A3A3A3] text-lg">
            Get to know the dedicated team members who make our organization thrive.
          </p>
        </header>

        {/* Team Sections */}
        <div>
          <TeamSection title="Execs" members={execs} />
          <TeamSection title="Finance" members={finance} />
          <TeamSection title="Marketing" members={marketing} />
          <TeamSection title="Team Name" members={team1} />
          <TeamSection title="Team Name" members={team2} />
        </div>
      </main>
    </div>
  );
}