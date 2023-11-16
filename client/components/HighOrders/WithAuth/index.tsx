/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthContext } from '@/hooks/useAuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthProps {
    children: React.ReactNode;
}

const withAuth = <P extends AuthProps>(
    WrappedComponent: React.ComponentType<P>
) => {

    const AuthHOC = (props: Omit<P, keyof AuthProps>) => {

        const { user, loading, business } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            }
            else if (!loading && user?.role === "ADMIN") router.push({ pathname: '/admin/dashboard', query: { from: 'redirect' } })
            else if (!loading && user && !business) {
                router.push({ pathname: '/add-business', query: { email: user.userEmail } });
            }
        }, [user, loading]);

        if (loading || !user) {
            return null;
        }

        return <WrappedComponent {...(props as P)} />;

    }

    return AuthHOC;

}

export default withAuth;
