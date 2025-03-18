import { FormTitle } from '@/components/FormTitle';
import Signup from '@/components/Signup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie sua conta | Dogs',
  description: 'Cria sua conta no site Insta Dogs.',
};

export default function Criar() {
  return (
    <section className="animate-animeLeft">
      <FormTitle>Cadastra-se</FormTitle>

      <Signup />
    </section>
  );
}
