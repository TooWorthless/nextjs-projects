export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const projects: Project[] = [
  { id: 1, name: 'Project Alpha', description: 'A sample project' },
  { id: 2, name: 'Project Beta', description: 'Another sample project' },
];

export function getUsers(): User[] {
  return users;
}

export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}