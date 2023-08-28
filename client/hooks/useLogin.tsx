import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

interface LoginCredentials {
    email: string;
    password: string;
}

interface LoginResponse {
    user: {
        id: string;
        email: string;
        password: string;
        isVerified: boolean;
        createdAt: string;
        updatedAt: string;
    };
    token: string;
}

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { dispatch } = useAuthContext();

    const login = async ({ email, password }: LoginCredentials) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const json = await response.json();
                throw new Error(json.error);
            }

            const { user, token }: LoginResponse = await response.json();

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            dispatch({ type: 'LOGIN', payload: user });

            setIsLoading(false);
        } catch (err: any) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};