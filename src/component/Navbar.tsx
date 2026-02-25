import Link from "next/link";

export default function Navbar(){
    return(
        <nav style={{ display: "flex", gap: 16, padding: 16, borderBottom: "1px solid #333" }}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    )


}