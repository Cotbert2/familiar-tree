import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import authRouter from './router/auth.router.js';


const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use('/api', authRouter);




export default app;