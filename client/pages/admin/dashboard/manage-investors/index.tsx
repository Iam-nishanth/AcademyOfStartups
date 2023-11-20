import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Investor } from '@/types/Investors';
import React from 'react'
import axios from '@/lib/axios';
import { Heading } from '@/styles/Globalstyles';
import { Modal, Skeleton, message } from 'antd';
import { CommonButton } from '@/components/Common/Button';
import AddInvestor from '@/components/AdminComponents/AddInvestor';
import Image from 'next/image';
import { decryptResponse } from '@/lib/encryption';
import Head from 'next/head';
import { useRouter } from 'next/router';





const ManageInvestors = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const { user, dispatch, token } = useAuthContext();
    const [investors, setInvestors] = React.useState<Investor[]>([]);
    const router = useRouter();

    React.useEffect(() => {
        const getInvestors = async () => {
            try {
                const response = await axios.get<any>('/admin/all-investors')
                if (response.status === 200) {
                    const decryptedInvestors = decryptResponse(response.data, process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string)
                    setInvestors(decryptedInvestors)
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
        getInvestors()

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

    const deleteInvestor = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: 'Are you sure you want to delete this investor?',
            onOk: async () => {
                try {
                    const response = await axios.delete<any>(`/admin/delete-investor/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.status === 200) {
                        message.success('Investor deleted successfully');
                        setInvestors(investors.filter((investor) => investor.id !== id));
                    }
                } catch (error) {
                    console.log(error);
                    message.error('Some error occurred');
                }
            },
            onCancel: () => { }
        });
    }

    return (
        <>
            <Head>
                <title>Manage-Investors | Admin</title>
                <meta name='robots' content='noindex,nofollow' />
            </Head>
            <main>
                <BackButton dropdown={true} user={DisplayName} />
                <DashboardContainer>
                    <DashboardWrapper>
                        <Modal title="Add Investor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Done'>
                            <AddInvestor />
                        </Modal>
                        <Pair style={{ justifyContent: 'space-between', padding: '0 10px' }}>
                            <Heading>Manage Investors</Heading>
                            <CommonButton name='Add Investor' width='150px' height='40px' onClick={showModal} />
                        </Pair>
                        {investors && investors.length > 0 ? (
                            <UserCards>
                                {investors.map(({ id, name, email, gender, isVerified, createdAt, InvestorInfo }) => {
                                    if (!InvestorInfo) return null;

                                    const { Image: imageUri, InvestmentRange, DomainsOfInterest, PhoneNo, Address } = InvestorInfo[0] ?? {};

                                    return (
                                        <UserCard key={id}>
                                            <Pair>
                                                <strong className='title'>Image <b>:</b></strong>
                                                <span>{
                                                    imageUri ? (
                                                        <Image src={imageUri.toString()} alt={name + ' Image'} width={80} height={80} />
                                                    ) : (
                                                        'No Image'
                                                    )
                                                }</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>ID <b>:</b></strong>
                                                <span>{id}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Name  <b>:</b></strong>
                                                <span>{name}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Email  <b>:</b></strong>
                                                <span>{email}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Gender  <b>:</b></strong>
                                                <span>{gender}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Is Verified  <b>:</b></strong>
                                                {isVerified === true ? <span style={{ background: 'green', color: 'white', padding: '0 5px' }}>Verified</span> : <span style={{ background: 'red', color: 'white', padding: '0 5px' }}> Not Verified</span>}
                                            </Pair>
                                            <Pair>

                                                <strong className='title'>Range  <b>:</b></strong>
                                                <span>{InvestmentRange}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Domains  <b>:</b></strong>
                                                <span>{DomainsOfInterest?.join(", ")}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Phone No <b>:</b></strong>
                                                <span>{PhoneNo}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Address <b>:</b></strong>
                                                <span>{Address}</span>
                                            </Pair>
                                            <Pair>
                                                <strong className='title'>Created At <b>:</b></strong>
                                                <span>{new Date(createdAt).toLocaleString()}</span>
                                            </Pair>
                                            <Pair style={{ justifyContent: 'center' }}>
                                                <CardButton onClick={() => deleteInvestor(id)} background='red'>Delete</CardButton>
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
        </>

    )
}

export default AdminAuth(ManageInvestors)