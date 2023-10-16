import styled from "styled-components";

export const ServicesSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .ant-tabs-tab-btn{
        font-size: 16px;
        font-weight: 600;
        @media (max-width: 370px){
            font-size: 13px;
        }
    }
`
export const ServicesSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
    text-align: center;


`
export const Cards = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    min-height: 350px;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;


    svg{
        font-size: 45px;
        color: #316aff;
    }
    @media (max-width: 600px){
        min-height: 300px;
    }

`
export const StartupCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    min-height: 300px;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;


    svg{
        font-size: 45px;
        color: #316aff;
    }
    @media (max-width: 600px){
        min-height: 250px;
    }
`

export const CardHeading = styled.h2`
    font-size: 23px;
    font-weight: 600;
    text-align: center;
`
export const CardText = styled.p`
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    color: #999;
    line-height: normal;
`