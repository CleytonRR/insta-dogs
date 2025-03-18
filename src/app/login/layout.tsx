// import Image from 'next/image';
import { ReactNode } from 'react';
// import loginBackground from '@/assets/login.jpg';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-svh grid-cols-2 gap-8 before:block before:bg-[url('/assets/login.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']">
      <div className="mt-[20vh] max-w-96 p-4">{children}</div>
    </div>
  );
}
