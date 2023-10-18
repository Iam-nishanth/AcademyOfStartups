import { Heading, MainHeading } from '@/styles/Globalstyles';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
import AccountSection from '@/views/AccountSection';
import { useAuthContext } from '@/hooks/useAuthContext';
import withAuth from '@/components/HighOrders/WithAuth';
import BackButton from '@/components/BackButton';

const MyAccount = () => {

    const { user } = useAuthContext();

    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <AccountSection />
        </main>
    )
}

export default withAuth(MyAccount);