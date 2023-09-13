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

        const { user, loading } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            }
        }, [user, loading, router.isReady, router]);

        if (loading || !user) {
            return null;
        }

        return <WrappedComponent {...(props as P)} />;

    }

    return AuthHOC;

}

export default withAuth;
