import express from 'express';
import { performOperation, getHistory, clearHistory, resetHistory } from '../controllers/calc.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/operations', authMiddleware, performOperation);
router.get('/history', authMiddleware, getHistory);
router.delete('/clear', authMiddleware, clearHistory);
router.post('/reset', authMiddleware, resetHistory);

export default router;
