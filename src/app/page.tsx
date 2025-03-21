import { Container } from '@/components/Container';
import Feed from '@/components/Feed';
import { Head } from '@/components/Head';

export default function Home() {
  return (
    <Container className="mt-8">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </Container>
  );
}
