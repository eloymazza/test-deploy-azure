"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.DB_URI = exports.API_PREFIX_PATH = exports.APP_PREFIX_PATH = exports.PORT = exports.IS_TEST = exports.IS_PRODUCTION = exports.ENVIRONMENT = void 0;
exports.ENVIRONMENT = process.env.APP_ENV || 'dev';
exports.IS_PRODUCTION = exports.ENVIRONMENT === 'production';
exports.IS_TEST = exports.ENVIRONMENT === 'test';
exports.PORT = Number(process.env.PORT) || 8080;
exports.APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/';
exports.API_PREFIX_PATH = process.env.API_PREFIX_PATH || '/api';
exports.DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/marathon-dev';
exports.DB = {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_USER_PWD,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    PORT: Number(process.env.DB_PORT) || 27017,
};
