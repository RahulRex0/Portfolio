import projects from "@/data/projects.json"
import { getSkillDetails } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project={
  id:number;
  title:string;
  description:string;
  tech: string[];
  github: string;
  live: string;
};

type Props={
  params: Promise<{id:string}>
};

export default async function ProjectDetailPage({params}: Props)
{
  const {id} = await params;
  const project = (projects as Project[]).find((p) => String(p.id) === id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="py-12">
      <Link href="/projects" className="text-sm text-neutral-400 hover:text-white">
        ← Back to Projects
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-2 text-neutral-300">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3" aria-label="Tech stack">
        {project.tech.map((technology) => {
          const techKey = technology.trim().toLowerCase();
          const tech = getSkillDetails(technology);

          return (
            <li
              key={techKey}
              className="inline-flex items-center gap-2 text-sm text-neutral-300"
            >
              <Image src={tech.icon} alt="" width={20} height={20} />
              <span>{tech.label}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-neutral-700 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900"
        >
          Live Demo
        </a>
      )}
      </div>
    </main>
  );
}
