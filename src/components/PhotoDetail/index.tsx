import { Photo } from '@/types/Forms';
import Image from 'next/image';

import Link from 'next/link';
import { Title } from '../FormTitle';

type PhotoDetailProps = {
  photo: Photo;
};

export default function PhotoDetail({ photo }: PhotoDetailProps) {
  return (
    <>
      <div className="grid-rows-[auto_minmax(0,1fr)_auto]">
        <Image
          src={photo.src || ''}
          alt={photo.title || ''}
          width={800}
          height={800}
        />
      </div>

      <div className="p-0 pt-4">
        <div>
          <p className="mb-4 flex items-center justify-between opacity-50">
            <Link
              className="hover:underline"
              href={`/perfil/${photo?.author || ''}`}
            >
              @{photo.author}
            </Link>
            <span
              className={
                "before:mr-2 before:inline-block before:h-2.5 before:w-4 before:bg-[url(/assets/visualizacao-black.svg)] before:content-['']"
              }
            >
              {photo.acessos}
            </span>
          </p>

          <Title>
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>

          <ul className="mb-8 mt-4 flex gap-4 text-lg font-bold">
            <li className='before:content=[""] mb-8 before:relative before:top-[3px] before:mr-2 before:mt-[5px] before:inline-block before:h-5 before:w-[2px] before:bg-[#333]'>
              {photo.peso} kg
            </li>
            <li className='before:content=[""] mb-8 before:relative before:top-[3px] before:mr-2 before:mt-[5px] before:inline-block before:h-5 before:w-[2px] before:bg-[#333]'>
              {photo.idade} anos
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
