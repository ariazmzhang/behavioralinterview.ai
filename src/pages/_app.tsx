import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/GradientBackground.css';
import { GradientBackground } from '../components';
import { Hero, Header, MobileMenu } from '../components';
import React, { useState } from 'react';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <SessionProvider session={pageProps.session}>
            <Header setMobileMenuOpen={setMobileMenuOpen}/>
            <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <GradientBackground className='fixed' />
            
            <Component {...pageProps} />
        </SessionProvider>
        );
}

export default MyApp;
