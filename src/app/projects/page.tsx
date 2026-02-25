import projects from "@/data/projects.json"
import Link from "next/link";

type Project={
  id:number;
  title:string;
  description:string;
};

export default function ProjectsPage() {

  const typedProjects = projects as Project[];

    return (
      <main style={{ padding: 24 }}>
        <h1>Projects</h1>
        {typedProjects.map((p) => (
          <Link
          key={p.id}
          href={`/projects/${p.id}`}
          className="block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900 transition"
        >
          <h2 className="text-lg font-semibold">{p.title}</h2>
          <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
        </Link>
      ))}
    </main>
    );
  }
  