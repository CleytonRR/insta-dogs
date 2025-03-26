import { AccountHeader } from '@/components/Account/Header';
import { Container } from '@/components/Container';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <AccountHeader />
      {children}
    </Container>
  );
}
