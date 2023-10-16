import { styled } from "styled-components";

// export const Container = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
// `
export const InvestorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #001336;
    width: 100%;
`
export const InvestorWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 15px 20px;
    flex-direction: column;

    @media (max-width: 600px){
        padding: unset;
    }

    @media (min-width: 1600px){
    max-width: 1600px; 
  }
`
export const HeadingSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    p{
        width: 1100px;
    }


    @media (max-width: 600px){
        img{
        width: 100%;
        object-fit: cover;
        overflow: hidden;
    }
    p{
        width: 100%;
        padding: 10px;
        font-weight: 500;
    }
    }
    
`

export const ContentSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    gap: 20px;
    h2,h4{
        text-align: center;
    }
    @media (min-width: 1600px){
    max-width: 1600px; 
  }
`

export const Buttons = styled.div`
    display: flex;
    gap: 30px;
`