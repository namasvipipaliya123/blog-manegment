const User = require('../models/User');

const signup = async (req, res) => {
    let { email } = req.body;
    let isUser = await User.findOne({ email: email });

    if (isUser) {
        return res.send({ message: 'Email already exists' });
    }
    else {
        let isUser = new User(req.body);
        await isUser.save();
        return res.send({ message: 'User created successfully' });
    }

};

const login = async (req, res) => {
    let { email, password } = req.body;
    let isUser = await User.findOne({ email: email });
    if (!isUser) {
        return res.send({ message: 'User not found' });
    }
    if (isUser.email === email && isUser.password === password) {
        return res.send({ message: 'Logged in successfully' });
    }
    else {
        return res.send({ message: 'Incorrect password' });
    }
};

module.exports = {
    signup,
    login
};