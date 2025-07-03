import { Suspense } from "react";

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id); // имитируем

  return (
    <div>
      <h2 className="text-xl">User ID: {params.id}</h2>
      <p>Name: {user.name}</p>
    </div>
  );
}

async function getUser(id: string) {
  return {
    id,
    name: `User ${id}`,
  };
}
