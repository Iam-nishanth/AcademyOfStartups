import BackButton from '@/components/BackButton';
import { CommonButton } from '@/components/Common/Button';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { Heading } from '@/styles/Globalstyles';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Modal, Skeleton, message } from 'antd';
import React, { useEffect } from 'react'
import axios from '@/lib/axios';
import AddEvent from '@/components/AdminComponents/AddEvent';
import { decryptResponse } from '@/lib/encryption';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface EventType {
    id: string
    name: string
    date: string
    time: string
    location: string
    createdAt: string
}



const ManageEvents = () => {
    const { user, token, dispatch } = useAuthContext();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [events, setEvents] = React.useState<EventType[]>([]);
    const router = useRouter();

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.get<any>('/admin/all-events', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    const decryptedEvents = decryptResponse(response.data.events, process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string)
                    setEvents(decryptedEvents)
                }
            } catch (error: any) {
                console.log(error);
                if (error.response.status === 401) {
                    message.error('Token Expired, Please Login Again');
                    localStorage.removeItem('user');
                    localStorage.removeItem('business');
                    localStorage.removeItem('token');
                    dispatch({ type: 'LOGOUT' });

                    router.replace('/login');
                }
                else if (error.response.status === 500) {
                    message.error('Some error occurred, please try again later');
                }
            }
        }
        getEvents()
    }, [])





    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        window.location.reload();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    const deleteEvent = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: 'Are you sure you want to delete this Event?',
            onOk: async () => {
                try {
                    const response = await axios.delete<any>(`/admin/delete-event/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.status === 200) {
                        setEvents(events.filter((event) => event.id !== id));
                        message.success('User deleted successfully');
                    }
                } catch (error) {
                    console.log(error);
                    message.error('Some error Occured')
                }
            },
            onCancel: () => { },
        });
    }

    return (
        <>
            <Head>
                <title>Manage-Events | Admin</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <BackButton dropdown={true} user={DisplayName} />
                <DashboardContainer>
                    <DashboardWrapper>
                        <Modal title="Add Event" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Done' >
                            <AddEvent />
                        </Modal>
                        <Pair style={{ justifyContent: 'space-between', padding: '0 10px' }}>
                            <Heading>Manage Events</Heading>
                            <CommonButton name='Add Event' width='150px' height='40px' onClick={showModal} />
                        </Pair>
                        {
                            events.length > 0 ? (
                                <UserCards>
                                    {
                                        events.map((event) => (
                                            <UserCard key={event.id}>
                                                <Pair>
                                                    <strong className='title'>ID <b>:</b></strong><span>{event.id}</span>
                                                </Pair>
                                                <Pair>
                                                    <strong className='title'>Name  <b>:</b></strong><span>{event.name}</span>
                                                </Pair>
                                                <Pair>
                                                    <strong className='title'>Date  <b>:</b></strong><span>{event.date}</span>
                                                </Pair>
                                                <Pair>
                                                    <strong className='title'>Time  <b>:</b></strong><span>{event.time}</span>
                                                </Pair>
                                                <Pair>
                                                    <strong className='title'>Location  <b>:</b></strong><span>{event.location}</span>
                                                </Pair>
                                                <Pair>
                                                    <strong className='title'>Created At <b>:</b></strong>
                                                    <span>{new Date(event.createdAt).toLocaleString()}</span>
                                                </Pair>
                                                <Pair style={{ justifyContent: 'center' }}>
                                                    <CardButton onClick={() => deleteEvent(event.id)} background='#fd3838'>Delete</CardButton>
                                                </Pair>
                                            </UserCard>
                                        ))
                                    }
                                </UserCards>
                            ) : <Skeleton active paragraph={{ rows: 15, width: '100%' }} />
                        }
                    </DashboardWrapper>
                </DashboardContainer>
            </main>
        </>

    )
}

export default AdminAuth(ManageEvents)