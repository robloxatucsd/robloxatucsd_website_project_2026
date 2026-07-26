import Image from "next/image";
import Link from 'next/link';
import NavBar from '../../modules/navbar';
import Footer from '../../components/Footer';
import FlipCard from '../../components/FlipCard';
import ScrollToTop from '../../components/ScrollToTop';

interface TeamMember {
  name: string;
  position: string;
  irlImage?: string;
  robloxImage?: string;
  objectPosition?: string;
  zoom?: number;
}

function TeamMemberCard({
  name,
  position,
  irlImage,
  robloxImage,
  objectPosition = "center",
  zoom = 1,
}: TeamMember) {
  return (
    <FlipCard
      name={name}
      position={position}
      irlImage={irlImage}
      robloxImage={robloxImage}
      objectPosition={objectPosition}
      zoom={zoom}
      isFlipped={false}
    />
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

export default function Archive2025Page() {
  // 2025-2026 Officers Data
  const execs: TeamMember[] = [
    {
      name: 'Mitchell Moundraty',
      position: 'President',
      irlImage: 'Mitchell-Moundraty.jpg',
      robloxImage: 'rbxpfp-Mitchell Moundraty.webp',
      zoom: 1.5,
      objectPosition: 'bottom'
    },
    { 
      name: 'Shawn Cheng', 
      position: 'Events & Dev VP', 
      irlImage: 'Shawn-Cheng.jpg',
      robloxImage: 'rbxpfp-Shawn Cheng.png'
    },
    { 
      name: 'Sally Zorigoo', 
      position: 'Marketing Co-VP', 
      irlImage: 'S-Z.webp',
      robloxImage: 'rbxpfp-S Z.webp'
    },
    { 
      name: 'Yaena Chun', 
      position: 'Marketing Co-VP', 
      irlImage: 'Yaena-Chun.jpeg',
      robloxImage: 'rbxpfp-Yaena Chun.jpeg'
    },
    { 
      name: 'Bree Tassinari', 
      position: 'Finance VP', 
      irlImage: 'Bree-Tassinari.jpg',
      robloxImage: 'rbxpfp-Bree Tassinari.png'
    },
  ];

  const dev: TeamMember[] = [
    {
      name: 'David Gao',
      position: 'Scripting Lead',
      irlImage: 'David-Gao.png',
      robloxImage: 'rbxpfp-David Gao.png',
      objectPosition: 'top',
      zoom: 1.5
    },
    { 
      name: 'Ryan Lee', 
      position: 'Game Jam Lead', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Kim Antoinette Barcelos', 
      position: 'UGC Lead', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Caio Deshong',
      position: 'Writing Lead',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Robyn Todd', 
      position: 'Art Lead', 
      irlImage: 'Robyn-Todd.jpg',
      robloxImage: 'rbxpfp-Robyn Todd.png'
    },
    {
      name: 'Mitchell Moundraty',
      position: 'Building Lead',
      irlImage: 'Mitchell-Moundraty.jpg',
      robloxImage: 'rbxpfp-Mitchell Moundraty.webp',
      zoom: 1.5,
      objectPosition: 'bottom'
    },
    { 
      name: 'Julie Nguyen', 
      position: 'Project Manager', 
      irlImage: 'Julie-Nguyen.png',
      robloxImage: 'rbxpfp-Julie Nguyen.webp'
    },
  ];

  const events: TeamMember[] = [
    {
      name: 'Natalie Tran',
      position: 'Events Staff',
      irlImage: 'Natalie-Tran.jpeg',
      robloxImage: 'rbxpfp-Natalie Tran.jpeg',
      zoom: 1.5
    },
    {
      name: 'Sam Villarruel',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Manuel Cerda', 
      position: 'Events Staff', 
      irlImage: 'Manuel-Cerda.png',
      robloxImage: 'rbxpfp-Manuel Cerda.webp'
    },
    {
      name: 'David Gao',
      position: 'Events Staff',
      irlImage: 'David-Gao.png',
      robloxImage: 'rbxpfp-David Gao.png',
      objectPosition: 'top',
      zoom: 1.5
    },
    {
      name: 'Caio Deshong',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Leyla Yunusova',
      position: 'Events Staff',
      irlImage: 'Leyla-Yunusova.jpg',
      robloxImage: 'rbxpfp-Leyla Yunusova.webp'
    },
    {
      name: 'Jimena Lopez',
      position: 'Events Staff',
      irlImage: 'Jimena-Lopez.jpeg',
      robloxImage: 'rbxpfp-Jimena Lopez.jpeg'
    },
    { 
      name: 'Jimmy Che', 
      position: 'Events Officer', 
      irlImage: 'Jimmy-Che.JPG',
      robloxImage: 'rbxpfp-Jimmy Che.jpg'
    },
    {
      name: 'Nghi Nguyen',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Marissa Morales',
      position: 'Events Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Jay Siqueiroz', 
      position: 'Photographer', 
      irlImage: 'Jay-Siqueiroz.jpg',
      robloxImage: 'rbxpfp-Jay Siqueiroz.png'
    },
  ];

  const marketing: TeamMember[] = [
    { 
      name: 'Manuel Cerda', 
      position: 'Social Media', 
      irlImage: 'Manuel-Cerda.png',
      robloxImage: 'rbxpfp-Manuel Cerda.webp'
    },
    { 
      name: 'Wanyi Wu', 
      position: 'Social Media', 
      irlImage: 'Wanyi-Wu.jpg',
      robloxImage: 'rbxpfp-Wanyi Wu.png'
    },
    { 
      name: 'Jay Siqueiroz', 
      position: 'Social Media', 
      irlImage: 'Jay-Siqueiroz.jpg',
      robloxImage: 'rbxpfp-Jay Siqueiroz.png'
    },
    { 
      name: 'Robyn Todd', 
      position: 'Art Lead', 
      irlImage: 'Robyn-Todd.jpg',
      robloxImage: 'rbxpfp-Robyn Todd.png'
    },
    { 
      name: 'Ric Penales', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Catherine Xu', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Kelsey Pi', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Hugo Flanagan', 
      position: 'Art Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    {
      name: 'Marissa Morales',
      position: 'Art Staff',
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Emily Hoy', 
      position: 'Video Editor / Reels', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Julie Nguyen', 
      position: 'Video Editor / Reels', 
      irlImage: 'Julie-Nguyen.png',
      robloxImage: 'rbxpfp-Julie Nguyen.webp'
    },
  ];

  const finance: TeamMember[] = [
    {
      name: 'Nicole Fong',
      position: 'Finance Staff',
      irlImage: 'Nicole-Fong.png',
      robloxImage: 'rbxpfp-Nicole Fong.jpeg',
      zoom: 1.4,
      objectPosition: 'top'
    },
    { 
      name: 'Jesus Michel', 
      position: 'Finance Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Jai Benedito', 
      position: 'Finance Staff', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Yeheng Mai', 
      position: 'Finance Staff', 
      irlImage: 'Yeheng-Mai.png',
      robloxImage: 'rbxpfp-Yeheng Mai.png'
    },
    { 
      name: 'Kathy Charry', 
      position: 'Fundraising Manager', 
      irlImage: 'rbxpfp-Default.png',
      robloxImage: 'rbxpfp-Default.png'
    },
    { 
      name: 'Joie Fong', 
      position: 'Outreach & Collabs', 
      irlImage: 'Joie-Fong.jpeg',
      robloxImage: 'rbxpfp-Joie Fong.png'
    },
    { 
      name: 'Samantha St. Clair', 
      position: 'Outreach & Collabs', 
      irlImage: 'Samantha-St-Clair.JPG',
      robloxImage: 'rbxpfp-Samantha St Clair.webp'
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(/generalMedias/background.png)` }}
    >
      <NavBar />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link 
            href="/team" 
            className="inline-flex items-center text-[#00b2ff] hover:text-[#0099dd] transition-colors mb-4 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Team
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-4">2025-2026 Officers</h1>
          <p className="text-[#A3A3A3] text-lg">
            The founding officer team of Roblox + RBXDev @ UC San Diego
          </p>
        </div>

        <div>
          <TeamSection title="Execs" members={execs} />
          <TeamSection title="Dev" members={dev} />
          <TeamSection title="Events" members={events} />
          <TeamSection title="Marketing" members={marketing} />
          <TeamSection title="Finance" members={finance} />
        </div>
      </main>

      <ScrollToTop threshold={300} />

      <Footer />
    </div>
  );
}