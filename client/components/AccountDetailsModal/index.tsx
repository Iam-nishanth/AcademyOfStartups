import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import EditBusinessForm, { BusinessFormData } from '@/components/EditAccount'
import { useAuthContext } from '@/hooks/useAuthContext';
import axios from 'axios';
import { Business } from '@/types/AuthTypes';
import { useRouter } from 'next/router';
interface ModalComponentProps {
    showModal: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}


interface response {
    message: string
    status: number
    data: object
    startup: Business
}
interface Error {
    response: object;
    message: string
    data: object
    status: number
}

const ModalComponent: React.FC<ModalComponentProps> = ({ showModal, setOpen, open }) => {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const { business, user, token, dispatch } = useAuthContext();



    const router = useRouter();

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleFormSubmit = async (data: BusinessFormData) => {

        const loadingMessage = message.loading("Loading...", 0);
        try {
            const response = await axios.put<response>(
                `https://pglgl7pl-8080.inc1.devtunnels.ms/startup/update/${business?.id}`, { startup: data }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            loadingMessage();
            if (response.status === 200) {
                message.success("Business Details Updated");

                localStorage.removeItem('business')
                localStorage.setItem('business', JSON.stringify(response.data.startup))
                dispatch({
                    type: 'EDIT', payload: {
                        business: response.data.startup
                    }
                })

                // Set a timeout to reload the router after 2 seconds
                setConfirmLoading(true);
                setTimeout(() => {
                    router.reload();
                }, 2000);
            }
        } catch (error: Error | any) {
            message.destroy()
            if (error.response.status === 404 || error.response.status === 401) {
                message.error(error.response.data.message);

                localStorage.removeItem('user');
                localStorage.removeItem('business');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' });

                router.replace('/login');
            }
            else if (error.response.status === 500) {
                message.error(error.response.data.message);
            }
            console.error(error);
        }
    }


    return (
        <>
            <Button type="primary" onClick={showModal} style={{ width: '120px', height: '40px' }}>
                Edit Details
            </Button>

            <Modal
                title="Edit Business Details"
                okText="Done"
                destroyOnClose
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <EditBusinessForm onSubmit={handleFormSubmit} />
            </Modal>
        </>
    );
};

export default ModalComponent;