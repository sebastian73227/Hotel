import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import roomsRoutes from './routes/rooms'

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());

app.use(roomsRoutes);
export default app;

