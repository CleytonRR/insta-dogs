'use client';

import React, { useEffect } from 'react';
import FeedModal from '../FeedModal';
import FeedPhotos from '../FeedPhotos';

type FeedProps = {
  user?: [string, number];
};

const Feed = ({ user }: FeedProps) => {
  const [modalPhoto, setModalPhoto] = React.useState<object | null>(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto as { id: string }}
          setModalPhoto={setModalPhoto}
        />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user as [string, number]}
          page={page}
          setModalPhoto={(e) => setModalPhoto(e as unknown as object)}
          setInfinite={setInfinite}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

export default Feed;
