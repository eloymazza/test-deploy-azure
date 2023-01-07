export const ENVIRONMENT = process.env.APP_ENV || 'dev';
export const IS_PRODUCTION = ENVIRONMENT === 'production';
export const IS_TEST = ENVIRONMENT === 'test';
export const PORT = Number(process.env.PORT) || 8080;
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/';
export const API_PREFIX_PATH = process.env.API_PREFIX_PATH || '/api';
export const DB_URI =
  process.env.DB_URI || 'mongodb://localhost:27017/marathon-dev';
export const DB = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_USER_PWD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PORT: Number(process.env.DB_PORT) || 27017,
};
