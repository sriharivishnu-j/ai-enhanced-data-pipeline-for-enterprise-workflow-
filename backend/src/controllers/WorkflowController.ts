import { Router } from 'express';
import { WorkflowService } from '../services/WorkflowService';
const router = Router();
router.get('/', async (req, res, next) => {
  try {
    const workflows = await WorkflowService.getWorkflows();
    res.json(workflows);
  } catch (error) {
    next(error);
  }
});
export const WorkflowController = router;