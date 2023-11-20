import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth';
import { useAuthContext } from '@/hooks/useAuthContext';
import { Heading, MainHeading } from '@/styles/Globalstyles';
import React from 'react'
import AdminDashSection from '@/views/AdminDashSection';
import Head from 'next/head';

const AdminDashboard = () => {
    const { user } = useAuthContext();


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;

    return (
        <>
            <Head>
                <title>Dashboard | Admin</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <BackButton color='#fff' backgroundColor='#001336' dropdown={true} user={DisplayName} />
                <AdminDashSection />
            </main>
        </>
    )
}

export default AdminAuth(AdminDashboard)