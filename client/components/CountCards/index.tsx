import React from "react";
import {
    FeatureCardsContainer,
    CardsWrapper,
    Card,
    Content,
} from "@/styles/components/CountCards";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import axios from "axios";
import { CountUp } from 'use-count-up'

interface Counts {
    startupCount: string;
    investorCount: string;
}

const CountCards = () => {

    const [count, setCount] = React.useState({} as Counts);

    React.useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auth/startups/count');
                if (response.status === 200) {
                    setCount(response.data);

                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCount();
    }, [setCount]);

    return (
        <FeatureCardsContainer>
            <CardsWrapper >
                <Card
                    maxWidth="380px"
                    flexDirection="row"
                    color="#fff"
                    backgroundColor="#316aff"
                >
                    <RiTeamFill />
                    <Content>
                        <p>Startups Enrolled</p>
                        <h3>
                            {count?.startupCount}
                        </h3>
                    </Content>
                </Card>
                <Card
                    maxWidth="380px"
                    flexDirection="row"
                    color="#fff"
                    backgroundColor="#316aff"
                >
                    <GoGoal />
                    <Content>
                        <p>Investors Community</p>
                        <h3>{count?.investorCount}</h3>
                    </Content>
                </Card>
                <Card
                    maxWidth="380px"
                    flexDirection="row"
                    color="#fff"
                    backgroundColor="#316aff"
                >
                    <HiBadgeCheck />
                    <Content>
                        <p>Network Insights</p>
                        <h3>100</h3>
                    </Content>
                </Card>
            </CardsWrapper>
        </FeatureCardsContainer>
    );
}

export default CountCards
