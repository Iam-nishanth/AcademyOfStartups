import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import { Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface ImgCropUploadProps {
    onImageUpload: (base64Image: string) => void;
    onClear?: () => void;
    cropShape?: 'round' | 'rect';
}

const ImageConvert: React.FC<ImgCropUploadProps> = ({ onImageUpload, onClear, cropShape }) => {
    const [file, setFile] = useState<UploadFile | null>(null);

    const onChange: UploadProps['onChange'] = ({ fileList }) => {
        setFile(fileList.length > 0 ? fileList[0] : null);
    };

    const onPreview = async () => {
        if (file) {
            let src = file.url as string;
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj as RcFile);
                    reader.onload = () => resolve(reader.result as string);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow?.document.write(image.outerHTML);
        }
    };

    const customRequest = ({ file, onSuccess }: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result as string;
            onImageUpload(base64Image);
            onSuccess(null, file);
        };
        reader.readAsDataURL(file);
    };

    const handleClear = () => {
        setFile(null);
        onClear && onClear();
    }

    return (
        <Upload
            action=""
            listType="picture-card"
            fileList={file ? [file] : []}
            onChange={onChange}
            onPreview={onPreview}
            customRequest={customRequest}
        >
            {file ? null : <strong>+ Upload</strong>}
        </Upload>
    );
};

export default ImageConvert;