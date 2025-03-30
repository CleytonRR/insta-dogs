import getPhotoId from '@/actions/getPhotoById';
import { Container } from '@/components/Container';
import { Title } from '@/components/FormTitle';
import Image from 'next/image';
import Link from 'next/link';

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

  // Create single prop and multiple prop, for now is only single photo.
  return (
    <Container className="animate-scaleUp m-auto grid scale-75 transform grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden rounded bg-white opacity-0">
      <div className="grid-rows-[auto_minmax(0,1fr)_auto]">
        <Image
          src={data?.photo.src || ''}
          alt={data?.photo.title || ''}
          width={800}
          height={800}
        />
      </div>

      <div className="p-0 pt-4">
        <div>
          <p className="mb-4 flex items-center justify-between opacity-50">
            <Link
              className="hover:underline"
              href={`/perfil/${data?.photo?.author || ''}`}
            >
              @{data?.photo.author}
            </Link>
            <span
              className={
                "before:mr-2 before:inline-block before:h-2.5 before:w-4 before:bg-[url(/assets/visualizacao-black.svg)] before:content-['']"
              }
            >
              {data?.photo.acessos}
            </span>
          </p>

          <Title>
            <Link href={`/foto/${data?.photo.id}`}>{data?.photo.title}</Link>
          </Title>

          <ul className="mb-8 mt-4 flex gap-4 text-lg font-bold">
            <li className='before:content=[""] mb-8 before:relative before:top-[3px] before:mr-2 before:mt-[5px] before:inline-block before:h-5 before:w-[2px] before:bg-[#333]'>
              {data?.photo.peso} kg
            </li>
            <li className='before:content=[""] mb-8 before:relative before:top-[3px] before:mr-2 before:mt-[5px] before:inline-block before:h-5 before:w-[2px] before:bg-[#333]'>
              {data?.photo.idade} anos
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
