import { getUsers } from '@/lib/fake-db';
import Link from 'next/link';

export default function UsersPage() {
  const users = getUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}