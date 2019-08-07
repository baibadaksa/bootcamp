import express from 'express';
import indexAction from '../controllers/productController';

const router = express.Router();

router.get('/product', indexAction);

export default router;
