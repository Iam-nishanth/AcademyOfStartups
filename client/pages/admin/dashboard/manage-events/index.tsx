import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import React from 'react'

const ManageEvents = () => {
    const { user } = useAuthContext();


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;

    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
        </main>
    )
}

export default AdminAuth(ManageEvents)