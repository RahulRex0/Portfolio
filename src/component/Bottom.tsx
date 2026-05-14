import Image from "next/image";

const footerLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  color: "inherit",
  cursor: "pointer",
  transition: "color 150ms ease, opacity 150ms ease",
} as const;

export default function Bottom() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 16,
        padding: 16,
        borderTop: "1px solid #333",
      }}
    >
      <a
        href="https://github.com/RahulRex0"
        target="_blank"
        rel="noreferrer"
        style={footerLinkStyle}
        className="no-underline underline-offset-4 hover:text-neutral-300 hover:underline hover:opacity-80"
      >
        <Image src="/icons/github.svg" alt="" width={16} height={16} />
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/rahul-rex-29ba2b208/"
        target="_blank"
        rel="noreferrer"
        style={footerLinkStyle}
        className="no-underline underline-offset-4 hover:text-neutral-300 hover:underline hover:opacity-80"
      >
        <Image src="/icons/linkedin.svg" alt="" width={16} height={16} />
        LinkedIn
      </a>
      <a
        href="mailto:rahulrex551@gmail.com"
        style={footerLinkStyle}
        className="no-underline underline-offset-4 hover:text-neutral-300 hover:underline hover:opacity-80"
      >
        <Image src="/icons/email.svg" alt="" width={16} height={16} />
        Email
      </a>
    </footer>
  );
}
