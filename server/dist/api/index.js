import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../configs/db.js';
import AuthRouter from '../routes/AuthRoutes.js';
import ThumbnailRouter from '../routes/ThumbnailRoutes.js';
import UserRouter from '../routes/UserRoutes.js';
await connectDB();
const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is Live!");
});
app.use('/api/auth', AuthRouter);
app.use('/api/thumbnail', ThumbnailRouter);
app.use('/api/user', UserRouter);
export default app;
