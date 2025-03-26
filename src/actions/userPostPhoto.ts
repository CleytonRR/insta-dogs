'use server';

import { PHOTO_POST } from '@/services/api';
import { ActionResponse } from '@/types/Forms';
import apiError from '@/utils/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function userPostPhoto(
  state: ActionResponse,
  formData: FormData,
) {
  const name = formData.get('nome') as string | null;
  const weight = formData.get('peso') as string | null;
  const age = formData.get('idade') as string | null;
  const photo = formData.get('img') as File;

  try {
    if (!name || !weight || !age || photo.size === 0) {
      throw new Error('Preencha todos os campos!');
    }

    const { url } = PHOTO_POST();

    const token = (await cookies()).get('token')?.value;

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Falha ao fazer upload da foto');
    }
  } catch (error) {
    return apiError(error);
  }

  revalidateTag('feedPhotos');
  redirect('/');
}
