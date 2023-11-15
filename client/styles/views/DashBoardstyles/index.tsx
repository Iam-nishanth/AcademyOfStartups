import { styled } from "styled-components";

interface buttonProps {
    background?: string
}

export const DashboardContainer = styled.section`
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
export const DashboardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    flex-direction: column;
    gap: 20px;


    @media (min-width: 1600px) {
        max-width: 1400px;
    }
    @media (min-width: 1800px) {
        max-width: 1600px;
    }
    @media (max-width: 1230px){
    padding: 20px;
    }
    @media (max-width: 600px){
        padding: 10px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 30%;
    min-height: 200px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
    gap: 10px;
    color: #fff;
    h2{
        font-size: 25px;
    }
    h3{
        font-size: 20px;
    }

    @media (max-width: 1050px){
        h2{
            font-size: 18px;
        }h3{
            font-size: 22px;
        }
    }
    @media (max-width: 700px){
        flex: unset;
        flex-direction: row;
        min-height: 130px;
    }
    @media (max-width: 500px){
        h3{
            font-size: 20px;
        }h2{
            font-size: 18px;
        }
    }
`
export const DashboardCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .blue{
        background: linear-gradient(45deg,#4099ff,#73b4ff);
    }
    .green{
        background: linear-gradient(45deg,#2ed8b6,#59e0c5);
    }
    .yellow{
        background: linear-gradient(45deg,#FFB64D,#ffcb80);
    }

    @media (max-width: 700px){
        flex-direction: column;
        gap: 10px;
    }
`
export const DashboardHeadings = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const IconBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60px;
    max-width: 60px;
    border-radius: 10px;
    background-color: #ddd;
    svg{
        font-size: 28px;
        color: #232529;
    }

    @media (max-width: 700px){
        height: 30%;
        max-width: 15%;
    }
    @media (max-width: 500px){
        height: 50px;
        max-width: 50px;
    }
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Investors = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0; 
    width: 100%;
`
export const InvestorCards = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 100%;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;
export const InvestorCard = styled.div`
    display: flex;
    gap: 20px;

    width: 100%;
    min-height: 230px;
    border-radius: 10px;
    background: white;
    padding: 20px 10px;
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);

    img{
        border-radius: 50%;
    }
`

export const AdminCards = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 100px;

    a{
        text-decoration: none;
        color: #000;
        width: 100%;
        max-width: 230px;
        height: 230px;
    }

    @media (max-width: 1000px){
        display: grid;
        grid-template-columns: repeat(2, 230px);
        grid-template-rows: 200px 200px;
        padding-top: 30px;

        a{
            height: 200px;
        }
    }

    @media (max-width: 500px){
        display: grid;
        grid-template-columns: 1fr;
        padding-top: unset;
        /* grid-template-rows: 200px 200px 200px 200px; */
        grid-template-rows: unset;
        height: auto;
        a{
            margin: 0 auto ;
            height: 150px;
            max-width: unset;
            width: 80%;
        }
    }
`

export const AdminCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    padding: 20px 10px;
    box-shadow: 0px 0px 12px 0px rgba(155,155,155,0.5),0px 7px 9px -3px rgba(155,155,155,0.5);
    text-align: center;
    gap: 10px;
    transition: 200ms all ease-in-out;

    svg{
        font-size: 35px;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        svg{
            color: #316aff;
        }
    }

    @media (max-width: 600px){
        padding: unset;
    }
`

export const UserCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 10px;

    @media (max-width: 740px){
        grid-template-columns: 1fr
    }
    img{
        object-fit: contain;
    }
`

export const Pair = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    a{
        text-decoration: none;
    }
`

export const CardButton = styled.button<buttonProps>`
        margin-top: 10px;
        font-size: 14px;
        color: #fff;
        font-family: inherit;
        font-weight: 600;
        cursor: pointer;
        padding: 10px 20px;
        border: none;
        outline: none;
        background-color: ${({ background }) => background || "#316aff"};
        width: 80px;
        height: 35px;
        border-radius: 5px;
        transition: all 0.3s ease;
        @media (max-width: 800px) {
            width: 80px;
            height: 35px;
            font-size: 14px;
            font-weight: 600;
        }

        &:hover{
            background-color: #001439;
            transform: translateY(-3px);
        }
`

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 12px 0px rgba(155,155,155,0.5),0px 7px 9px -3px rgba(155,155,155,0.5);
    position: relative;
    overflow: hidden;
    transition: 300ms all ease;

    .title{
        font-size: 16px;
        min-width: 120px;
        display: flex;
        justify-content: space-between;
    }
    span{
        font-size: 16px;
        font-weight: 500;
    }

    @media (max-width: 600px){
        padding: 10px;
        border-radius: 10px;
        .title{
            font-size: 14px;
        }
        span{
            font-size: 14px;
        }
    }

    @media (max-width: 400px){
        .title{
            min-width: 100px;
        }
    }
`
