import React from 'react'
import { BackContainer, BackDiv, BackWrapper, LogoutButton } from '../../styles/components/BackButton'
import { useRouter } from 'next/router';
import { IoArrowBackSharp } from 'react-icons/io5'
import UserDropdown from '../Common/UserDropdown';


type BackButtonProps = {
    user?: any;
    dropdown: boolean;
    handle?: () => void;
    color?: string;
    backgroundColor?: string;
}

const BackButton = ({ user, dropdown, handle, color, backgroundColor }: BackButtonProps) => {

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
        <BackContainer color={color} backgroundColor={backgroundColor}>
            <BackWrapper>
                <BackDiv onClick={handleBack} color={color} >
                    <IoArrowBackSharp />
                    <span>Go Back</span>
                </BackDiv>
                {
                    dropdown ? (
                        <UserDropdown color={color} user={user} />
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