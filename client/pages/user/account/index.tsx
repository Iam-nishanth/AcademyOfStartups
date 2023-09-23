import { Heading, MainHeading } from '@/styles/Globalstyles';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
import AccountSection from '@/views/AccountSection';
import { useAuthContext } from '@/hooks/useAuthContext';

const MyAccount = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            {/* <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} /> */}
            <AccountSection />
        </main>
    )
}

export default MyAccount