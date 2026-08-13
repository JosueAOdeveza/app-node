const API_URL = 'http://localhost:3000';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
}

export async function createUser(data: { name: string; email: string }) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erro ao criar usuário');
  return res.json();
}

export async function deleteUser(id: string) {
  await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
}