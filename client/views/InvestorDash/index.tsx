import React from 'react'
import { DashboardContainer, DashboardWrapper } from '@/styles/views/InvestorDash'
import { CommonButton } from '@/components/Common/Button'
import { useAuthContext } from '@/hooks/useAuthContext'
import { message } from 'antd'
import { Heading } from '@/styles/Globalstyles'

const InvestorDash = () => {

    const { investorData, dispatch } = useAuthContext();

    const Greet = () => {
        if (investorData) {
            let name = investorData?.investor.name;
            let Gender = investorData?.investor.gender === 'Male' ? 'Mr.' : 'Ms.';
            return <Heading>Welcome back, {Gender} {name}</Heading>
        }
    }


    const handleLogout = () => {
        localStorage.removeItem('investor')
        dispatch({ type: 'INVESTOR_LOGOUT' });
        message.success('Logged out');
    }

    return (
        <DashboardContainer>
            <DashboardWrapper>

                <div>
                    {Greet()}
                </div>
                <div>
                    <CommonButton name="Logout" width="150px" height="40px" onClick={handleLogout} />
                </div>
            </DashboardWrapper>
        </DashboardContainer>
    )
}

export default InvestorDash