import React from 'react';
import FeedPhotos from '../FeedPhotos';
import getPhotos from '@/actions/getPhotos';

export default async function Feed() {
  const { data: photos } = await getPhotos(
    {},
    {
      cache: 'no-store',
    },
  );

  return (
    <section>
      <FeedPhotos photos={photos} user={0} />
    </section>
  );
}
