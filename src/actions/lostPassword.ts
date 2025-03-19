'use server';

import { PASSWORD_LOST } from '@/services/api';
import { ActionResponse } from '@/types/Forms';
import apiError from '@/utils/api-error';

export default async function lostPassword(
  state: ActionResponse,
  formData: FormData,
) {
  const login = formData.get('login') as string | null;
  const urlPerdeu = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Informe um login válido');

    const { url } = PASSWORD_LOST();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu,
      }),
    });

    if (!response.ok) throw new Error('Email ou usuário não cadastrado.');

    return {
      ok: true,
      error: '',
      data: {},
    };
  } catch (error) {
    return apiError(error);
  }
}
