import { useAuthContext } from '@/hooks/useAuthContext';
import { AccountSectionContainer, AccountSectionWrapper } from '@/styles/views/AccountSectionStyles'
import React, { useEffect } from 'react'
import axios from '@/lib/axios';
import { message } from 'antd';
import { Heading, SubHeading } from '@/styles/Globalstyles';
import { useRouter } from 'next/router';
import { CommonButton } from '@/components/Common/Button';
import { Input } from '@/styles/components/FormStyles';



const VerifyEmail = () => {

    const { user, token } = useAuthContext();
    const otpInput = React.useRef<HTMLInputElement>(null);
    const [emailSent, setEmailSent] = React.useState(false);
    const [resendDisabled, setResendDisabled] = React.useState(false);
    const [countdown, setCountdown] = React.useState(20);

    const router = useRouter();

    const countDown = () => {
        let seconds = 20;
        (seconds)

        const countdownInterval = setInterval(() => {
            seconds--;
            setCountdown(seconds);

            if (seconds === 0) {
                setResendDisabled(false);
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    useEffect(() => {
        countDown()
        return () => {
            clearInterval(countdown);
        };
    }, [])

    const sendEmail = async () => {
        const loadingMessage = message.loading("Sending OTP to your Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user', {
                email: user?.userEmail
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("OTP sent to your Email")
                setEmailSent(true)
                setResendDisabled(true)


            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }


    const resendEmail = async () => {
        const loadingMessage = message.loading("Sending OTP to your Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user/resend', {
                email: user?.userEmail
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("OTP Re-sent to your Email")
            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }
    const verifyEmail = async () => {
        const otp = otpInput.current?.value;
        const loadingMessage = message.loading("Verifying Email...", 0);

        try {
            const response = await axios.post('/auth/verify-user/verify', {
                email: user?.userEmail,
                otp: otp
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            loadingMessage();
            if (response.status === 200) {
                message.success("Email Verified")
                window.location.replace('/user/account')
            }
        } catch (error) {
            console.log(error)
            message.destroy();
            message.error("Some Error Occured, Try again later")
        }
    }

    return (
        <AccountSectionContainer>
            {
                user?.isVerified === true ? (
                    <AccountSectionWrapper>
                        <Heading>Account Verified</Heading>
                        <SubHeading>You can now login to your account</SubHeading>
                        <CommonButton name='Go Back' onClick={() => router.push('/user/account')} />
                    </AccountSectionWrapper>
                ) : (
                    <AccountSectionWrapper>
                        <Heading>Verify Email</Heading>
                        <strong>Email will be sent to {user?.userEmail}</strong>
                        {!emailSent && <CommonButton name='Send Email' onClick={sendEmail} width='120px' height='40px' />}

                        {emailSent && (
                            <>
                                <input type="text" ref={otpInput} />
                                <button onClick={verifyEmail}>Verify</button>
                                <button onClick={resendEmail} disabled={resendDisabled}>
                                    {resendDisabled ? `Resend in ${countdown} seconds` : 'Resend'}
                                </button>
                            </>
                        )}

                    </AccountSectionWrapper>
                )
            }
        </AccountSectionContainer>
    )
}

export default VerifyEmail