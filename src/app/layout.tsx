import './globals.css';
import { spectral } from '../styles/fonts';
import { Metadata } from 'next';
import { Menu } from '@/components/Menu';
import Footer from '@/components/Footer';

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
        <div className="flex min-h-[calc(100vh_+_10rem)] flex-col">
          <Menu />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
