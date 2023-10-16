import { styled } from "styled-components";

export const DashboardContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const DashboardWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    padding: 20px 0;
    gap: 20px;


    @media (min-width: 1600px) {
    max-width: 1400px;
  }
  @media (max-width: 1230px){
    padding: 20px;
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
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 100%;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
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