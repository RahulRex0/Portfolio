import { skillDetails, skillSections } from "@/data/skills";
import Image from "next/image";

export const metadata = {
  title: "Skills - Rahul Rex",
  description: "Technical skills and tools used by Rahul Rex.",
};

export default function SkillsPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">Technical Skills</h1>
      <p className="mt-2 text-neutral-400">
        Languages, frameworks, databases, and tools I work with.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillSections.map((section) => (
          <section
            key={section.title}
            className={`rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 ${
              section.title === "Tools" ? "md:col-span-2" : ""
            }`}
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {section.skills.map((skillKey) => {
                const skill = skillDetails[skillKey];

                return (
                  <li
                    key={skillKey}
                    className="inline-flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <Image src={skill.icon} alt="" width={22} height={22} />
                    <span>{skill.label}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
