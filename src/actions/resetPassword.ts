'use server';

import { PASSWORD_RESET } from '@/services/api';
import { ActionResponse } from '@/types/Forms';
import apiError from '@/utils/api-error';
import { redirect } from 'next/navigation';

export default async function resetPassword(
  state: ActionResponse,
  formData: FormData,
) {
  const password = formData.get('password') as string | null;
  const key = formData.get('key') as string | null;
  const login = formData.get('login') as string | null;

  try {
    if (!login || !key || !password) throw new Error('Informe todos os dados');

    const { url } = PASSWORD_RESET();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Erro ao resetar senha.');
  } catch (error) {
    return apiError(error);
  }

  redirect('/login');
}
