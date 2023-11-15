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