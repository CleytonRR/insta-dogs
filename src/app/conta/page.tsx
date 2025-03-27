import getPhotos from '@/actions/getPhotos';
import userGet from '@/actions/userGet';
import FeedPhotos from '@/components/FeedPhotos';
import Link from 'next/link';

export default async function Conta() {
  const { data: user } = await userGet();
  const { data: photos } = await getPhotos({ user: user?.username });

  return (
    <main>
      {photos?.length ? (
        <FeedPhotos photos={photos} user={user?.username} />
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
