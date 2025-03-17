import React, { MouseEvent } from 'react';
import { PHOTO_GET } from '@/services/api';
import useFetch from '@/hooks/useFetch';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import PhotoContent from '../Photo/Content';

type FeedModalParams = {
  photo: {
    id: string;
  };
  setModalPhoto: (param: null) => void;
};

const FeedModal = ({ photo, setModalPhoto }: FeedModalParams) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div
      className="sm:pr[calc(2rem_+_15px)] fixed left-0 top-0 z-50 flex h-svh w-svw bg-black/[0.4] py-8 pl-16 pr-[calc(4rem_+15px)] sm:pl-8 sm:pt-8"
      onClick={handleOutsideClick}
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
