import express from 'express';
import { createConverso, getAllConverso, getConverso, updateConverso, deleteConverso } from '../controllers/ConversoController.js';
const router = express.Router()

router.get('/', getAllConverso)
router.get('/:id', getConverso)
router.post('/', createConverso)
router.put('/:id', updateConverso)
router.delete('/:id', deleteConverso)

export default router
