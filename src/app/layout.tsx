import './globals.css';
import { spectral } from '../styles/fonts';
import { Metadata } from 'next';
import { Menu } from '@/components/Menu';
import Footer from '@/components/Footer';
import { UserContextProvider } from '@/context/userContext';
import userGet from '@/actions/userGet';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Dogs Instagram',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-br">
      <body className={`${spectral.variable} antialiased`}>
        <div className="flex min-h-[calc(100vh_+_10rem)] flex-col">
          <UserContextProvider user={user}>
            <Menu />
            <main className="flex-1">{children}</main>
            <Footer />
          </UserContextProvider>
        </div>
      </body>
    </html>
  );
}
