import Feed from '@/components/Feed';
import { Head } from '@/components/Head';

export default function Home() {
  return (
    <section className="mainContainer container">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
}
