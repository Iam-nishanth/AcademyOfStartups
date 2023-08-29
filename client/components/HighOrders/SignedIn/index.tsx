// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';
// import { useAuthContext } from '../../../hooks/useAuthContext';

// const SignedIn = <P extends object>(
//     WrappedComponent: React.ComponentType<P>
// ) => {
//     const ComponentWithSignedIn: React.FC<P> = (props) => {
//         const { user, loading } = useAuthContext();
//         const router = useRouter();

//         useEffect(() => {
//             if (!loading && user) {
//                 router.replace('/users');
//             }
//         }, [user, loading, router.isReady, router]);

//         return <WrappedComponent {...props} />;
//     };

//     // Display name for easier debugging
//     ComponentWithSignedIn.displayName = `withSignedIn(${WrappedComponent.displayName || WrappedComponent.name})`;

//     return ComponentWithSignedIn;
// };

// export default SignedIn;

