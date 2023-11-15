/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuthContext } from "@/hooks/useAuthContext";
import Layout from "@/components/Layout/Full";
import StartupsLogin from "@/components/StartupsLogin";
import { Heading } from "@/styles/Globalstyles";
import { FormContainer, ImageContainer, SignupSectionContainer, SignupSectionWrapper } from "@/styles/views/SignupSection";



const SignupPage = () => {
    const { user, business, loading } = useAuthContext()
    const router = useRouter();

    React.useEffect(() => {
        if (!loading && user && business) {
            router.push({ pathname: '/user/dashboard', query: { from: 'redirect' } })
        }
    }, [loading])


    return (
        <Layout>
            <SignupSectionContainer>
                <SignupSectionWrapper>
                    <ImageContainer>
                        <Heading>Please add the details <br /> to complete the <br /> registration process</Heading>
                        <Image src="/images/StartupSvg.svg" alt="signup" width={500} height={500} />
                    </ImageContainer>
                    <FormContainer>
                        <StartupsLogin />
                    </FormContainer>
                </SignupSectionWrapper>
            </SignupSectionContainer>
        </Layout>
    );
}

export default SignupPage
