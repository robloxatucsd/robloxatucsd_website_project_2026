import Image from "next/image";
import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/events">Events</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/tutorials">Tutorials</Link>
        </nav>
    )
}

export default NavBar;
