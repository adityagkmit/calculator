import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    history: [
        {
            input1: Number,
            input2: Number,
            operator: String,
            result: Number,
            createdAt: { type: Date, default: Date.now }
        }
    ]
});

export const User = mongoose.model('User', userSchema);
