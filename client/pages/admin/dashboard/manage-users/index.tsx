import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Tabs } from 'antd';
import React, { useEffect } from 'react'
import axios from '@/lib/axios'
import { User } from '@/types/AuthTypes';
import { Heading } from '@/styles/Globalstyles';



const ManageUsers = () => {
    const { user } = useAuthContext();
    const [users, setUsers] = React.useState<User[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get<any>('/admin/all-users')
                if (response.status === 200) {
                    setUsers(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    console.log(users)


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <DashboardContainer>
                <DashboardWrapper>
                    <Heading style={{ textAlign: 'center' }}>Manage Users</Heading>
                    {users.length > 0 ? (
                        <UserCards>
                            {users.map((user) => {
                                return (
                                    <UserCard key={user.id}>
                                        <Pair>
                                            <strong className='title'>ID <b>:</b></strong><span>{user.id}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Name  <b>:</b></strong><span>{user.name}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Email  <b>:</b></strong><span>{user.userEmail}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Role  <b>:</b></strong><span>{user.role}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Is Verified  <b>:</b></strong>{user.isVerified === true ? <span style={{ color: 'green', textDecoration: 'underline' }}>Verified</span> : <span style={{ color: 'red', textDecoration: 'underline' }}>Not Verified</span>}
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Created At <b>:</b></strong>
                                            <span>{new Date(user.createdAt).toLocaleString()}</span>
                                        </Pair>
                                        <Pair style={{ justifyContent: 'center' }}>
                                            <CardButton background='#fd3838'>Delete</CardButton>
                                        </Pair>
                                    </UserCard>
                                );
                            })}
                        </UserCards>
                    ) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
                    }
                </DashboardWrapper>

            </DashboardContainer>
        </main>
    )
}

export default AdminAuth(ManageUsers)