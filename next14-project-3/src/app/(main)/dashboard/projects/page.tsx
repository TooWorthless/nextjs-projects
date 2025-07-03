import { getProjects } from '@/lib/fake-db';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link href={`/dashboard/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}