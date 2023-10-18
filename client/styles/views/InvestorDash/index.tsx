import styled from 'styled-components';


export const DashboardContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    height: 100vh;

    @media (min-width: 1600px) {
        max-width: 1400px;
    }
    @media (min-width: 1800px) {
        max-width: 1600px;
    }
`

export const Startups = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;    
`
export const StartupsCards = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`;
export const StartupCard = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    width: 100%;
    min-height: 300px;
    border-radius: 10px;
    background: white;
    padding: 20px 10px;
    box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);

`
export const ImgDiv = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    align-self: flex-start;
    align-items: center;
    padding: 10px 0 0 10px;

    img{
        border-radius: 10px;
        object-fit: contain;
        border: 0.5px solid #E5E5E5;
    }

    .website{
        color: #316AFF;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 600;
        gap: 5px;
        svg{
            font-size: 18px;
        }
    }

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: start;
    }
    @media (max-width: 600px){
        /* flex-direction: row; */
        /* align-items: center; */
    }
`
export const Key = styled.span`
    width: 100%;
    max-width: 200px;
    font-weight: bold;
`
export const Value = styled.span`
    font-weight: 500;

`
export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 30px;
    gap: 5px;

    .items{
        display: flex;
        width: 100%;
        gap: 10px;
    }
    .address{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }

    @media (max-width: 1000px){
        padding-left: 10px;
        .items, .address{
            flex-direction: column;
            gap: 5px;
        }
        ${Value}{
            padding-left: 20px;
        }
    }
`
