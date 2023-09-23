import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { CommonButton } from '../Common/Button';
interface ModalComponentProps {
    showModal: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ showModal, setOpen, open }) => {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1500);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{ width: '120px', height: '40px' }}>
                Edit Details
            </Button>

            <Modal
                title="Title"
                okText="Submit"
                destroyOnClose
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

export default ModalComponent;