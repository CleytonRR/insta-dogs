import { FormTitle } from '@/components/FormTitle';
import LostPasswordForm from '@/components/LostPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu  a senha | Dogs',
  description: 'Recupere a sua senha.',
};

export default function Perdeu() {
  return (
    <section className="animate-animeLeft">
      <FormTitle>Perdeu a senha?</FormTitle>
      <LostPasswordForm />
    </section>
  );
}
