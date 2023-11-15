import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/NavOnly'
import InvestorLogin from '@/components/InvestorLogin'
import InvestorForm from '@/components/InvestorForm'

const InvestorsLogin = () => {
    const [isLogin, setIsLogin] = React.useState<boolean>(true);
    const router = useRouter();

    React.useEffect(() => {
        router.query.redirect == 'Register' ? setIsLogin(false) : setIsLogin(true);
    })


    return (
        <Layout>
            {isLogin ? <InvestorLogin /> : <InvestorForm />}
        </Layout>
    )
}

export default InvestorsLogin