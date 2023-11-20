/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthContext } from '@/hooks/useAuthContext';
import { message } from 'antd';
import React from 'react'
import InvestorAuth from '@/components/HighOrders/Investor';
import InvestorDash from '@/views/InvestorDash';
import BackButton from '@/components/BackButton';
import Head from 'next/head';

const InvestorDashboard = () => {
    const { dispatch } = useAuthContext();


    const handleLogout = () => {
        localStorage.removeItem('investor')
        dispatch({ type: 'INVESTOR_LOGOUT' });
        message.success('Logged out');
    }

    return (
        <>
            <Head>
                <title>Investors | Dashboard</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <BackButton dropdown={false} handle={handleLogout} />
                <InvestorDash />

            </main>
        </>

    )
}

export default InvestorAuth(InvestorDashboard)