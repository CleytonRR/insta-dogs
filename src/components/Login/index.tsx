'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import Error from '../Helpers/Error';
import { useEffect } from 'react';
import Link from 'next/link';

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
      <form action={action} className="mb-8 flex flex-col">
        <Input label="Usuário" type="text" name="username" />
        <Input label="Password" type="password" name="password" />

        <FormButton />

        <Error error={state.error} />
      </form>

      <Link
        className="inline-block px-0 py-2 leading-none text-[#666] underline after:block after:h-[2px] after:w-full after:bg-current after:content-['']"
        href={'/login/perdeu'}
      >
        Perdeu a senha?
      </Link>

      <div className="my-8">
        <h2 className="font-spectral text-[2rem] leading-none after:block after:h-2 after:w-12 after:rounded after:bg-[#ddd] after:content-['']">
          Cadastra-se
        </h2>
        <p className="my-4">Ainda não possui conta? Cadastra-se no site.</p>

        <Link
          className="box-border min-w-32 rounded border-0 bg-[#fb1] px-[1rem] py-[0.8rem] font-spectral text-base text-[#764701] transition-all hover:shadow-[0px_0px_0px_3px_#fea,0px_0px_0px_4px_#fb1] hover:outline-none focus:outline-none disabled:cursor-wait disabled:opacity-50"
          href={'/login/criar'}
        >
          Cadastro
        </Link>
      </div>
    </>
  );
}
