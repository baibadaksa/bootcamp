import express from 'express';
import indexAction from '../controllers/categoryController';

const router = express.Router();

router.get('/category', indexAction);

export default router;
