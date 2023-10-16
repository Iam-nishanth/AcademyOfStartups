/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthContext } from '@/hooks/useAuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthProps {
    children: React.ReactNode;
}

const InvestorAuth = <P extends AuthProps>(
    WrappedComponent: React.ComponentType<P>
) => {

    const AuthHOC = (props: Omit<P, keyof AuthProps>) => {

        const { investorData, loading } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !investorData) {
                router.push('/investors');
            }
        }, [investorData, loading]);

        if (loading || !investorData) {
            return null;
        }

        return <WrappedComponent {...(props as P)} />;

    }

    return AuthHOC;

}

export default InvestorAuth;
