import Link from "next/link";

export const metadata = {
  title: "Rahul Rex — Portfolio",
  description: "Next.js + TypeScript portfolio",
};

export default function HomePage() {
  return (
    <main className="py-12">
      <section className="space-y-6">
        <p className="text-sm text-neutral-400">Next.js • TypeScript • Tailwind</p>

        <h1 className="text-5xl font-bold tracking-tight">
          Rahul Rex
        </h1>

        <p className="max-w-xl text-neutral-300">
          I build fast, clean web apps. Currently focusing on Next.js, UI, and full-stack projects.
        </p>

        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-white px-4 py-2 text-black font-medium hover:opacity-90"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}