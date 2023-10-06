import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Navigation items for the mobile menu
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Spiritual Corner", href: "/spirit" },
  { name: "Journey", href: "/aboutme" },
];

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    // Dialog component from headlessui for creating the mobile menu
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
      {/* This div ensures the menu takes the full vertical space */}
      <div className="fixed inset-0 z-50" />
      
      {/* The actual panel containing menu items */}
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/10 px-6 py-6 sm:max-w-sm backdrop-blur backdrop-saturate-180">
        
        {/* Header section of the mobile menu */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Aria's Space</span>
            <img className="h-8 w-auto" src="/programmer.png" alt="" />
          </a>
          {/* Close button */}
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Menu items */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            {/* Navigation links */}
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* Login link */}
            <div className="py-6">
              <a
                href="mailto:zmzhangg@gmail.com"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-400 hover:bg-purple-300"
              >
                💭 Fancy a chat?
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default MobileMenu;
