import { getProjectById } from '@/lib/fake-db';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(parseInt(id));
  if (!project) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p>Description: {project.description}</p>
    </div>
  );
}