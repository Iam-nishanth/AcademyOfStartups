import React from 'react'
import { Card, CardContent, DashboardCards, DashboardContainer, DashboardWrapper, IconBackground, InvestorCard, InvestorCards, Investors } from '@/styles/views/DashBoardstyles'
import { useAuthContext } from '@/hooks/useAuthContext'
import { FaBuilding, FaCoins, FaGlobe } from 'react-icons/fa6'
import Image from 'next/image'
import { Heading, SubHeading } from '@/styles/Globalstyles'
import { CommonButton } from '@/components/Common/Button'

const DashBoardsection = () => {
    const { user, startup, loading } = useAuthContext()

    return (
        <DashboardContainer>
            <DashboardWrapper>
                {/* <h1>Welcome back '{startup && startup.name}'</h1> */}

                <DashboardCards>
                    <Card>
                        <IconBackground>
                            <FaBuilding />
                        </IconBackground>
                        <CardContent>
                            <h2>Company Alliances</h2>
                            <h3>20+</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconBackground>
                            <FaCoins />
                        </IconBackground>
                        <CardContent>
                            <h2>Investor Community</h2>
                            <h3>20+</h3>
                        </CardContent>
                    </Card>
                    <Card>
                        <IconBackground>
                            <FaGlobe />
                        </IconBackground>
                        <CardContent>
                            <h2>Networking Insights</h2>
                            <h3>200+</h3>
                        </CardContent>
                    </Card>
                </DashboardCards>

                <Investors>
                    <Heading>Investor Opportunity Hub</Heading>
                    <SubHeading>Discover Investors Aligned with Your Startup's Vision and Ambitions</SubHeading>
                    <InvestorCards>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                        <InvestorCard>
                            <Image src="/images/placeholder.jpg" width={80} height={80} alt="Investor" />
                            <div>
                                <h3>Name of Investor</h3>
                                <h4>------Comapny----</h4>
                                <br />
                                <h4>Intrested Fields :</h4>
                                <p>Manufacturing, etc..</p>
                                <br />
                                <CommonButton name="connect" width="100px" height="40px" />
                            </div>
                        </InvestorCard>
                    </InvestorCards>
                </Investors>
            </DashboardWrapper>
        </DashboardContainer>
    )
}

export default DashBoardsection