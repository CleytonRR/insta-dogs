export type ActionResponse<T extends object = object> = {
  ok: boolean;
  error: string;
  data: T | null;
};

export type Photo = {
  id: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

export type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};
