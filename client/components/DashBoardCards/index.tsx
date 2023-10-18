/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardContent, DashboardCards, IconBackground } from '../../styles/views/DashBoardstyles'
import { FaBuilding, FaCoins, FaGlobe } from 'react-icons/fa6'



const DashBoardCards = () => {

    const CardData = [
        { title: "Company Alliances", count: "20+", classname: 'blue' },
        { title: "Investor Community", count: "20+", classname: 'green' },
        { title: "Networking Insights", count: "200+", classname: 'yellow' },
    ];


    return (
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
    );
}

export default DashBoardCards;