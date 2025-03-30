'use server';

import { PHOTO_DELETE } from '@/services/api';
import apiError from '@/utils/api-error';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function deleteAction(id: string) {
  try {
    const { url } = PHOTO_DELETE(id);

    const token = (await cookies()).get('token')?.value;

    if (!token) throw new Error('Token not found');

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Error deleting photo');
  } catch (error) {
    return apiError(error);
  }

  redirect('/conta');
}
