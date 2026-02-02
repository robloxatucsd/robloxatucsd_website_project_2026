import Image from "next/image";
import NavBar from '../modules/navbar';
interface TeamMember {
  name: string;
  position: string;
  image?: string;      
  imageHover?: string; 
  objectPosition?: string; // eg "top" or "50% 20%"
  zoom?: number;           // eg 1.3 for 30% zoom
}

function TeamMemberCard({ 
  name, 
  position, 
  image, 
  imageHover, 
  objectPosition = "center", 
  zoom = 1 
}: TeamMember) {
  const defaultSrc = image ? `/team/irlprofiles/${image}` : null;
  const hoverSrc = imageHover ? `/team/robloxprofiles/${imageHover}` : null;
  const hasHover = Boolean(hoverSrc);

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 group/card">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden bg-amber-50/20 ring-2 ring-amber-50/30">
        {defaultSrc ? (
          <>
            <Image
              src={defaultSrc}
              alt={name}
              fill
              style={{ 
                objectPosition: objectPosition, 
                transform: `scale(${zoom})` 
              }}
              className={`object-cover transition-opacity duration-200 ${hasHover ? "group-hover/card:opacity-0" : ""}`}
              sizes="80px"
            />
            {hasHover && (
              <Image
                src={hoverSrc!}
                alt={`${name} (hover)`}
                fill
                className="object-cover opacity-0 transition-opacity duration-200 group-hover/card:opacity-100"
                sizes="80px"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-amber-50/50" />
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-[#A3A3A3] text-sm">{position}</p>
      </div>
    </div>
  );
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-white text-2xl font-bold mb-6 text-left">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const execs: TeamMember[] = [
    { 
      name: 'Mitchell Moundraty', 
      position: 'President & Logistics', 
      image: 'Mitchell-Moundraty.jpg', 
      zoom: 1.5, // zoom in
      objectPosition: 'bottom'
    },
    { name: 'Bree Tassinari', position: 'VP Finance', image: 'Bree-Tassinari.jpg' },
    { name: 'Sally Zorigoo', position: 'Co-VP Marketing', image: 'S-Z.webp' },
    { name: 'Yaena Chun', position: 'Co-VP Marketing', image: 'Yaena-Chun.jpeg' },
    { name: 'Shawn Cheng', position: 'VP Events', image: 'Shawn-Cheng.jpg' },
  ];

  const logistics: TeamMember[] = [
    { name: 'Kaylin Bayek', position: 'Secretary', image: 'Kaylin-Bayek.jpg' },
    { name: 'Julie Nguyen', position: 'Project Manager', image: 'Julie-Nguyen.jpeg' },
    { name: 'Alice Park', position: 'Historian', image: 'Alice-Park.jpg' },
  ];

  const events: TeamMember[] = [
    { name: 'Manuel Cerda', position: 'Events Officer', image: 'Manuel-Cerda.png' },
    { name: 'Jimmy Che', position: 'Events Officer', image: 'Jimmy-Che.JPG' },
    { 
      name: 'David Gao', 
      position: 'Events Officer', 
      image: 'David-Gao.png', 
      objectPosition: 'top', // move img up to show face
      zoom: 1.5
    },
  ];

  const marketing: TeamMember[] = [
    { name: 'Wanyi Wu', position: 'Social Media', image: 'Wanyi-Wu.jpg' },
    { name: 'Jay Siqueiroz', position: 'Social Media', image: 'Jay-Siqueiroz.jpg' },
    { name: 'Joie Fong', position: 'Outreach & Collabs', image: 'Joie-Fong.jpeg' },
    { name: 'Samantha St Clair', position: 'Outreach & Collabs', image: 'Samantha-St-Clair.JPG' },
    { name: 'Robyn Todd', position: 'Art Lead', image: 'Robyn-Todd.jpg' },
  ];

  const finance: TeamMember[] = [
    { 
      name: 'Nicole Fong', 
      position: 'Finance Officer', 
      image: 'Nicole-Fong.png', 
      zoom: 1.4, // zoom in
      objectPosition: 'top'
    },
    { name: 'Yeheng Mai', position: 'Finance Officer', image: 'Yeheng-Mai.png' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Officers</h1>
          <p className="text-[#A3A3A3] text-lg">
            Get to know the dedicated team members who make our organization thrive.
          </p>
        </header>

        <div>
          <TeamSection title="Execs" members={execs} />
          <TeamSection title="Logistics" members={logistics} />
          <TeamSection title="Events" members={events} />
          <TeamSection title="Marketing" members={marketing} />
          <TeamSection title="Finance" members={finance} />
        </div>
      </main>
    </div>
  );
}