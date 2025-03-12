import React from 'react';
import Image from 'next/image';

type FeedPhotosItemProps = {
  photo: {
    src: string;
    title: string;
    acessos: string;
  };
  setModalPhoto: (value: object) => void;
};

const FeedPhotosItem = ({ photo, setModalPhoto }: FeedPhotosItemProps) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li
      className="grid cursor-pointer overflow-hidden rounded-sm"
      onClick={handleClick}
    >
      <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      <span className="grid-area hidden grid-cols-1 grid-rows-1 items-center justify-center bg-black/[0.3] text-center text-base text-white">
        {photo.acessos}
      </span>
    </li>
  );
};

export default FeedPhotosItem;
