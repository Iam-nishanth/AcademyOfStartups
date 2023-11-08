// type ImageFile = File | Blob;

// const convertImageToBase64 = (imageFile: ImageFile): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event: ProgressEvent<FileReader>) => {
//       const base64Image = event.target.result as string;
//       resolve(base64Image);
//     };
//     reader.onerror = (error: ErrorEvent) => {
//       reject(error.error);
//     };
//     reader.readAsDataURL(imageFile);
//   });
// };
