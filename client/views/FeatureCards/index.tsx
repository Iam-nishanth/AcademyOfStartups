import React from "react";
import {
  FeatureCardsContainer,
  CardsWrapper,
  Card,
  Content,
} from "@/styles/views/FetaureCardStyles";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import { RevealY } from "@/utils/animation/RevealY";

const FeatureCards = () => {
  return (
    <FeatureCardsContainer>
      <RevealY>
        <CardsWrapper>
          <Card
            maxWidth="380px"
            flexDirection="row"
            color="#000"
            backgroundColor="#f8f8f8"
          >
            <RiTeamFill />
            <Content>
              <h3>Learn from Experts</h3>
              <p>Take the guidance of experts in the business industry</p>
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
              <h3>Achieve Your Goals</h3>
              <p>Achieve your business goals by following the best guidelines</p>
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
              <h3>Faster Results</h3>
              <p>Achieve your business goals by following the best guidelines</p>
            </Content>
          </Card>
        </CardsWrapper>
      </RevealY>
    </FeatureCardsContainer>

  );
}

export default FeatureCards