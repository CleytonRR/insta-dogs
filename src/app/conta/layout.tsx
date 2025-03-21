import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav>
        <p>Testando menu</p>
      </nav>
      {children}
    </>
  );
}
