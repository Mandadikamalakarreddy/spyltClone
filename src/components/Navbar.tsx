import Image from 'next/image'
import navLogo from "../../public/images/nav-logo.svg";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 md:p-9 p-3'>
      <Image src={navLogo} priority alt='navbar-logo' className='md:w-20 w-24' />
    </nav>
  )
}

export default Navbar