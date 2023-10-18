/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { DashboardContainer, DashboardWrapper } from '@/styles/views/DashBoardstyles'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useRouter } from 'next/router'
import axios from 'axios'
import { message } from 'antd'
import { domain_Options } from '@/components/InvestorForm/Data'
import InvestorsComponent from '@/components/Investors'
import { GetInvestors, Investor } from '@/types/Investors'
import DashBoardCards from '@/components/DashBoardCards'



const DashBoardsection = () => {
    const { user, business, loading, token, dispatch } = useAuthContext();
    const router = useRouter();
    const [investorData, setInvestorData] = useState<Investor[]>([]);

    useEffect(() => {
        if (!loading && !user && !business) {
            router.push('/add-business');
        }

        const fetchData = async () => {
            try {
                const response = await axios.get<GetInvestors>('https://pglgl7pl-8080.inc1.devtunnels.ms/auth/investors', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    setInvestorData(response.data.investors);
                }
            } catch (error: any) {
                console.log(error);

                if (error.response && error.response.status === 401) {
                    message.error('Token Expired, Please Login Again');
                    router.push('/login');

                    localStorage.removeItem('user');
                    localStorage.removeItem('business');
                    localStorage.removeItem('token');
                    dispatch({ type: 'LOGOUT' });
                }
            }
        };

        fetchData();
    }, [loading, user]);

    const CardData = [
        { title: "Company Alliances", count: "20+", classname: 'blue' },
        { title: "Investor Community", count: "20+", classname: 'green' },
        { title: "Networking Insights", count: "200+", classname: 'yellow' },
    ];


    return (
        <DashboardContainer>
            <DashboardWrapper>
                <DashBoardCards />
                <InvestorsComponent investorData={investorData} domainOptions={domain_Options} />
            </DashboardWrapper>
        </DashboardContainer>
    );
}

export default DashBoardsection