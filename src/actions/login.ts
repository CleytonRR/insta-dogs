'use server';

import { TOKEN_POST } from '@/services/api';
import { LoginState } from '@/types/Forms';
import apiError from '@/utils/api-error';
import { cookies } from 'next/headers';

const DAY_IN_MINUTE = 60 * 60 * 24;

export default async function login(state: LoginState, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password) throw new Error('Preencha os campos');

    const { url } = TOKEN_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

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
    return apiError(error);
  }
}
