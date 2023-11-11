import { CommonButton } from '@/components/Common/Button'
import React from 'react'
import axios from '@/lib/axios'
import { useAuthContext } from '@/hooks/useAuthContext'
import { DashboardContainer, DashboardWrapper } from '@/styles/views/DashBoardstyles'
import { Heading } from '@/styles/Globalstyles'
import Layout from '@/components/Layout/NavOnly'
import { message } from 'antd'

const VerifyUser = () => {

    const { user } = useAuthContext();

    const verifyUser = async () => {
        const loadingMessage = message.loading("Sending OTP to your Email...", 0);
        try {
            const response = await axios.post<any>('/admin/verify-user', {
                email: user?.userEmail,
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("OTP sent to your Email")
                console.log(response)
            }
        } catch (error) {
            message.destroy()
            message.error("Some Error Occured, Try again later")
            console.log(error)
        }
    }

    return (
        <Layout>

            <main>
                <DashboardContainer>
                    <DashboardWrapper>
                        <Heading>Verify User</Heading>
                        <CommonButton name='Verify' onClick={verifyUser} />
                    </DashboardWrapper>
                </DashboardContainer>
            </main>
        </Layout>
    )
}

export default VerifyUser