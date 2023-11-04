import React from 'react'
import AccountSection from '@/views/AccountSection';
import { useAuthContext } from '@/hooks/useAuthContext';
import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth';

const AdminAccount = () => {

    const { user } = useAuthContext();

    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <AccountSection />
        </main>
    )
}

export default AdminAuth(AdminAccount);