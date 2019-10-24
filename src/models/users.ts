type createdAt = Date | null;

export interface UserInterface {
  id: string;
  createdAt: createdAt;
  name: string;
  email: string;
  key: string;
}

export default function UserModel(data: any | UserInterface): UserInterface | null {
  if (!data) return null;

  return {
    id: data.id || '',
    createdAt: data.createdAt ? new Date(data.createdAt) : null,
    name: data.name || '',
    email: data.email || '',
    key: data.key || '',
  };
}
