'use client';

import { useUser } from '@/context/userContext';

export default function Conta() {
  const { user } = useUser();

  return <h1>Página de conta: {user?.username}</h1>;
}
