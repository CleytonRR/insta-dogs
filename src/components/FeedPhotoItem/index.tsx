import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from '@/utils/cn';
import viewIcon from '@/assets/visualizacao.svg';

type FeedPhotosItemProps = {
  photo: {
    id: string;
    src: string;
    title: string;
    acessos: string;
  };
  setModalPhoto: (value: object) => void;
  index: number;
};

const FeedPhotosItem = ({
  photo,
  setModalPhoto,
  index,
}: FeedPhotosItemProps) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li
      className={cn(
        'group grid cursor-pointer overflow-hidden rounded-sm',
        index === 1 && 'md:col-span-2 md:row-span-2',
      )}
      onClick={handleClick}
    >
      <Link
        href={`/foto/${photo.id}`}
        scroll={false}
        className="grid cursor-pointer overflow-hidden rounded-sm"
      >
        <Image
          src={photo.src}
          alt={photo.title}
          width={1500}
          height={1500}
          className="col-start-1 row-start-1"
          sizes="80vw"
        />
        <span className="col-start-1 row-start-1 hidden grid-cols-1 content-center items-center justify-center bg-black/[0.3] text-center text-base text-white before:mr-2 before:inline-block before:h-2.5 before:w-4 before:content-[''] group-hover:flex">
          <Image src={viewIcon} alt="view icon" />
          {photo.acessos}
        </span>
      </Link>
    </li>
  );
};

export default FeedPhotosItem;
