'use server';

import { LoginState } from '@/types/Forms';
import { cookies } from 'next/headers';

const DAY_IN_MINUTE = 60 * 60 * 24;

export default async function login(state: LoginState, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password) throw new Error('Preencha os campos');
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        body: formData,
      },
    );

    if (!response.ok) throw new Error('Senha ou usuário inválidos.');

    const responseJson = await response.json();

    (await cookies()).set('token', responseJson.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: DAY_IN_MINUTE,
    });

    return {
      data: null,
      error: '',
      ok: true,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        data: null,
        error: error.message,
        ok: false,
      };
    } else {
      return {
        data: null,
        error: 'Erro desconhecido',
        ok: false,
      };
    }
  }
}
