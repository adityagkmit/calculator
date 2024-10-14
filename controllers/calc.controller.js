import { User } from '../models/user.model.js';

export const performOperation = async (req, res) => {
    const { input1, input2, operator } = req.body;
    let result;

    switch (operator) {
        case 'add':
            result = input1 + input2;
            break;
        case 'sub':
            result = input1 - input2;
            break;
        case 'mul':
            result = input1 * input2;
            break;
        case 'div':
            if (input2 === 0) return res.status(400).send('Cannot divide by zero');
            result = input1 / input2;
            break;
        default:
            return res.status(400).send('Invalid operator');
    }

    const user = await User.findById(req.user._id);
    user.history.push({ input1, input2, operator, result });
    await user.save();

    res.send({ result });
};

export const getHistory = async (req, res) => {
    const user = await User.findById(req.user._id);
    res.send(user.history);
};

export const clearHistory = async (req, res) => {
    const user = await User.findById(req.user._id);
    user.history = [];
    await user.save();
    res.send('History cleared');
};

export const resetHistory = async (req, res) => {
    const user = await User.findById(req.user._id);
    user.history = [];
    await user.save();
    res.send('History reset');
};
