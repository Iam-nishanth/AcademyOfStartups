import styled from "styled-components";

export const SignupSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SignupSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    width: 100%;
    max-width: 1200px;
    min-height: 80vh;
    
    @media (max-width: 1150px) {
        padding: 10px 20px;
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
    padding: 30px 10px;
    img{
        transform: scale(1.2);
    }
    h2{
        text-transform: uppercase;
    }
    @media (max-width: 700px) {
        align-items: center;
        img{
            transform: unset;
            height: 250px;
        }
    }
`

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    transition: 300ms all ease-in-out; 

`

export const LoginText = styled.p`
    text-align: center;
    font-weight: 600;
    span{
        color: #316aff;
        cursor: pointer;
    }
`

export const BusinessFormContainer = styled.div`
    display: flex;
`