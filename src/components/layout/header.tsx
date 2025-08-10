import Image from 'next/image';
import logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full h-header-height px-12 py-3.5 inline-flex flex-col justify-center items-center bg-white">
      <Image src={logo} alt="logo" width={49} height={28} />
    </header>
  );
};

export default Header;
