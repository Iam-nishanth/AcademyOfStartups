import BackButton from '@/components/BackButton';
import AdminAuth from '@/components/HighOrders/AdminAuth'
import { useAuthContext } from '@/hooks/useAuthContext';
import { CardButton, DashboardContainer, DashboardWrapper, Pair, UserCard, UserCards } from '@/styles/views/DashBoardstyles';
import { Business } from '@/types/AuthTypes';
import { Tabs } from 'antd';
import React from 'react'
import axios from '@/lib/axios';

const ManageBusiness = () => {
    const { user } = useAuthContext();
    const [businesses, setBusinesses] = React.useState<Business[]>([]);

    React.useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get<any>('/admin/all-businesses')
                if (response.status === 200) {
                    setBusinesses(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    console.log(businesses)


    const capitalizeFirstLetter = (word: string): string => {
        return word[0].toUpperCase() + word.slice(1);
    }

    const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;

    // const businessTabs = [
    //     {
    //         label: 'All Business',
    //         key: '1',
    //         children: (
    //             businesses.length > 0 ? (
    //                 <UserCards>
    //                     {businesses.map((business: Business) => {
    //                         return (
    //                             <UserCard key={business.id}>
    //                                 <Pair>
    //                                     <strong className='title'>ID <b>:</b></strong><span>{business.id}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Name  <b>:</b></strong><span>{business.businessName}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Owner Name  <b>:</b></strong><span>{business.ownerName}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Email  <b>:</b></strong><span>{business.businessEmail}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Registation  <b>:</b></strong><span>{business.registrationType}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Category  <b>:</b></strong><span>{business.businessCategory}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Type  <b>:</b></strong><span>{business.productOrService}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Status  <b>:</b></strong><span>{business.Status}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>ITR / year  <b>:</b></strong><span>{business.itrPerYear}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Address  <b>:</b></strong><span>{business.address}</span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Website  <b>:</b></strong><span><a href={business.companyWebsite} target="_blank">Open🌐</a></span>
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Is Verified  <b>:</b></strong>{business.isVerified === true ? <span style={{ color: 'green', textDecoration: 'underline' }}>Verified</span> : <span style={{ color: 'red', textDecoration: 'underline' }}>Not Verified</span>}
    //                                 </Pair>
    //                                 <Pair>
    //                                     <strong className='title'>Created At <b>:</b></strong>
    //                                     <span>{new Date(business.createdAt).toLocaleString()}</span>
    //                                 </Pair>
    //                             </UserCard>
    //                         );
    //                     })}
    //                 </UserCards>
    //             ) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>

    //         ),
    //     },
    //     {
    //         label: 'Add Business',
    //         key: '2',
    //         children: 'Content of Tab Pane 2',
    //     },
    //     {
    //         label: 'Edit Business',
    //         key: '3',
    //         children: 'Content of Tab Pane 3',
    //     },
    //     {
    //         label: 'Delete Business',
    //         key: '4',
    //         children: 'Content of Tab Pane 3',
    //     }
    // ]

    return (
        <main>
            <BackButton dropdown={true} user={DisplayName} />
            <DashboardContainer>
                <DashboardWrapper>
                    {businesses.length > 0 ? (
                        <UserCards>
                            {businesses.map((business: Business) => {
                                return (
                                    <UserCard key={business.id}>
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
                                            <strong className='title'>Is Verified  <b>:</b></strong>{business.isVerified === true ? <span style={{ color: 'green', textDecoration: 'underline' }}>Verified</span> : <span style={{ color: 'red', textDecoration: 'underline' }}>Not Verified</span>}
                                        </Pair>
                                        <Pair>
                                            <strong className='title'>Created At <b>:</b></strong>
                                            <span>{new Date(business.createdAt).toLocaleString()}</span>
                                        </Pair>
                                        <Pair style={{ justifyContent: 'center' }}>
                                            <CardButton background='red'>Delete</CardButton>
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

export default AdminAuth(ManageBusiness)