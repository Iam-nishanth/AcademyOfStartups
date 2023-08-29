import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/hooks/useAuthContext';

const { useToken } = theme;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                My Account
            </a>
        ),
    },

];
interface userProps {
    user: string;
}

const LogoutDrop: React.FC<userProps> = ({ user }) => {
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

    const LogoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('clicked logout');

        localStorage.removeItem('user');
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
                        <Button onClick={(e) => LogoutHandler(e)} type="primary">Logout</Button>
                    </Space>
                </div>
            )}
        >
            <a >
                <Space>
                    Hello <strong>{user}</strong>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default LogoutDrop;