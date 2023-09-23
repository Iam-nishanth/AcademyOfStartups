import styled from "styled-components";

export const PricingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

`
export const PricingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    padding: 30px 0;
    gap: 30px;

    /* @media (min-width: 1600px){
    max-width: 1600px; 
  } */
  @media (max-width: 1300px){
      padding: 30px 50px;
  }
  @media (max-width: 600px){
      padding: 30px 20px;
  }
  
`
export const Cards = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    @media (max-width: 1000px){
      flex-wrap: wrap;
    }
`
export const Headings = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-items : start;
        gap: 20px;
    }
`

export const PricingCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 0 20px 40px;
    width: 100%;
    max-width: 400px;
    min-height: 500px;
    background-color: #f6f9fe;
    gap: 35px;

    h3{
        font-size: 25px;
    }
    h4{
        font-size: 23px;
    }

    h5{
        font-size: 18px;
        color: #316aff;
    }

    @media (max-width: 600px){
        padding: 20px 0 20px 20px;
    }
`
export const Price = styled.div`
    display: flex;
    gap: 15px;
`
export const INR = styled.span`
    font-size: 23px;
`

export const PricingList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    list-style-type: none;

    li{
        display: flex;
        align-items: center;
        gap: 10px;
        svg{
            color: #316aff;
            font-size: 18px;
        }
        p{
            font-size: 16px;
            font-weight: 500;
        }
    }
`






export const PricingButton = styled.button`
    width: 150px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 3px solid #999;
    &:active, &:hover{
        outline: none;
        border-bottom: 3px solid #316aff;
    }
`


export const ChooseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #ebebeb;

`
export const ChooseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    padding: 30px 0;

    gap: 30px;
    @media (min-width: 1600px){
    max-width: 1600px; 
  }

    @media (max-width: 1250px){
        padding: 30px;
    }
    @media (max-width: 1000px){
        flex-direction: column;
        padding: unset;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 600px){
        padding: 50px 20px;
        h3{
            font-size: 17px;
        }
    }
`
export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: 700px;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Tick = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: #fff;

    svg{
        font-size: 20px;
        color: #2b29a4;
    }

    @media (max-width: 600px){
        width: 30px;
        height: 30px;
        svg{
            font-size: 15px;
        }
    }
`
