import Image from 'next/image';
import footerDogIcon from '@/assets/dogs-footer.svg';

export default async function Footer() {
  return (
    <footer className="bg-[#fb1] px-[1rem] pb-[1rem] pt-[3rem] text-center text-[#764701]">
      <Image
        className="mx-auto my-0"
        src={footerDogIcon}
        alt="dogs"
        width={28}
        height={22}
      />

      <p className="mt-[1rem]">Dogs. alguns direitos reservados.</p>
    </footer>
  );
}
