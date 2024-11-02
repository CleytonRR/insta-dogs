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
    <li onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
