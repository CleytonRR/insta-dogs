'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/Button';
import { Input } from '../Input';
import Error from '../Helpers/Error';
import resetPassword from '@/actions/resetPassword';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="self-start" disabled={pending}>
          Resetando...
        </Button>
      ) : (
        <Button className="self-start" disabled={false}>
          Resetar senha
        </Button>
      )}
    </>
  );
}

// https://ai.yapp.rec.br/vagas/engenheiro-de-software-senior-GET000017 inscrever nessa vaga

type ResetPasswordProps = {
  token: string;
  login: string;
};

export default function ResetPassword({ token, login }: ResetPasswordProps) {
  const [state, action] = useFormState(resetPassword, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action} className="mb-8 flex flex-col">
        <Input label="Senha" type="password" name="password" />

        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={token} />

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
