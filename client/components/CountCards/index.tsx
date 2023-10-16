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

const CountCards = () => {
    return (
        <FeatureCardsContainer>
            <CardsWrapper >
                <Card
                    maxWidth="380px"
                    flexDirection="row"
                    color="#000"
                    backgroundColor="#f8f8f8"
                >
                    <RiTeamFill />
                    <Content>
                        <p>Startups Enrolled</p>
                        <h3>10</h3>
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
                        <p>Startups Enrolled</p>
                        <h3>10</h3>
                    </Content>
                </Card>
                <Card
                    maxWidth="380px"
                    flexDirection="row"
                    color="#000"
                    backgroundColor="#f8f8f8"
                >
                    <HiBadgeCheck />
                    <Content>
                        <p>Startups Enrolled</p>
                        <h3>10</h3>
                    </Content>
                </Card>
            </CardsWrapper>
        </FeatureCardsContainer>
    );
}

export default CountCards
