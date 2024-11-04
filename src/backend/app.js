import express from 'express';
import morgan from 'morgan';
import authRouter from './router/auth.router.js';
import actionsRouter from './router/actions.router.js';


const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use('/api', authRouter);
app.use('/api', actionsRouter);




export default app;