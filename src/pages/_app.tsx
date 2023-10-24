import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { Footer, Header, MobileMenu, GradientBackground } from '../components';
import { SessionProvider } from "next-auth/react";

import '../styles/globals.css';
import '../styles/GradientBackground.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <SessionProvider session={pageProps.session}>
            <Header setMobileMenuOpen={setMobileMenuOpen}/>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <GradientBackground className='fixed' />
            
            <Component {...pageProps} />
            <Footer />
        </SessionProvider>
        );
}

export default MyApp;
