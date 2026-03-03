import projects from "@/data/projects.json"
import Link from "next/link";
import { notFound } from "next/navigation";

type Project={
  id:number;
  title:string;
  description:string;
};

type Props={
  params: Promise<{id:string }>
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
    </main>
  );
}

