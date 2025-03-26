'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import { ChangeEvent, useState } from 'react';
import userPostPhoto from '@/actions/userPostPhoto';

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
          Enviar
        </Button>
      )}
    </>
  );
}

export default function PostPhotoForm() {
  const [state, action] = useFormState(userPostPhoto, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = useState<string>();

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      const imageUrl = URL.createObjectURL(target.files[0]);
      setImg(imageUrl);
    }
  }

  return (
    <section className="mb-8 grid animate-animeLeft grid-cols-1 gap-8 md:grid-cols-2">
      <form action={action} className="mb-8 flex flex-col">
        <Input label="nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />

        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className="mb-4"
        />

        {state.error && <p className="text-red-500">{state.error}</p>}
        <FormButton />
      </form>

      <div>
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`rounded-2xl bg-cover bg-center after:block after:h-0 after:pb-[100%] after:content-['']`}
        ></div>
      </div>
    </section>
  );
}
