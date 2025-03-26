import PostPhotoForm from '@/components/PostPhotoForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post foto | insta dogs',
  description: 'Página para postar novas fotos',
};

export default function Postar() {
  return <PostPhotoForm />;
}
