import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuthContext';

const parseJwt = (token: string) => {
    try {
        if (!token) return null;
        const exp = JSON.parse(atob(token.split('.')[1]))
        return exp;
    } catch (e) {
        return null;
    }
};

const AuthVerify = () => {
    const router = useRouter();
    const { dispatch } = useAuthContext();

    useEffect(() => {
        const tokenString = localStorage.getItem('token');
        const token = tokenString ? JSON.parse(tokenString) : null;

        if (token) {
            const decodedJwt = parseJwt(token);

            if (decodedJwt.exp * 1000 < Date.now()) {
                console.log("Token Expired")
                localStorage.removeItem('user');
                localStorage.removeItem('business');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' });
            }
        }
    }, []);

    return null; // You can return null as this component doesn't render anything
};

export default AuthVerify;
