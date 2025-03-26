import getPhotos from '@/actions/getPhotos';
import userGet from '@/actions/userGet';
import FeedPhotosItem from '@/components/FeedPhotoItem';
import Link from 'next/link';

export default async function Conta() {
  const { data: user } = await userGet();
  const { data: photos } = await getPhotos({ user: user?.username });

  return (
    <main>
      {photos?.length ? (
        <ul
          className={`mb-4 grid animate-animeLeft grid-cols-2 justify-items-center gap-[1rem] md:grid-cols-3`}
        >
          {photos.map((photo, index) => (
            <FeedPhotosItem key={photo.id} photo={photo} index={index} />
          ))}
        </ul>
      ) : (
        <>
          <span className="mb-2 block text-gray-600">
            Nenhuma foto adicionada.
          </span>
          <Link href={'/conta/postar'} className="text-blue-500 underline">
            Poste agora
          </Link>
        </>
      )}
    </main>
  );
}
