'use server';

import { USER_POST } from '@/services/api';
import { ActionResponse } from '@/types/Forms';
import apiError from '@/utils/api-error';
import login from './login';

export default async function signup(
  state: ActionResponse,
  formData: FormData,
) {
  const email = formData.get('email') as string | null;
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!email || !username || !password) throw new Error('Preencha os campos');

    if (password.length < 6)
      throw new Error('A senha deve ter mais de 6 dígitos');

    const { url } = USER_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Erro ao criar usuário.');

    const { ok } = await login({ data: null, error: '', ok: false }, formData);

    if (!ok) throw new Error('Erro ao logar.');

    return {
      ok: true,
      error: '',
      data: null,
    };
  } catch (error) {
    return apiError(error);
  }
}
