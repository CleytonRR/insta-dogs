import React, { MouseEvent } from 'react';
import { PHOTO_GET } from '@/hooks/Api';
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
    <div onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
