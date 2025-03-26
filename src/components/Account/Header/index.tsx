'use client';

import useMedia from '@/hooks/useMedia';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { AddIcon, FeedIcon, LogoutIcon, StaticIcon } from '@/components/Icons';
import { FormTitle } from '@/components/FormTitle';
import cn from '@/utils/cn';

function getTitle(pathName: string) {
  switch (pathName) {
    case '/conta/postar':
      return 'Poste Sua Foto';
    case '/conta/estatisticas':
      return 'Estatísticas';
    default:
      return 'Minha Conta';
  }
}

export const AccountHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathName = usePathname();

  const mobile = useMedia('(max-width: 40rem');

  useEffect(() => {
    setMobileMenu(false);
  }, []);

  return (
    <header className="relative mb-8 mt-4 grid grid-cols-[1fr_auto] content-center">
      <FormTitle className="mt-0">{getTitle(pathName)}</FormTitle>

      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className="grid grid-cols-4 gap-4">
        <Link
          href="/conta"
          className={cn(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-transparent bg-[#eee] transition-all hover:border hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee]',
            pathName === '/conta' &&
              'border-[#fb1] bg-white text-[#fb1] shadow-[0_0_0_3px_#eee]',
          )}
        >
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={cn(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-transparent bg-[#eee] transition-all hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee]',
            pathName === '/conta/estatisticas' &&
              'border-[#fb1] bg-white text-[#fb1] shadow-[0_0_0_3px_#eee]',
          )}
        >
          <StaticIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/conta/postar"
          className={cn(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-transparent bg-[#eee] transition-all hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee]',
            pathName === '/conta/postar' &&
              'border-[#fb1] bg-white text-[#fb1] shadow-[0_0_0_3px_#eee]',
          )}
        >
          <AddIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-transparent bg-[#eee] transition-all hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee]">
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};
