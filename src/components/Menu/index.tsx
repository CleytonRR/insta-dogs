import Image from 'next/image';
import Link from 'next/link';

import dogIcon from '@/assets/dogs.svg';
import user from '@/assets/user.svg';
import userGet, { User } from '@/actions/userGet';

export const Menu = async () => {
  const { data } = await userGet();

  const userData = data as User | null;

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1)]">
      <nav
        className={`mx-auto mt-0 flex h-16 max-w-[50rem] items-center justify-between px-4 pt-0`}
      >
        <Link
          className={'flex items-center text-[#333]'}
          href="/"
          aria-label="Dogs - Home"
        >
          <Image src={dogIcon} alt="dog-icon" priority />
        </Link>

        {userData ? (
          <Link
            className="text-[#333 items-center] flex items-center gap-2"
            href="/conta"
          >
            {userData.nome} <Image src={user} alt="usuário ícone" priority />
          </Link>
        ) : (
          <Link
            className="text-[#333 items-center] flex items-center gap-2"
            href="/login"
          >
            Login / Criar <Image src={user} alt="usuário ícone" priority />
          </Link>
        )}
      </nav>
    </header>
  );
};
