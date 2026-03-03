import Link from "next/link";
import projects from "@/data/projects.json"

type Project={
  id: number;
  title:string;
  description:string;
}

export const metadata={
  title: "Projects -Rahul Rex"
};

export default function ProjectDisplay(){
  const typedProjects= projects as Project[];

  return(
    <main className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-neutral-400">Some things I’ve built and explored.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
      </div>
    </main>
  )

}



