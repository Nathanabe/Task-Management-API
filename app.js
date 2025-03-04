import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import Task from './src/models/Task.js';
import tasksRouter from './src/routes/tasks.js';
import { errorHandler } from './src/middleware/errorHandler.js';

const app = express();
const swaggerDoc = YAML.load('./swagger/swagger.yaml');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/tasks', tasksRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
