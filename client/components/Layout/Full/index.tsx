import React, { useState } from 'react';
import Navbar from '../../../components/Header/Navbar';
import Sidebar from '../../../components/Header/Sidebar';
import Footer from '../../Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;