import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuthContext';
import Link from 'next/link';

const { useToken } = theme;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link style={{ fontWeight: 'bold' }} href="/dashboard">
                Dashboard
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link style={{ fontWeight: 'bold' }} href="/dashboard">
                My Account
            </Link>
        ),
    },

];
interface userProps {
    user: string | null | undefined;
}

const UserDropdown: React.FC<userProps> = ({ user }) => {
    const { token } = useToken();
    const router = useRouter();
    const { dispatch } = useAuthContext()

    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };

    const menuStyle: React.CSSProperties = {
        boxShadow: 'none',
    };
    const buttonStyles: React.CSSProperties = {

    }

    const LogoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked logout');

        localStorage.removeItem('user');
        localStorage.removeItem('business');
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    }


    return (
        <Dropdown

            menu={{ items }}
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
    );
};

export default UserDropdown;