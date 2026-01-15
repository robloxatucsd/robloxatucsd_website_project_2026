import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Projects Page</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/events">Events</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/tutorials">Tutorials</Link>
      </nav>
    </div>
  );
}
