import styled from 'styled-components';

export const AccountSectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .ant-tabs-tab-btn{
        font-size: 16px;
        font-weight: 600;
    }
`
export const AccountSectionWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 20px 15px;
    flex-direction: column;

    @media (min-width: 1600px){
    max-width: 1600px; 
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 30px 50px;

  button{
    align-self: flex-end;
    margin-top: 10px 0;
  }

  @media (max-width: 600px){
    padding: 20px;
  }
`

export const PairHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  strong{
    font-size: 17px;
    font-weight: 800;
    width: 300px;
  }
  form{
    padding-left: 60px;
  }

  @media (max-width: 940px){
    form{
      padding-left: 0;
    }
  }
  @media (max-width: 600px){
    flex-direction: column;
    align-items: start;
    gap: 5px;
    
  }
`


export const ValueHolder = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 20px;
  p{
    font-size: 17px;
    font-weight: 500;
  }
`