import Image from 'next/image';
import { ReactNode } from 'react';
import loginBackground from '@/assets/login.jpg';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-svh grid-cols-2 gap-2">
      <Image src={loginBackground} alt="Login background" />

      <div className="m-w-[30rem] mt-[20vh] p-4">{children}</div>
    </div>
  );
}
