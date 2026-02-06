import express from 'express';
import { WorkflowController } from './controllers/WorkflowController';
import { errorHandler } from './middleware/errorHandler';
const app = express();
app.use(express.json());
app.use('/workflows', WorkflowController);
app.use(errorHandler);
app.listen(3000, () => console.log('Server running on port 3000'));