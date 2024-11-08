import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.DB_URI || 'mongodb://localhost:27017/express-mongoose';
export const ENCRYPTATION_LAYERS = 10;