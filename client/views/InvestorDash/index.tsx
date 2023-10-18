import React from 'react'
import { ContentDiv, ImgDiv, Key, StartupCard, Startups, StartupsCards, Value } from '@/styles/views/InvestorDash'
import { DashboardContainer, DashboardWrapper } from '@/styles/views/DashBoardstyles'
import { useAuthContext } from '@/hooks/useAuthContext'
import { message } from 'antd'
import { Heading } from '@/styles/Globalstyles'
import axios from 'axios'
import { Business } from '@/types/AuthTypes'
import Image from 'next/image'
import { BiLinkAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'
import DashBoardCards from '@/components/DashBoardCards'

const InvestorDash = () => {

    const { investorData, dispatch } = useAuthContext();
    const [businesses, setBusinesses] = React.useState<Business[]>([])

    const router = useRouter();

    React.useEffect(() => {
        if (!investorData) {
            router.push('/investors')
        }
        const fetchData = async () => {
            try {
                const response = await axios.get<any>(`https://pglgl7pl-8080.inc1.devtunnels.ms/auth/investors/get/startups/${investorData?.investor.id}`)

                if (response.status == 200) {
                    setBusinesses(response.data.startups)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    console.log(businesses)


    const Greet = () => {
        if (investorData) {
            let name = investorData?.investor.name;
            let Gender = investorData?.investor.gender === 'Male' ? 'Mr.' : 'Ms.';
            return <Heading>Welcome back, {Gender} {name}</Heading>
        }
    }

    const externaImageLoader = ({ src }: { src: string }) => `https://static2.taglivros.com/${src}`;


    const handleLogout = () => {
        localStorage.removeItem('investor')
        dispatch({ type: 'INVESTOR_LOGOUT' });
        message.success('Logged out');
    }

    return (
        <DashboardContainer>
            <DashboardWrapper>
                <div>
                    {Greet()}
                </div>
                <Startups>
                    <DashBoardCards />
                    <br />
                    <Heading style={{ textDecoration: 'underline' }}>Startups Enrolled with us</Heading>
                    <StartupsCards>
                        {businesses && businesses.map(({ Logo, businessName, ownerName, registrationType, productOrService, address, companyWebsite }) => {
                            return <StartupCard>
                                <ImgDiv>
                                    <Image src={Logo ? Logo : '/images/business-placehold.jpeg'} alt='Startup/Business' width='120' height='60' />
                                    <div>
                                        <h3>{businessName}</h3>
                                        <a className='website' href={companyWebsite}><BiLinkAlt /> Website</a>
                                    </div>
                                </ImgDiv>
                                <ContentDiv>
                                    <div className='items'><Key>Owner : </Key><Value>{ownerName}</Value></div>
                                    <div className='items'><Key>Business Registration : </Key><Value>{registrationType}</Value></div>
                                    <div className='items'><Key>Business Type : </Key><Value>{productOrService}</Value></div>
                                    <div className="address"><Key>Address :</Key><Value>{address}</Value></div>
                                </ContentDiv>
                            </StartupCard>
                        })}
                        {businesses && businesses.map(({ Logo, businessName, ownerName, registrationType, productOrService, address, companyWebsite }) => {
                            return <StartupCard>
                                <ImgDiv>
                                    <Image src={!Logo ? '/images/business-placehold.jpeg' : Logo} alt='Startup/Business' width='120' height='60' />
                                    <div>
                                        <h3>{businessName}</h3>
                                        <a className='website' href={companyWebsite}><BiLinkAlt /> Website</a>
                                    </div>
                                </ImgDiv>
                                <ContentDiv>
                                    <div className='items'><Key>Owner : </Key><Value>{ownerName}</Value></div>
                                    <div className='items'><Key>Business Registration : </Key><Value>{registrationType}</Value></div>
                                    <div className='items'><Key>Business Type : </Key><Value>{productOrService}</Value></div>
                                    <div className="address"><Key>Address :</Key><Value>{address}</Value></div>
                                </ContentDiv>
                            </StartupCard>
                        })}
                        {businesses && businesses.map(({ Logo, businessName, ownerName, registrationType, productOrService, address, companyWebsite }) => {
                            return <StartupCard>
                                <ImgDiv>
                                    <Image src={!Logo ? '/images/business-placehold.jpeg' : Logo} alt='Startup/Business' width='120' height='60' />
                                    <div>
                                        <h3>{businessName}</h3>
                                        <a className='website' href={companyWebsite}><BiLinkAlt /> Website</a>
                                    </div>
                                </ImgDiv>
                                <ContentDiv>
                                    <div className='items'><Key>Owner : </Key><Value>{ownerName}</Value></div>
                                    <div className='items'><Key>Business Registration : </Key><Value>{registrationType}</Value></div>
                                    <div className='items'><Key>Business Type : </Key><Value>{productOrService}</Value></div>
                                    <div className="address"><Key>Address :</Key><Value>{address}</Value></div>
                                </ContentDiv>
                            </StartupCard>
                        })}
                    </StartupsCards>
                </Startups>
            </DashboardWrapper>
        </DashboardContainer>
    )
}

export default InvestorDash