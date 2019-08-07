import express from 'express';
import indexAction from '../controllers/commentController';

const router = express.Router();

router.get('/comment', indexAction);

export default router;
