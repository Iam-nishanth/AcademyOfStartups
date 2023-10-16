import React, { useEffect } from 'react'
import CryptoJS from 'crypto-js';



export const decryptResponse = (encryptedResponse: any, secretKey: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedResponse, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error('Error decrypting response:', error);
        return null;
    }
};

const hex = '1b17e10b18ab81bc9ad9f4756cc55a3c8d309a987ea8aabaae1be8ae800aaf8fb7a64b21f75ddd3f511866550177593f74535731140f9206cab1cfb750d07c9b';

const response = "U2FsdGVkX1/1T5asW/MluyajK0apkKWCS7grSxg8Gzcxh/i6j4uNEolqxY6L2nJXuJaBjmZ3Jy0t9PSMwYrXjxREB6J/Q4DkAg17s1THE38Zw0HdVl7xPorAHlB52rF1RRUvS0tDI7JuRuWsC+od9YzdIUfKKsPdbtAoXyjTB1CSkPqz1BA8bSMzifiKCfPzgdboLfhvNljKBTotO0Y23iTCVvEK38sIsWL2PMrSc+rRI5xHs7keoF/6BXJIsMvx"


const Hash = () => {

    useEffect(() => {
        const decryptedData = decryptResponse(response, hex);

        console.log(decryptedData)
    })

    return (
        <div>index</div>
    )
}

export default Hash