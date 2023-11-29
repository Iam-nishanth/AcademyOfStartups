import React from 'react'
import { FormContainer, LoginText, SignupSectionContainer, SignupSectionWrapper } from '@/styles/views/SignupSection'
import LoginForm from '@/components/LoginForm'
import UserSignup from '@/components/UserSignup'

const SignupSection = () => {
    const [login, setLogin] = React.useState(true);

    const handleToggleLogin = () => {
        setLogin(prevLogin => !prevLogin);
    };

    const FormComponent = login ? LoginForm : UserSignup;

    return (
        <SignupSectionContainer>
            <SignupSectionWrapper>
                <FormContainer>
                    {
                        login ? (
                            <LoginText>Don&apos;t have an account? <span onClick={handleToggleLogin}>Sign up</span></LoginText>
                        ) : (
                            <LoginText>Already have an account? <span onClick={handleToggleLogin}>Login</span></LoginText>
                        )
                    }

                    <FormComponent />
                </FormContainer>
            </SignupSectionWrapper>
        </SignupSectionContainer>
    );
};

export default SignupSection