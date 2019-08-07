import express from 'express';
import indexAction from '../controllers/userController';

const router = express.Router();

router.get('/user', indexAction);

export default router;
