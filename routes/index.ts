import express from 'express';
import { API_PREFIX_PATH } from '../config/config';
import test from './api/test.route';

const router = express.Router();
router.use(`${API_PREFIX_PATH}/test`, test);

export default router;
