'use server';

import { PHOTOS_GET } from '@/services/api';
import { ActionResponse, Photo, PhotosGetParams } from '@/types/Forms';
import apiError from '@/utils/api-error';

export default async function getPhotos(
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit,
): Promise<ActionResponse<Photo[]>> {
  const options = optionsFront || {
    next: { revalidate: 10, tags: ['feedPhotos'] },
  };

  try {
    const { url } = PHOTOS_GET({ page, total, user });

    const response = await fetch(url, options);

    if (!response.ok) throw new Error('Erro ao carregar imagens');

    const data = (await response.json()) as Photo[];

    return {
      ok: true,
      data,
      error: '',
    };
  } catch (error) {
    return apiError(error);
  }
}
