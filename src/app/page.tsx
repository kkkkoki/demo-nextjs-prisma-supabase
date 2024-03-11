import { User } from '@prisma/client';

export default function Home() {
  const user: Pick<User, 'names'> = {
    names: 'koki inoue',
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{user.names}</div>
    </main>
  );
}
