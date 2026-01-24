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
  // Team member data - replace with actual names and positions
  const president = [
    { name: 'mitchellllllll', position: 'President' }
  ];

  const execs = [
    { name: 'Name Here', position: 'Executive Officer' },
    { name: 'Name Here', position: 'Executive Officer' },
    { name: 'Name Here', position: 'Executive Officer' },
    { name: 'Name Here', position: 'Executive Officer' }
  ];

  const events = [
    { name: 'Name Here', position: 'Events Officer' },
    { name: 'Name Here', position: 'Events Officer' },
    { name: 'Name Here', position: 'Events Officer' }
  ];

  const finance = [
    { name: 'Name Here', position: 'Finance Officer' },
    { name: 'Name Here', position: 'Finance Officer' }
  ];

  const logistics = [
    { name: 'Name Here', position: 'Logistics Officer' },
    { name: 'Name Here', position: 'Logistics Officer' },
    { name: 'Name Here', position: 'Logistics Officer' }
  ];

  const marketing = [
    { name: 'Name Here', position: 'Marketing Officer' },
    { name: 'Name Here', position: 'Marketing Officer' },
    { name: 'Name Here', position: 'Marketing Officer' },
    { name: 'Name Here', position: 'Marketing Officer' },
    { name: 'Name Here', position: 'Marketing Officer' }
  ];

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
          <TeamSection title="President" members={president} />
          <TeamSection title="Execs" members={execs} />
          <TeamSection title="Events" members={events} />
          <TeamSection title="Finance" members={finance} />
          <TeamSection title="Logistics" members={logistics} />
          <TeamSection title="Marketing" members={marketing} />
        </div>
      </main>
    </div>
  );
}