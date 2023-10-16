import styled from 'styled-components';


export const DashboardContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const DashboardWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    height: 100vh;

    @media (min-width: 1600px) {
        max-width: 1400px;
    }
    @media (min-width: 1800px) {
        max-width: 1600px;
    }
`