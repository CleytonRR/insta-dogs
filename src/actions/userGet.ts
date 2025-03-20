'use server';

import { USER_GET } from '@/services/api';
import { ActionResponse } from '@/types/Forms';
import apiError from '@/utils/api-error';
import { cookies } from 'next/headers';

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

const ONE_MINUTE_IN_SECOND = 60;

export default async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value;

    if (!token) throw new Error('Token não encontrado');

    const { url } = USER_GET();

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: ONE_MINUTE_IN_SECOND,
      },
    });

    if (!response.ok) throw new Error('Error ao autenticar usuário');

    const user = (await response.json()) as User;

    return {
      data: user,
      ok: true,
      error: '',
    } as ActionResponse<User>;
  } catch (error) {
    return apiError(error);
  }
}
