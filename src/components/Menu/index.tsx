import Image from 'next/image';
import Link from 'next/link';

import dogIcon from '@/assets/dogs.svg';
import user from '@/assets/user.svg';

export const Menu = () => {
  const logado = false;

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1)]">
      <nav className={`container flex h-16 items-center justify-between`}>
        <Link
          className={'flex items-center text-[#333]'}
          href="/"
          aria-label="Dogs - Home"
        >
          <Image src={dogIcon} alt="dog-icon" priority />
        </Link>

        {logado ? (
          <Link
            className="text-[#333 items-center] flex items-center gap-2"
            href="/conta"
          >
            Cleyton <Image src={user} alt="usuário ícone" priority />
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
