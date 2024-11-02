import React from 'react';
import Image from 'next/image';

type PhotoContentProps = {
  data: {
    photo: {
      src: string;
      title: string;
    };
  };
};

const PhotoContent = ({ data }: PhotoContentProps) => {
  const { photo } = data;

  return (
    <div>
      <div>
        <Image src={photo.src} alt={photo.title} />
      </div>
      {/* TODO: add detail  */}
      {/* <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div> */}

      {/* TODO: Add comment after */}
      {/* <PhotoComments single={single} id={photo.id} comments={comments} /> */}
    </div>
  );
};

export default PhotoContent;
