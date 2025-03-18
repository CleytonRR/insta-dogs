'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import Error from '../Helpers/Error';
import { useEffect } from 'react';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="self-start" disabled={pending}>
          Enviando...
        </Button>
      ) : (
        <Button className="self-start" disabled={false}>
          Entrar
        </Button>
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

  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action} className="flex flex-col">
        <Input label="Usuário" type="text" name="username" />
        <Input label="Password" type="password" name="password" />

        <FormButton />

        <Error error={state.error} />
      </form>
    </>
  );
}
