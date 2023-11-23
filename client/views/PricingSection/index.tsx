import React from 'react'
import { Cards, ChooseContainer, ChooseWrapper, Content, Headings, INR, ImageDiv, Item, Items, Price, PricingButton, PricingCard, PricingContainer, PricingList, PricingWrapper, Tick } from '@/styles/views/PricingSection'
import Image from 'next/image'
import { Heading, SubHeading } from '@/styles/Globalstyles'
import { GiCheckMark } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { CommonButton } from '@/components/Common/Button'
import Link from 'next/link'
import { RevealX } from '@/utils/animation/RevealX'
import { RevealY } from '@/utils/animation/RevealY'

const PricingSection = () => {
    return (
        <>
            <ChooseContainer>
                <ChooseWrapper>
                    <ImageDiv>
                        <Image src={'/images/choose-us.webp'} alt='Why-Choose-Us' width={600} height={500} />
                    </ImageDiv>
                    <Content>
                        <RevealX><SubHeading>Why Choose Us</SubHeading></RevealX>
                        <RevealX><Heading>
                            The Best place for the Best people
                        </Heading></RevealX>
                        <RevealX>
                            <Items>
                                <Item><Tick><GiCheckMark /></Tick> <h3>Years of Experience</h3></Item>
                                <Item><Tick><GiCheckMark /></Tick> <h3>Professional Team</h3></Item>
                                <Item><Tick><GiCheckMark /></Tick> <h3>Affordable Price</h3></Item>
                            </Items>
                        </RevealX>

                    </Content>
                </ChooseWrapper>
            </ChooseContainer>
            <PricingContainer>
                <PricingWrapper>
                    <Headings>
                        <div>
                            <SubHeading>Pricing Plans</SubHeading>
                            <Heading>Choose Your Suitable Plan</Heading>
                        </div>
                        <Link href="/contact">
                            <CommonButton name="Get Started" width="150px" height="50px" />
                        </Link>
                    </Headings>
                    <Cards>

                        <PricingCard>
                            <RevealX><h3>Basic Plan</h3></RevealX>
                            <RevealX><Price><INR>₹</INR><h4>10,000</h4> <h5>/Monthly</h5></Price></RevealX>
                            <RevealX>
                                <PricingList>
                                    <li><GiCheckMark /><p>3 Hours Session</p></li>
                                    <li><GiCheckMark /><p>Consultant Support</p></li>
                                    <li><GiCheckMark /><p>Regular Follow-up</p></li>
                                    <li><GiCheckMark /><p>Network Access</p></li>
                                </PricingList>
                            </RevealX>

                            <RevealY>
                                <Link href="/contact">
                                    <PricingButton><span>Get Started</span> <IoIosArrowForward /> </PricingButton>
                                </Link>
                            </RevealY>

                        </PricingCard>
                        <PricingCard>
                            <RevealX><h3>Regular Plan</h3></RevealX>
                            <RevealX><Price><INR>₹</INR><h4>50,000</h4> <h5>/Monthly</h5></Price></RevealX>
                            <RevealX>
                                <PricingList>
                                    <li><GiCheckMark /><p>10 Hour Session</p></li>
                                    <li><GiCheckMark /><p>Team of Consultants</p></li>
                                    <li><GiCheckMark /><p>Trainings</p></li>
                                    <li><GiCheckMark /><p>Network Access</p></li>
                                    <li><GiCheckMark /><p>Sales Growth</p></li>
                                </PricingList>
                            </RevealX>
                            <RevealY>
                                <Link href="/contact">
                                    <PricingButton><span>Get Started</span> <IoIosArrowForward /> </PricingButton>
                                </Link>
                            </RevealY>
                        </PricingCard>
                        <PricingCard>
                            <RevealX><h3>Elite Plan</h3></RevealX>
                            <RevealX><Price><INR>₹</INR><h4>1,00,000</h4> <h5>/Monthly</h5></Price></RevealX>
                            <RevealX>
                                <PricingList>
                                    <li><GiCheckMark /><p>20 Hours Session</p></li>
                                    <li><GiCheckMark /><p>Team Training</p></li>
                                    <li><GiCheckMark /><p>BrainStorming</p></li>
                                    <li><GiCheckMark /><p>Collaborations</p></li>
                                    <li><GiCheckMark /><p>M & A</p></li>
                                    <li><GiCheckMark /><p>Investments</p></li>
                                </PricingList>
                            </RevealX>
                            <RevealY>
                                <Link href="/contact">
                                    <PricingButton><span>Get Started</span> <IoIosArrowForward /> </PricingButton>
                                </Link>
                            </RevealY>

                        </PricingCard>
                    </Cards>
                </PricingWrapper>
            </PricingContainer>
        </>
    )
}

export default PricingSection