import dotenv from 'dotenv';

dotenv.config();

/**
 * APPLICATION PORT
 */
export const APP_PORT = process.env.APP_CLIENT_PORT || '5003'


export const GRPC_SERVER_PORT = process.env.GRPC_SERVER_PORT || '5001'
