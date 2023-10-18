/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from '@/components/Header/Navbar';
import Sidebar from '@/components/Header/Sidebar';
import { useAuthContext } from '@/hooks/useAuthContext';
import { message } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import InvestorAuth from '@/components/HighOrders/Investor';
import InvestorDash from '@/views/InvestorDash';
import Layout from '@/components/Layout';
import BackButton from '@/components/BackButton';

const InvestorDashboard = () => {
    const router = useRouter();
    const { investorData, loading, dispatch } = useAuthContext();


    const handleLogout = () => {
        localStorage.removeItem('investor')
        dispatch({ type: 'INVESTOR_LOGOUT' });
        message.success('Logged out');
    }

    return (
        <main>
            <BackButton dropdown={false} handle={handleLogout} />
            <InvestorDash />

        </main>
    )
}

export default InvestorAuth(InvestorDashboard)