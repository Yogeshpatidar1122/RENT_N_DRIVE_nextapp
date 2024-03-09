import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] border-black mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/rent-n-drive-logo.png'
          alt='logo'
          width={160}
          height={50}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign In'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white w-24 p-2 hover:font-bold '
      />
    </nav>
  </header>
);

export default NavBar;