import { ActionResponse } from '@/types/Forms';

export default function apiError(error: unknown): ActionResponse {
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
