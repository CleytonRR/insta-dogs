import { LoginState } from '@/types/Forms';

export default function apiError(error: unknown): LoginState {
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
