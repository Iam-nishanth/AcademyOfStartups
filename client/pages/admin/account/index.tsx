import { Heading } from '@/styles/Globalstyles';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));

const MyAccount = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <Heading>My Account</Heading>
        </main>
    )
}

export default MyAccount