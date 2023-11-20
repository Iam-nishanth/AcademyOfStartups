import React, { useState } from 'react';
import Navbar from '../../../components/Header/Navbar';
import Sidebar from '../../../components/Header/Sidebar';
import Footer from '../../Footer';
import Head from 'next/head';


interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    secure?: boolean
}


const Layout: React.FC<LayoutProps> = ({ children, title, description, secure }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);


    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#fff" />
                <meta name="twitter:image" content="https://i.ibb.co/Db7ryjd/academy-of-startups-og.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:url" content="https://academyofstartups.com" />
                <meta property="og:image" content="https://i.ibb.co/Db7ryjd/academy-of-startups-og.png" />
                <meta property="og:type" content="website" />
                secure && <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <Navbar toggle={toggle} />
                <Sidebar toggle={toggle} isOpen={isOpen} />
                {children}
                <Footer />
            </main>
        </>

    );
};

export default Layout;