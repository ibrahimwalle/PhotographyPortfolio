import { UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';

// fetch secrets from .env file
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const secretKey = import.meta.env.VITE_APP_SECRET_KEY;

export const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: publicKey,
    secretKey: secretKey,
});
