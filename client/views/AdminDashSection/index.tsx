import { useAuthContext } from '@/hooks/useAuthContext'
import { Heading, SubHeading } from '@/styles/Globalstyles'
import { AdminCard, AdminCards, DashboardContainer, DashboardHeadings, DashboardWrapper, } from '@/styles/views/DashBoardstyles'
import Link from 'next/link'
import React from 'react'
import { BiSolidBusiness, BiSolidCalendarEdit } from 'react-icons/bi'
import { FaUsersCog } from 'react-icons/fa'
import { GiPayMoney } from 'react-icons/gi'


const AdminDashSection = () => {
    const { user } = useAuthContext()

    return (
        <DashboardContainer style={{ backgroundColor: '#001336' }}>
            <DashboardWrapper>
                <DashboardHeadings>
                    <Heading style={{ color: 'white' }}>Welcome Back, Mr. {user?.name}</Heading>
                    <SubHeading>Please select an operation</SubHeading>
                </DashboardHeadings>
                <AdminCards>

                    <Link href='/admin/dashboard/manage-users'>
                        <AdminCard>
                            <FaUsersCog />
                            <h3>User <br /> Management</h3>
                        </AdminCard>
                    </Link>
                    <Link href='/admin/dashboard/manage-business'>
                        <AdminCard>
                            <BiSolidBusiness />
                            <h3>Business <br /> Management</h3>
                        </AdminCard>
                    </Link>
                    <Link href='/admin/dashboard/manage-investors'>
                        <AdminCard>
                            <GiPayMoney />
                            <h3>Investor <br /> Management</h3>
                        </AdminCard>
                    </Link>
                    <Link href='/admin/dashboard/manage-events'>
                        <AdminCard>
                            <BiSolidCalendarEdit />
                            <h3>Events <br /> Management</h3>
                        </AdminCard>
                    </Link>
                </AdminCards>

            </DashboardWrapper>
        </DashboardContainer >
    )
}

export default AdminDashSection