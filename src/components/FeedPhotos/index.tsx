'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import FeedPhotosItem from '../FeedPhotoItem';
import { Photo, PhotosGetParams } from '@/types/Forms';
import getPhotos from '@/actions/getPhotos';
import Loading from '../Loading';

type FeedPhotosProps = Pick<PhotosGetParams, 'user'> & {
  photos?: Photo[] | null;
};

const FeedPhotos = ({ photos, user }: FeedPhotosProps) => {
  const [photosFeed, setPhotosFeed] = useState(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(
    photos && photos?.length < 6 ? false : true,
  );

  const isFetching = useRef(false);

  const infiniteScroll = useCallback(() => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);

    setTimeout(() => {
      setPage((page) => page + 1);
      isFetching.current = false;
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (page === 1) return;

    async function getPagePhotos(page: number) {
      const { data: photos } = await getPhotos({
        page,
        total: 6,
        user,
      });

      if (photos) {
        setPhotosFeed((photosFeed) => [...(photosFeed || []), ...photos]);

        if (photos.length < 6) {
          setIsInfiniteScroll(false);
        }
      }
    }

    getPagePhotos(page);
  }, [page, user]);

  useEffect(() => {
    if (isInfiniteScroll) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infiniteScroll, isInfiniteScroll]);

  return (
    <section>
      <ul
        className={`mb-4 grid animate-animeLeft grid-cols-2 justify-items-center gap-[1rem] md:grid-cols-3`}
      >
        {photosFeed?.map((photo, index) => (
          <FeedPhotosItem key={photo.id} photo={photo} index={index} />
        ))}
      </ul>

      <div className="mx-auto my-4 flex h-[100px]">
        {!isInfiniteScroll && (
          <p className="m-auto text-center text-[#888]">
            Não existem mais postagem para listar.
          </p>
        )}
        {loading && <Loading />}
      </div>
    </section>
  );
};

export default FeedPhotos;
