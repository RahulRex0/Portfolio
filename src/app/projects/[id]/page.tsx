type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Project {id}</h1>
      <p className="mt-2 text-neutral-400">This is a dynamic route page.</p>

     
    </main>
  );
}