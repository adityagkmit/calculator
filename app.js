// app.js
import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './DB/index.js';
import authRoutes from './routes/user.route.js';
import calcRoutes from './routes/calc.route.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectToDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/calculator', calcRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
