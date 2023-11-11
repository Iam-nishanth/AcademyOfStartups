import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Header/Navbar'
import Sidebar from '@/components/Header/Sidebar'
import InvestorLogin from '@/components/InvestorLogin'
import { useRouter } from 'next/router'
import InvestorForm from '@/components/InvestorForm'

const InvestorsLogin = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isLogin, setIsLogin] = React.useState<boolean>(true);
    const router = useRouter();

    React.useEffect(() => {
        router.query.redirect == 'Register' ? setIsLogin(false) : setIsLogin(true);
    })

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            {isLogin ? <InvestorLogin /> : <InvestorForm />}
        </main>
    )
}

export default InvestorsLogin