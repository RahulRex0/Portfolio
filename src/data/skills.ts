export type SkillDetails = {
  label: string;
  icon: string;
};

export const skillDetails: Record<string, SkillDetails> = {
  typescript: { label: "TypeScript", icon: "/icons/tech/typescript.svg" },
  javascript: { label: "JavaScript", icon: "/icons/tech/javascript.svg" },
  python: { label: "Python", icon: "/icons/tech/python.svg" },
  html: { label: "HTML", icon: "/icons/tech/html.svg" },
  css: { label: "CSS", icon: "/icons/tech/css.svg" },
  java: { label: "Java", icon: "/icons/tech/java.svg" },
  "c++": { label: "C++", icon: "/icons/tech/cpp.svg" },
  "next.js": { label: "Next.js", icon: "/icons/tech/nextjs.svg" },
  react: { label: "React", icon: "/icons/tech/react.svg" },
  "express.js": { label: "Express.js", icon: "/icons/tech/express.svg" },
  "node.js": { label: "Node.js", icon: "/icons/tech/nodejs.svg" },
  websockets: { label: "WebSockets", icon: "/icons/tech/websockets.svg" },
  postgresql: { label: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
  sqlite: { label: "SQLite", icon: "/icons/tech/sqlite.svg" },
  "css modules": { label: "CSS Modules", icon: "/icons/tech/cssmodules.svg" },
  "tailwind css": { label: "Tailwind CSS", icon: "/icons/tech/tailwind.svg" },
  bootstrap: { label: "Bootstrap", icon: "/icons/tech/bootstrap.svg" },
  github: { label: "GitHub", icon: "/icons/github.svg" },
  vercel: { label: "Vercel", icon: "/vercel.svg" },
  supabase: { label: "Supabase", icon: "/icons/tech/supabase.svg" },
  "vs code": { label: "VS Code", icon: "/icons/tech/vscode.svg" },
  git: { label: "Git", icon: "/icons/tech/git.svg" },
  intellij: { label: "IntelliJ", icon: "/icons/tech/intellij.svg" },
  spyder: { label: "Spyder", icon: "/icons/tech/spyder.svg" },
  jupyter: { label: "Jupyter", icon: "/icons/tech/jupyter.svg" },
  aws: { label: "AWS", icon: "/icons/tech/aws.svg" },
  "gemini api": { label: "Gemini API", icon: "/icons/tech/gemini.svg" },
};

export const skillSections = [
  {
    title: "Languages",
    skills: ["typescript", "javascript", "python", "html", "css", "java", "c++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["next.js", "react", "express.js", "node.js", "websockets"],
  },
  {
    title: "Databases",
    skills: ["postgresql", "sqlite"],
  },
  {
    title: "Styling",
    skills: ["css modules", "tailwind css", "bootstrap"],
  },
  {
    title: "Tools",
    skills: [
      "github",
      "vercel",
      "supabase",
      "vs code",
      "git",
      "intellij",
      "spyder",
      "jupyter",
      "aws",
    ],
  },
] as const;

export function getSkillDetails(skillName: string): SkillDetails {
  const skillKey = skillName.trim().toLowerCase();

  return (
    skillDetails[skillKey] ?? {
      label: skillName.trim(),
      icon: "/icons/tech/code.svg",
    }
  );
}
