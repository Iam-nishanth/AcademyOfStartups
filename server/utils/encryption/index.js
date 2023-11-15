import CryptoJS from "crypto-js";
import pako from "pako";

export const encryptResponse = (response, secretKey) => {
  const compressedResponse = pako.deflate(JSON.stringify(response));
  const encryptedResponse = CryptoJS.AES.encrypt(
    JSON.stringify(response),
    secretKey
  ).toString();
  return encryptedResponse;
};
