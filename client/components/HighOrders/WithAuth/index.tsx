import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuthContext';

// Define a type for the WrappedComponent
type ComponentType<T> = React.FC<T>;

const PlaceholderComponent: React.FC = () => null; // Placeholder component that doesn't affect hydration

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const ComponentWithAuth: ComponentType<P> = (props: P) => {
        const { user, loading } = useAuthContext();
        const router = useRouter();

        useEffect(() => {
            // If user is not authenticated and router is ready, redirect to login page
            if (!user && router.isReady) {
                router.replace('/login'); // Replace with your login route
            }
        }, [user, router.isReady, loading, router]); // Include user and router.isReady in the dependency array

        // Render the wrapped component when user is authenticated and router is ready,
        // or render the placeholder component for other cases
        const ContentComponent = user && router.isReady ? WrappedComponent : PlaceholderComponent;

        return <ContentComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default withAuth;
