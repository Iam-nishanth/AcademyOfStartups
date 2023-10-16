import React, { useState } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Header/Navbar'
import Sidebar from '@/components/Header/Sidebar'
import InvestorLogin from '@/components/InvestorLogin'

const InvestorsLogin = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <InvestorLogin />
        </main>
    )
}

export default InvestorsLogin