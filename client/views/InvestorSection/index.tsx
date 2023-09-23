import React, { useEffect } from 'react'
import { InvestorContainer, InvestorWrapper } from '@/styles/views/InvestorStyles'
import InvestorForm from '@/components/InvestorForm'
import InvestorLogin from '@/components/InvestorLogin'


const InvestorSection = () => {

    return (
        <InvestorContainer>
            <InvestorWrapper>
                <InvestorForm />
                <InvestorLogin />
            </InvestorWrapper>
        </InvestorContainer>
    )
}

export default InvestorSection