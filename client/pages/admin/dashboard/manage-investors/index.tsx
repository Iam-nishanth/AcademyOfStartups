import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Investor } from '@/types/Investors';
import React from 'react'
import axios from '@/lib/axios';
import { Heading } from '@/styles/Globalstyles';
import { Modal, message } from 'antd';
import { CommonButton } from '@/components/Common/Button';
import AddInvestor from '@/components/AdminComponents/AddInvestor';

const ManageInvestors = () => {
    const { user } = useAuthContext();
    const [investors, setInvestors] = React.useState<Investor[]>([]);
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
                const response = await axios.get<any>('/admin/all-investors')
                if (response.status === 200) {
                    setInvestors(response.data.investors)
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

    const deleteInvestor = async (id: string) => {
        Modal.confirm({
            title: 'Confirm Deletion',
            okText: 'Confirm',
            cancelText: 'Cancel',
            content: 'Are you sure you want to delete this investor?',
            onOk: async () => {
                try {
                    const response = await axios.delete<any>(`/admin/delete-investor/${id}`);
                    if (response.status === 200) {
                        setInvestors(investors.filter((investor) => investor.id !== id));
                        message.success('Investor deleted successfully');
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            onCancel: () => {
                // Do nothing if user cancels the deletion
            }
        });
    }


    return (
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
                    {investors.length > 0 ? (
                        <UserCards>
                            {investors.map((investor) => {
                                return (
                                    <UserCard key={investor.id}>
                                        <Pair>
                                            <strong className='title'>ID <b>:</b></strong><span>{investor.id}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Name  <b>:</b></strong><span>{investor.name}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Email  <b>:</b></strong><span>{investor.email}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Gender  <b>:</b></strong><span>{investor.gender}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Is Verified  <b>:</b></strong>{investor.isVerified === true ? <span style={{ color: 'green', textDecoration: 'underline' }}>Verified</span> : <span style={{ color: 'red', textDecoration: 'underline' }}>Not Verified</span>}
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Range  <b>:</b></strong><span>{investor.InvestorInfo[0].InvestmentRange}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Domains  <b>:</b></strong><span>{investor.InvestorInfo[0].DomainsOfInterest.join(", ")}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Phone No <b>:</b></strong>
                                            <span>{investor.InvestorInfo[0].PhoneNo}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Address <b>:</b></strong>
                                            <span>{investor.InvestorInfo[0].Address}</span>
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Created At <b>:</b></strong>
                                            <span>{new Date(investor.createdAt).toLocaleString()}</span>
                                        </Pair>
                                        <Pair style={{ justifyContent: 'center' }}>
                                            <CardButton onClick={() => deleteInvestor(investor.id)} background='red'>Delete</CardButton>
                                        </Pair>
                                    </UserCard>
                                );
                            })}
                        </UserCards>
                    ) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>}
                </DashboardWrapper>

            </DashboardContainer>
        </main>
    )
}

export default AdminAuth(ManageInvestors)