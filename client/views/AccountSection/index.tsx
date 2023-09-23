import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Heading } from '@/styles/Globalstyles'
import { AccountSectionContainer, AccountSectionWrapper, DetailsWrapper, PairHolder, ValueHolder } from '@/styles/views/AccountSectionStyles';
import { Tabs } from 'antd';
import { useAuthContext } from '@/hooks/useAuthContext';
import { IoCaretBack } from 'react-icons/io5';
import ModalComponent from '@/components/AccountDetailsModal';

const AccountSection = () => {
    const { user, business } = useAuthContext();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const showModal = () => {
        setOpen(true);
        console.log('Clicked open modal');
    }
    const handleBack = () => {
        router.back();
    }

    const AccountSectionTabs = [
        {
            label: 'User Details',
            key: '1',
            children: (
                <DetailsWrapper>
                    <PairHolder>
                        <strong>User Name: </strong>
                        <ValueHolder>
                            <p>{business && business.name}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>User Email: </strong>
                        <ValueHolder>
                            <p>{user && user.userEmail}</p>
                        </ValueHolder>
                    </PairHolder>
                </DetailsWrapper>
            ),
        },
        {
            label: 'Startup Details',
            key: '2',
            children: (
                <DetailsWrapper>
                    <ModalComponent showModal={showModal} setOpen={setOpen} open={open} />
                    <PairHolder>
                        <strong>Business Name: </strong>
                        <ValueHolder>
                            <p>{business && business.businessName}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Email: </strong>
                        <ValueHolder>
                            <p>{business && business.businessEmail}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Phone No: </strong>
                        <ValueHolder>
                            <p>{business && business.phoneNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Category: </strong>
                        <ValueHolder>
                            <p>{business && business.businessCategory}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Registration Type: </strong>
                        <ValueHolder>
                            <p>{business && business.registrationType}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Category: </strong>
                        <ValueHolder>
                            <p>{business && business.businessCategory}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business Type: </strong>
                        <ValueHolder>
                            <p>{business && business.productOrService}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>INC No. : </strong>
                        <ValueHolder>
                            <p>{business && business.incNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Website Address : </strong>
                        <ValueHolder>
                            <p>{business && business.companyWebsite}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Business PAN : </strong>
                        <ValueHolder>
                            <p>{business && business.panNo}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>GST No. : </strong>
                        <ValueHolder>
                            <p>{business && (business.gstNo === '' ? 'N/A' : business.gstNo)}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>ITR per Year : </strong>
                        <ValueHolder>
                            <p>{business && business.itrPerYear}</p>
                        </ValueHolder>
                    </PairHolder>
                    <PairHolder>
                        <strong>Address: </strong>
                        <ValueHolder>
                            <p>{business && business.address}</p>
                        </ValueHolder>
                    </PairHolder>
                </DetailsWrapper>
            ),
        },
    ];

    return (
        <AccountSectionContainer>
            <AccountSectionWrapper>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div onClick={handleBack} >
                        <IoCaretBack style={{ cursor: 'pointer', fontSize: '30px' }} />
                    </div>
                    <Heading>Account Details</Heading>
                </div>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={AccountSectionTabs}
                />
            </AccountSectionWrapper>
        </AccountSectionContainer>
    );
};

export default AccountSection;