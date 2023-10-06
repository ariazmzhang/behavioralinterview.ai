// pages/index.tsx
import { Hero, Header, MobileMenu } from '../components';
import React, { useState } from 'react';


const HomePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-screen h-screen flex flex-row justify-center items-center">
        <Hero />
    </div>
  );
};

export default HomePage;