// server.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRouter from './routes/authRoutes.js';
import cors from "cors";

const app = express();
dotenv.config();

connectDb();

// Use cors as a function
app.use(cors({
    origin: ["http://localhost:3000"]
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({
        message: "e-commerce app"
    });
});

const port = process.env.PORT;

app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
