import { Heading, MainHeading } from '@/styles/Globalstyles';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
import AccountSection from '@/views/AccountSection';
import { useAuthContext } from '@/hooks/useAuthContext';
import withAuth from '@/components/HighOrders/WithAuth';
import BackButton from '@/components/BackButton';
import Head from 'next/head';

const MyAccount = () => {

    const { user } = useAuthContext();

    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    return (
        <>
            <Head>
                <title>User Account</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <BackButton dropdown={true} user={DisplayName} />
                <AccountSection />
            </main>
        </>
    )
}

export default withAuth(MyAccount);