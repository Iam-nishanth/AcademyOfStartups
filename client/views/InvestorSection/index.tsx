import React, { useEffect } from 'react'
import { InvestorContainer, InvestorWrapper, HeadingSection, ContentSection, ContentWrapper, Buttons } from '@/styles/views/InvestorStyles'
import InvestorForm from '@/components/InvestorForm'
import InvestorLogin from '@/components/InvestorLogin'
import { Heading, MainHeading, Paragraph, SmallHeading2, SubHeading } from '@/styles/Globalstyles'
import Image from 'next/image'
import { AnchorButton, CommonButton } from '@/components/Common/Button'
import Link from 'next/link'
import { useAuthContext } from '@/hooks/useAuthContext'


const InvestorSection = () => {

    const { investorData } = useAuthContext();

    return (
        <>
            <InvestorContainer>
                <InvestorWrapper>
                    <HeadingSection>

                        <MainHeading>Partner with us to create a lasting impact on the <br /> <span>Startup Landscape</span></MainHeading>

                        {
                            !investorData ? (
                                <Buttons>
                                    <Link href='#scroll'>
                                        <CommonButton name='Register' width='150px' height='50px' />
                                    </Link>
                                    <Link href='/investors/login'>
                                        <CommonButton name='Login' width='150px' height='50px' />
                                    </Link>
                                </Buttons>
                            )
                                : (
                                    <Link href='/investors/dashboard'>
                                        <CommonButton name='Go to Dashboard' width='350px' height='50px' />
                                    </Link>
                                )
                        }

                        <Paragraph>Join our network of leading entrepreneurs with a proven track record of success. Together, we can invest in the next generation of startups that have the potential to make a real difference in the world. Our extensive network gives you access to the best deals and the most promising entrepreneurs. Partner with us today to create a lasting impact on the startup landscape.</Paragraph>
                        <Image src='/images/Investment.svg' width={550} height={450} alt='Investor' />
                    </HeadingSection>

                </InvestorWrapper>

            </InvestorContainer>


            <ContentSection>
                <ContentWrapper id='scroll'>
                    <Heading>Join our Renowned Investor Network</Heading>
                    <SubHeading>Please fill up this form to join our network</SubHeading>
                    <InvestorForm />
                </ContentWrapper>

            </ContentSection>

        </>
    )
}

export default InvestorSection