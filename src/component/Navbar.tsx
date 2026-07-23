import Link from "next/link";

const navLinkStyle = {
  color: "inherit",
  cursor: "pointer",
  transition: "color 150ms ease, opacity 150ms ease",
} as const;

const navLinkClassName =
  "no-underline underline-offset-4 hover:text-neutral-300 hover:underline hover:opacity-80";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, borderBottom: "1px solid #333" }}>
      <Link href="/" style={navLinkStyle} className={navLinkClassName}>
        Home
      </Link>
      <Link href="/projects" style={navLinkStyle} className={navLinkClassName}>
        Projects
      </Link>
      <Link href="/skills" style={navLinkStyle} className={navLinkClassName}>
        Skills
      </Link>
      <Link href="/contact" style={navLinkStyle} className={navLinkClassName}>
        Contact
      </Link>
    </nav>
  );
}
