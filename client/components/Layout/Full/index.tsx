import React, { useState } from 'react';
import Navbar from '../../../components/Header/Navbar';
import Sidebar from '../../../components/Header/Sidebar';
import Footer from '../../Footer';
import Head from 'next/head';


interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}


const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
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
                <meta name="twitter:image" content="https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:url" content="jsmastery.pro" />
                <meta property="og:image" content="https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg" />
                <meta property="og:type" content="website" />
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