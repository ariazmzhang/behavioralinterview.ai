import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const navigation = [
    { name: "Blog", href: "/blog" },
    { name: "Page", href: "/page" },
    { name: "root", href: "/root" },
    { name: "Build", href: "/build" },
  ];

type HeaderProps = {
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
  

const Header: React.FC<HeaderProps> = ({ setMobileMenuOpen }) => {
	const router = useRouter();
  	return (
      <nav className="top-0 w-full flex items-center justify-between p-6 lg:px-8 m-1 fixed z-50 bg-opacity-90" aria-label="Global">
      {/* Logo */}
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">My Fav Restaurants</span>
          {/* <img src="programmer.png" alt="" className='h-4'/>
          <h1 className='text-4xl'>👩🏻‍💻</h1>  */}
          <img className="h-10 w-auto" src="/logo.png" alt="my logo" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Desktop Navigation */}
      {/* <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          	<a 
				key={item.name} 
				href={item.href} 
				className={`"text-sm font-semibold leading-6 ${
					router.pathname === item.href ? "text-purple-400" : "text-white"
				  }`}
			>
            {item.name}
          </a>
        ))}
      </div> */}

      {/* Login */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
