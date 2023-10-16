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

const InvestorDashboard = () => {
    const router = useRouter();
    const { investorData, loading, dispatch } = useAuthContext();

    const [isOpen, setIsOpen] = useState<boolean>(false);


    // useEffect(() => {
    //     if (!loading && !investorData) router.push('/investors')
    // }, [loading, investorData, dispatch])

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            <Layout>
                <InvestorDash />
            </Layout>

        </main>
    )
}

export default InvestorAuth(InvestorDashboard)