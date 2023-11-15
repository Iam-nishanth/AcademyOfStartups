import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Business } from '@/types/AuthTypes';
import { Modal, Skeleton, message } from 'antd';
import React from 'react'
import axios from '@/lib/axios';
import { Heading } from '@/styles/Globalstyles';
import { CommonButton } from '@/components/Common/Button';
import AddBusiness from '@/components/AdminComponents/AddBusiness'
import { decryptResponse } from '@/lib/encryption';
import Image from 'next/image';

const ManageBusiness = () => {
    const { user } = useAuthContext();
    const [businesses, setBusinesses] = React.useState<Business[]>([]);
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

    React.useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get<any>('/admin/all-businesses')
                if (response.status === 200) {
                    const decryptedBusinesses = decryptResponse(response.data.businesses, process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string)
                    setBusinesses(decryptedBusinesses)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;

    const deleteBusiness = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: 'Are you sure you want to delete this business?',
            okButtonProps: {
                color: 'red',
            },
            onOk: async () => {
                try {
                    const response = await axios.delete<any>(`/admin/delete-business/${id}`);
                    if (response.status === 200) {
                        setBusinesses(businesses.filter((business) => business.id !== id));
                        message.success('Business deleted successfully');
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            onCancel: () => {
                // Do nothing if user cancels the deletion
            },
        });
    }

    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <DashboardContainer>
                <DashboardWrapper>
                    <Modal title="Add Business" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Done' >
                        <AddBusiness />
                    </Modal>
                    <Pair style={{ justifyContent: 'space-between', padding: '0 10px' }}>
                        <Heading>Manage Businesses</Heading>
                        <CommonButton name='Add Business' width='150px' height='40px' onClick={showModal} />
                    </Pair>
                    {businesses.length > 0 ? (
                        <UserCards>
                            {businesses.map((business: Business) => {
                                return (
                                    <UserCard key={business.id}>
                                        <Pair style={{ height: '80px', alignItems: 'center' }}>
                                            <strong className='title'>Logo <b>:</b></strong>
                                            <span >{
                                                business.Logo ? (
                                                    <Image src={business.Logo.toString()} alt={business.businessName + ' Image'} width={150} height={80} />
                                                ) : (
                                                    'No Image'
                                                )
                                            }</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>ID <b>:</b></strong><span>{business.id}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Name  <b>:</b></strong><span>{business.businessName}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Owner Name  <b>:</b></strong><span>{business.ownerName}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Email  <b>:</b></strong><span>{business.businessEmail}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Registation  <b>:</b></strong><span>{business.registrationType}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Category  <b>:</b></strong><span>{business.businessCategory}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Type  <b>:</b></strong><span>{business.productOrService}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Status  <b>:</b></strong><span>{business.Status}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>ITR / year  <b>:</b></strong><span>{business.itrPerYear}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Address  <b>:</b></strong><span>{business.address}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Website  <b>:</b></strong><span><a href={business.companyWebsite} target="_blank">🌐Open</a></span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Is Verified  <b>:</b></strong>{business.isVerified === true ? <span style={{ background: 'green', color: 'white', padding: '0 5px' }}>Verified</span> : <span style={{ background: 'red', color: 'white', padding: '0 5px' }}> Not Verified</span>}
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Created At <b>:</b></strong>
                                            <span>{new Date(business.createdAt).toLocaleString()}</span>
                                        </Pair>
                                        <Pair style={{ justifyContent: 'center', alignSelf: 'flex-end' }}>
                                            <CardButton background='red' onClick={() => deleteBusiness(business.id)}>Delete</CardButton>
                                        </Pair>
                                    </UserCard>
                                );
                            })}
                        </UserCards>
                    ) : <Skeleton active paragraph={{ rows: 15, width: '100%' }} />}
                </DashboardWrapper>

            </DashboardContainer>
        </main>
    )
}

export default AdminAuth(ManageBusiness)