import { getUserById } from '@/lib/fake-db';
import { notFound } from 'next/navigation';

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = getUserById(parseInt(id));
  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}