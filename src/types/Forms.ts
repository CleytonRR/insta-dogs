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
  author: string;
};

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_content: string;
  comment_karma: string;
  comment_approved: string;
  comment_agent: string;
  comment_type: string;
  comment_parent: string;
  user_id: string;
};

export type PhotoDetail = {
  photo: Photo;
  comments: Comment[];
};

export type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};
