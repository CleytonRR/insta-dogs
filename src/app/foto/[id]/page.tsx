import getPhotoId from '@/actions/getPhotoById';
import { Container } from '@/components/Container';
import PhotoDetail from '@/components/PhotoDetail';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{ id: number }>;
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  const { data } = await getPhotoId(id);

  return {
    title: `Foto by ${data?.photo?.title}`,
    description: `Nice photo to ${data?.photo?.title}`,
  };
}

export default async function FotoById({ params }: Params) {
  const { id } = await params;

  const { data } = await getPhotoId(id);

  if (!data) {
    return notFound();
  }

  return (
    <Container className="animate-scaleUp m-auto grid scale-75 transform grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden rounded bg-white opacity-0">
      <PhotoDetail photo={data?.photo} />
    </Container>
  );
}
