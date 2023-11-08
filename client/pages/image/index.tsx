import React, { useState } from 'react';
import { Input } from 'antd';

const ImageUpload: React.FC = () => {
    const [imageBase64, setImageBase64] = useState('');

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result as string;
                setImageBase64(base64Image);
            };
            reader.readAsDataURL(file);
        }


    };

    return (
        <div>
            <Input type="file" onChange={handleImageUpload} />
            <div>
                <img src={imageBase64} alt="Uploaded image" />
            </div>
        </div>
    );
};

export default ImageUpload;
