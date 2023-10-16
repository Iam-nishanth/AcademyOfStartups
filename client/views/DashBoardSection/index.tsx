/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { Card, CardContent, DashboardCards, DashboardContainer, DashboardWrapper, IconBackground, InvestorCard, InvestorCards, Investors } from '@/styles/views/DashBoardstyles'
import { useAuthContext } from '@/hooks/useAuthContext'
import { FaBuilding, FaCoins, FaGlobe } from 'react-icons/fa6'
import Image from 'next/image'
import { Heading, SubHeading } from '@/styles/Globalstyles'
import { CommonButton } from '@/components/Common/Button'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Select, message } from 'antd'
import { domainOptions } from '@/components/InvestorForm/Data'
import InvestorsComponent from '@/components/Investors'
import { GetInvestors, Investor } from '@/types/Investors'



const DashBoardsection = () => {
    const { user, business, loading, token, dispatch } = useAuthContext();
    const router = useRouter();
    const [investorData, setInvestorData] = useState<Investor[]>([]);

    useEffect(() => {
        if (!loading && !user && !business) {
            router.push('/add-business');
        }

        const fetchData = async () => {
            try {
                const response = await axios.get<GetInvestors>('http://localhost:8080/auth/investors', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    setInvestorData(response.data.investors);
                }
            } catch (error: any) {
                console.log(error);

                if (error.response && error.response.status === 401) {
                    message.error('Token Expired, Please Login Again');
                    router.push('/login');

                    localStorage.removeItem('user');
                    localStorage.removeItem('business');
                    localStorage.removeItem('token');
                    dispatch({ type: 'LOGOUT' });
                }
            }
        };

        fetchData();
    }, [loading, user]);

    const CardData = [
        { title: "Company Alliances", count: "20+", classname: 'blue' },
        { title: "Investor Community", count: "20+", classname: 'green' },
        { title: "Networking Insights", count: "200+", classname: 'yellow' },
    ];

    console.log(investorData);

    return (
        <DashboardContainer>
            <DashboardWrapper>
                <DashboardCards>
                    {CardData.map((data) => (
                        <Card key={data.title} className={data.classname}>
                            <IconBackground>
                                {data.title === "Company Alliances" && <FaBuilding />}
                                {data.title === "Investor Community" && <FaCoins />}
                                {data.title === "Networking Insights" && <FaGlobe />}
                            </IconBackground>
                            <CardContent>
                                <h2>{data.title}</h2>
                                <h3>{data.count}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </DashboardCards>

                <InvestorsComponent investorData={investorData} domainOptions={domainOptions} />

                {/* <Investors>
                    <Heading>Investor Opportunity Hub</Heading>
                    <SubHeading>Discover Investors Aligned with Your Startup's Vision and Ambitions</SubHeading>
                    <Select options={domainOptions} style={{ width: "150px", color: "black" }} placeholder='Filter' />
                    <InvestorCards>

                        {
                            investorData.map((investor) => (
                                <InvestorCard key={investor.id}>
                                    <Image src={investor.gender === "Male" ? "/images/Male.jpg" : "/images/Female.webp"} width={80} height={80} alt="Investor" />
                                    {
                                        investor.InvestorInfo.map((info) => (
                                            <div>
                                                <h3>{investor.name}</h3>
                                                <h4>{info.InvestorType}</h4>
                                                <br />
                                                <h4 style={{ color: 'red' }}>Intrested Fields : </h4>
                                                <strong>{info.DomainsOfInterest.join(", ")}</strong>
                                                <br /><br />
                                                <CommonButton name="connect" width="100px" height='40px' />
                                            </div>
                                        ))
                                    }
                                </InvestorCard>
                            ))
                        }
                    </InvestorCards>
                </Investors> */}
            </DashboardWrapper>
        </DashboardContainer>
    );
}

export default DashBoardsection