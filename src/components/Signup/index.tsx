'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import Error from '../Helpers/Error';
import { useEffect } from 'react';
import signup from '@/actions/signup';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="self-start" disabled={pending}>
          Cadastrando...
        </Button>
      ) : (
        <Button className="self-start" disabled={false}>
          Cadastrar
        </Button>
      )}
    </>
  );
}

export default function Signup() {
  const [state, action] = useFormState(signup, {
    ok: false,
    error: '',
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = '/login';
  }, [state.ok]);

  return (
    <>
      <form action={action} className="mb-8 flex flex-col">
        <Input label="Usuário" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />

        <FormButton />

        <Error error={state.error} />
      </form>
    </>
  );
}
