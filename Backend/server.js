import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRouts.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
	res.send('server is ready');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
