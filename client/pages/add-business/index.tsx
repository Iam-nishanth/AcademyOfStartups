/* eslint-disable react-hooks/exhaustive-deps */
import StartupsLogin from "@/components/StartupsLogin";
import { useAuthContext } from "@/hooks/useAuthContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Footer = dynamic(() => import("@/components/Footer"));
import { FormContainer, ImageContainer, SignupSectionContainer, SignupSectionWrapper } from "@/styles/views/SignupSection";
import Image from "next/image";
import { Heading } from "@/styles/Globalstyles";



const SignupPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { user, business, loading } = useAuthContext()
    const router = useRouter();

    useEffect(() => {
        if (!loading && user && business) {
            router.push({ pathname: '/user/dashboard', query: { from: 'redirect' } })
        }
    }, [loading])



    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
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
            <Footer />
        </main>
    );
}

export default SignupPage
