'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={false}>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action} className="flex flex-col items-start">
        <input type="text" name="username" placeholder="usuário" />

        <input type="password" name="password" placeholder="senha" />

        <FormButton />
      </form>

      <p>{state?.error}</p>
    </>
  );
}
