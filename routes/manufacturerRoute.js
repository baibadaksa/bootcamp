import express from 'express';
import indexAction from '../controllers/manufacturerController';

const router = express.Router();

router.get('/manufacturer', indexAction);

export default router;
