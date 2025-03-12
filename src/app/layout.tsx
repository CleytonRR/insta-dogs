import './globals.css';
import { spectral } from '../styles/fonts';
import { Metadata } from 'next';
import { Menu } from '@/components/Menu';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Dogs Instagram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${spectral.variable} antialiased`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
