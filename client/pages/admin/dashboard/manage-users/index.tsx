import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Skeleton, message } from 'antd';
import React, { useEffect } from 'react'
import axios from '@/lib/axios'
import { User } from '@/types/AuthTypes';
import { Heading } from '@/styles/Globalstyles';
import { Modal } from 'antd';
import { CommonButton } from '@/components/Common/Button';
import AddUser from '@/components/AdminComponents/AddUser'
import { decryptResponse } from '@/lib/encryption';





const ManageUsers = () => {
    const { user } = useAuthContext();
    const [users, setUsers] = React.useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get<any>('/admin/all-users');
                if (response.status === 200) {
                    const decryptedUsers = decryptResponse(response.data.users, process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string);
                    setUsers(decryptedUsers);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    const checkBusiness = async (id: string) => {
        try {
            const response = await axios.get<any>(`/admin/user-business/${id}`);
            if (response.status === 200) {
                return true
            } else if (response.status === 404) {
                return false
            }
        }
        catch (error) {
            console.log(error);
            message.error('Some error Occured')
        }
    }

    const DeleteUser = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: <p style={{ fontWeight: '500' }}>Deleting User will also delete the corresponding <b style={{ color: 'red' }}>Business</b>. Are you sure you want to delete this user?</p>,
            okButtonProps: {
                color: 'red',
            },
            onOk: async () => {
                try {
                    const response = await axios.delete<any>(`/admin/delete-user/${id}`);
                    if (response.status === 200) {
                        setUsers(users.filter((user) => user.id !== id));
                        message.success('User deleted successfully');
                    }
                } catch (error) {
                    console.log(error);
                    message.error('Some error Occured')
                }
            },
            onCancel: () => { },
        });
    };


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <DashboardContainer>
                <DashboardWrapper>
                    <Modal title="Add User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Done' >
                        <AddUser />
                    </Modal>
                    <Pair style={{ justifyContent: 'space-between', padding: '0 10px' }}>
                        <Heading>Manage Users</Heading>
                        <CommonButton name='Add User' width='150px' height='40px' onClick={showModal} />
                    </Pair>
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
                                            <strong className='title'>Is Verified  <b>:</b></strong>{user.isVerified === true ? <span style={{ background: 'green', color: 'white', padding: '0 5px' }}>Verified</span> : <span style={{ background: 'red', color: 'white', padding: '0 5px' }}> Not Verified</span>}
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Created At <b>:</b></strong>
                                            <span>{new Date(user.createdAt).toLocaleString()}</span>
                                        </Pair>
                                        <Pair style={{ justifyContent: 'center' }}>
                                            <CardButton onClick={() => DeleteUser(user.id)} background='#fd3838'>Delete</CardButton>
                                        </Pair>
                                    </UserCard>
                                );
                            })}
                        </UserCards>
                    ) : <Skeleton active paragraph={{ rows: 15, width: '100%' }} />
                    }
                </DashboardWrapper>

            </DashboardContainer>
        </main>
    )
}

export default AdminAuth(ManageUsers)