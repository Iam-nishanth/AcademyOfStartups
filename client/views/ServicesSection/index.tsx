/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Tabs } from 'antd'
import { Card, CardHeading, CardText, Cards, ServicesSectionContainer, ServicesSectionWrapper, StartupCard } from '@/styles/views/ServicesSection'
import { Heading, SubHeading } from '@/styles/Globalstyles'
import { TbTargetArrow } from 'react-icons/tb'
import { BsFillBarChartLineFill, BsFillMegaphoneFill, BsGlobe2 } from 'react-icons/bs'
import { FaBookOpen, FaFolderOpen, FaHandshake, FaPeopleGroup, FaWallet } from 'react-icons/fa6'
import { FaUsersCog } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { HiLightBulb } from 'react-icons/hi2'


const ServicesSection = () => {

    const BusinessData = [
        {
            icon: <TbTargetArrow />,
            heading: "Strategic Planning & Leadership",
            text: "We specialize in offering strategic planning and leadership solutions that pave the path to success. With a deep understanding of business dynamics and a forward-thinking approach."
        },
        {
            icon: <BsFillBarChartLineFill />,
            heading: "Revenue & EBIDTA Growth",
            text: "Our goal is to enhance financial performance by unlocking revenue opportunities and improving EBIDTA (Earnings Before Interest, Taxes, Depreciation, and Amortization) through targeted strategies."
        },
        {
            icon: <FaPeopleGroup />,
            heading: "Start-up & Turnaround Management",
            text: "We specialize in offering comprehensive startup and turnaround management solutions. Whether you're launching a new venture or facing challenging times, we have the expertise and experience to guide you towards success."
        },
        {
            icon: <BsFillMegaphoneFill />,
            heading: "Best Markenting Strategies",
            text: "We offer the best marketing strategies that drive tangible results and accelerate your business growth. We understand that effective marketing is crucial for capturing your target audience's attention, increasing brand visibility, and ultimately generating leads and conversions."
        },
        {
            icon: <FaWallet />,
            heading: "Budget & Policy Development",
            text: "We ensure financial stability and maximize resources with our budget and policy development expertise. We help you create robust budgets and implement effective policies that align with your organizational goals."
        },
        {
            icon: <FaHandshake />,
            heading: "Strategic Alliances & Partnerships",
            text: "We believe in the power of strategic alliances and partnerships to drive mutual growth and success. By collaborating with and like-minded organizations, we can unlock new opportunities and create synergies that benefit all involved."
        },
        {
            icon: <FaUsersCog />,
            heading: "Operational Excellence",
            text: "We are dedicated to offering operational excellence that elevate the performance and efficiency of your business. We understand that operational excellence is the key to achieving sustainable growth, reducing costs, and delivering exceptional customer experiences."
        },
        {
            icon: <GiReceiveMoney />,
            heading: "P & L Management",
            text: "We specialize in offering comprehensive P&L (Profit and Loss) management solutions to help businesses achieve financial success. We understand that effective P&L management is crucial for driving profitability, maximizing revenue, and optimizing costs."
        },
        {
            icon: <FaBookOpen />,
            heading: "Corporate Trainings",
            text: "Every person in every role needs training on frequent intervals now a days to keep everyone in result oriented frequency. We are specialized in such corporate trainings like leadership, communication skills, project management, customer service excellence, sales and marketing strategies, and more."
        },
    ];

    const StartupData = [
        {
            icon: <HiLightBulb />,
            heading: "IDEAS",
            text: "Generating, deriving and planning business ideas according to skills, problems and gaps in the world, as per customer budget and potentiality."
        },
        {
            icon: <FaHandshake />,
            heading: "MENTORING",
            text: "Suggesting suitable solutions and methods to improve sales and reducing mistakes in your startup industry."
        },
        {
            icon: <FaBookOpen />,
            heading: "TRAINING",
            text: "Teaching is lecturing, training is transforming. We transform anybody to entrepreneurs through our most interactive and world class training techniques with detailed content."
        },
        {
            icon: <BsGlobe2 />,
            heading: "NETWORK",
            text: "Connecting you with the right people who can help you grow your business."
        },
        {
            icon: <FaFolderOpen />,
            heading: "CONTENT",
            text: "Delivering your business to customer and designing that deliverables in a proper method needs content specialization. Academy of Startup has content reach for 100M+ in all social media platforms."
        },
        {
            icon: <BsFillBarChartLineFill />,
            heading: "GROWTH",
            text: "Nobody hesitates to take new business even though tummy is full. Growth is the parameter of your business success. We simply work on 5X - 10X growth strategy for any business."
        }
    ]

    const SeviceTabs = [
        {
            label: 'Business Development',
            key: '1',
            children: (
                <Cards>
                    {BusinessData.map((card, index) => (
                        <Card key={index}>
                            {card.icon}
                            <CardHeading>{card.heading}</CardHeading>
                            <CardText>{card.text}</CardText>
                        </Card>
                    ))}
                </Cards>
            ),
        },
        {
            label: 'Startup Services',
            key: '2',
            children: (
                <Cards>
                    {StartupData.map((card, index) => (
                        <StartupCard key={index}>
                            {card.icon}
                            <CardHeading>{card.heading}</CardHeading>
                            <CardText>{card.text}</CardText>
                        </StartupCard>
                    ))}
                </Cards>
            ),
        }

    ]


    return (
        <ServicesSectionContainer>
            <ServicesSectionWrapper>
                <SubHeading>Our Services</SubHeading>
                <Heading>
                    Give Smartness to your Business
                    with our Services
                </Heading>

                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={SeviceTabs}
                />

                {/* <Cards>
                    {StartupData.map((card, index) => (
                        <Card key={index}>
                            {card.icon}
                            <CardHeading>{card.heading}</CardHeading>
                            <CardText>{card.text}</CardText>
                        </Card>
                    ))}
                </Cards> */}



            </ServicesSectionWrapper>

        </ServicesSectionContainer>
    )
}

export default ServicesSection