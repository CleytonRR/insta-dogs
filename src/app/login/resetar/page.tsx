import { Title } from '@/components/FormTitle';
import ResetPassword from '@/components/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resete a sua senha.',
};

type ResetarProps = {
  searchParams: Promise<{
    key: string;
    login: string;
  }>;
};

export default async function Resetar({ searchParams }: ResetarProps) {
  const params = await searchParams;
  console.log(params);

  return (
    <section className="animate-animeLeft">
      <Title>Resetar senha</Title>

      <ResetPassword token={params.key} login={params.login} />
    </section>
  );
}
