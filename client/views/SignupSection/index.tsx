/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FormContainer, ImageContainer, LoginText, SignupSectionContainer, SignupSectionWrapper } from '@/styles/views/SignupSection'
import Image from 'next/image'
import { Heading } from '@/styles/Globalstyles'
import LoginForm from '@/components/LoginForm'
import UserSignup from '@/components/UserSignup'
import { motion } from 'framer-motion'

const SignupSection = () => {
    const [login, setLogin] = React.useState(true);

    const handleToggleLogin = () => {
        setLogin(prevLogin => !prevLogin);
    };

    const FormComponent = login ? LoginForm : UserSignup;

    return (
        <SignupSectionContainer>
            <SignupSectionWrapper>
                <ImageContainer>

                    {
                        login ? (
                            <Heading>Welcome Back!</Heading>
                        ) : (
                            <Heading>Join us and start your Development Journey</Heading>
                        )
                    }
                    <Image src="/images/StartupSvg.svg" alt="signup" width={500} height={500} />
                </ImageContainer>
                <FormContainer>
                    {
                        login ? (
                            <LoginText>Don't have an account? <span onClick={handleToggleLogin}>Sign up</span></LoginText>
                        ) : (
                            <LoginText>Already have an account? <span onClick={handleToggleLogin}>Login</span></LoginText>
                        )
                    }

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}
                    >
                        <FormComponent />
                    </motion.div>
                </FormContainer>
            </SignupSectionWrapper>
        </SignupSectionContainer>
    );
};

export default SignupSection