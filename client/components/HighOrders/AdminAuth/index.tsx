/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useRouter } from 'next/router';
import React from 'react';
import { message } from 'antd';

interface AuthProps {
    children: React.ReactNode;
}

const AdminAuth = <P extends AuthProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    const AuthHOC = (props: Omit<P, keyof AuthProps>) => {
        const { user, loading, business } = useAuthContext();
        const router = useRouter();

        React.useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            } else if (!loading && user?.role !== "ADMIN") {
                router.push("/");
                message.error("You're not allowed to access this page");
            }
        }, [user, loading]);

        if (loading || !user || user.role !== "ADMIN") {
            return null;
        }

        return <WrappedComponent {...(props as P)} />;
    };

    return AuthHOC;
};

export default AdminAuth;
