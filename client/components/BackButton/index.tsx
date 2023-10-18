import React from 'react'
import { BackContainer, BackDiv, BackWrapper, LogoutButton } from '../../styles/components/BackButton'
import { useRouter } from 'next/router';
import { BiSolidLeftArrow } from 'react-icons/bi'
import { IoArrowBackSharp } from 'react-icons/io5'
import { CommonButton } from '../Common/Button';
import UserDropdown from '../Common/UserDropdown';


type BackButtonProps = {
    user?: any;
    dropdown: boolean;
    handle?: () => void;
}

const BackButton = ({ user, dropdown, handle }: BackButtonProps) => {

    const router = useRouter();

    const handleBack = () => {
        const previousPage = router.query.from;

        if (previousPage == 'redirect') {
            router.push('/');
        }
        else if (previousPage == 'investors-redirect') {
            router.push('/investors');
        }
        else {
            router.back();
        }
    };



    return (
        <BackContainer>
            <BackWrapper>
                <BackDiv onClick={handleBack} >
                    <IoArrowBackSharp />
                    <span>Go Back</span>
                </BackDiv>
                {
                    dropdown ? (
                        <UserDropdown user={user} />
                    )
                        : (
                            <LogoutButton onClick={handle}>Log out</LogoutButton>
                        )
                }
            </BackWrapper>
        </BackContainer>
    )
}

export default BackButton