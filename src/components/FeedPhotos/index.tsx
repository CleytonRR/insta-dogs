import React from 'react';
import useFetch from '@/hooks/useFetch';
import { PHOTOS_GET } from '@/hooks/Api';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import FeedPhotosItem from '../FeedPhotoItem';

type FeedPhotosProps = {
  page: number;
  user: [string, number];
  setModalPhoto: (param: object) => void;
  setInfinite: (param: boolean) => void;
};

const FeedPhotos = ({
  page,
  user,
  setModalPhoto,
  setInfinite,
}: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user: user as never });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul
        className={`animeLeft mb-4 grid grid-cols-3 justify-items-center gap-4 sm:grid-cols-2`}
      >
        {(
          (data as Array<{
            id: string;
            src: string;
            title: string;
            acessos: string;
          }>) ?? []
        ).map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
