import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuthContext';
import Link from 'next/link';

const { useToken } = theme;


interface userProps {
    user: string | null | undefined;
}

const UserDropdown: React.FC<userProps> = ({ user }) => {
    const { token } = useToken();
    const router = useRouter();
    const { dispatch, user: authUser } = useAuthContext()
    const isAdmin = authUser?.role === 'ADMIN';
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link style={{ fontWeight: 'bold', fontSize: 16, padding: '5px 10px' }} href="/user/dashboard">
                    Dashboard
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link style={{ fontWeight: 'bold', fontSize: 16, padding: '5px 10px' }} href="/user/account">
                    My Account
                </Link>
            ),
        },
    ];
    const adminItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link style={{ fontWeight: 'bold', fontSize: 16, padding: '5px 10px' }} href="/admin/dashboard">
                    Admin-Dashboard
                </Link>
            )
        },
        {
            key: '2',
            label: (
                <Link style={{ fontWeight: 'bold', fontSize: 16, padding: '5px 10px' }} href="/user/dashboard">
                    User-Dashboard
                </Link>
            )
        },
        {
            key: '3',
            label: (
                <Link style={{ fontWeight: 'bold', fontSize: 16, padding: '5px 10px' }} href="/admin/account">
                    My Account
                </Link>
            )
        },
    ]

    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };

    const menuStyle: React.CSSProperties = {
        fontSize: 16,
        boxShadow: 'none',
    };

    const LogoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked logout');

        localStorage.removeItem('user');
        localStorage.removeItem('business');
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    }

    const userDropdownMobileStyles = {
        '@media (max-width: 575px)': {
            width: '200px',
        },
    };

    return (
        <div className='dropdown'>

            <Dropdown

                placement='topRight'
                menu={isAdmin ? { items: adminItems } : { items: items }}
                dropdownRender={(menu) => (
                    <div style={contentStyle}>
                        {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                        <Divider style={{ margin: 0 }} />
                        <Space style={{ padding: 8 }}>
                            <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => LogoutHandler(e)} type="primary">Logout</Button>
                        </Space>
                    </div>
                )}
            >
                <a >
                    <Space>
                        <strong>{user}</strong><CaretDownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default UserDropdown;