import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { message } from 'antd';
import React, { useEffect } from 'react'
import axios from '@/lib/axios'
import { User } from '@/types/AuthTypes';
import { Heading } from '@/styles/Globalstyles';
import { Modal } from 'antd';
import { CommonButton } from '@/components/Common/Button';
import AddUser from '@/components/AdminComponents/AddUser'



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


    const DeleteUser = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: 'Are you sure you want to delete this user?',
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
                                            <strong className='title'>Is Verified  <b>:</b></strong>{user.isVerified === true ? <span style={{ color: 'green', textDecoration: 'underline' }}>Verified</span> : <span style={{ color: 'red', textDecoration: 'underline' }}>Not Verified</span>}
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
                    ) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
                    }
                </DashboardWrapper>

            </DashboardContainer>
        </main>
    )
}

export default AdminAuth(ManageUsers)