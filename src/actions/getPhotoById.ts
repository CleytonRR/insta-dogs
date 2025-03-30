'use server';

import { PHOTO_GET } from '@/services/api';
import { ActionResponse, PhotoDetail } from '@/types/Forms';
import apiError from '@/utils/api-error';

export default async function getPhotoId(
  id: number,
): Promise<ActionResponse<PhotoDetail>> {
  try {
    const { url } = PHOTO_GET(id);

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) throw new Error('Erro ao buscar foto.');

    const data = await response.json();

    return {
      data,
      error: '',
      ok: true,
    };
  } catch (error) {
    return apiError(error);
  }
}
