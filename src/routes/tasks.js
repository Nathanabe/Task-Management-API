import express from 'express';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from '../controllers/tasks.js';
import { validateTask } from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateTask, createTask);
router.get('/', getAllTasks);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

export default router;
