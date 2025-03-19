'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import Error from '../Helpers/Error';
import lostPassword from '@/actions/lostPassword';
import { useEffect, useState } from 'react';

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
          Enviar email
        </Button>
      )}
    </>
  );
}

export default function LostPasswordForm() {
  const [state, action] = useFormState(lostPassword, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <form action={action} className="mb-8 flex flex-col">
        <Input label="Email / Usuário" type="text" name="login" />
        <input type="hidden" name="url" value={url} />

        {state.data ? (
          <p className="text-green-600">
            Se tiver alguma conta com esse email, ela receberá um email
          </p>
        ) : (
          <FormButton />
        )}

        <Error error={state.error} />
      </form>
    </>
  );
}
