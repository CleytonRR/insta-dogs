export type ActionResponse<T extends object = object> = {
  ok: boolean;
  error: string;
  data: T | null;
};
