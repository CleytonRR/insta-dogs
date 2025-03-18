import { FormTitle } from '@/components/FormTitle';
import LoginForm from '@/components/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Entre na sua conta.',
};

export default function Login() {
  return (
    <section className="animate-animeLeft">
      <FormTitle>Login</FormTitle>
      <LoginForm />
    </section>
  );
}
