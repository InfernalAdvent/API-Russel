const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key';

exports.authenticate = async (email, password) => {
    let user = await User.findOne({ email }, '-__v -createdAt -updatedAt');
    if (!user) {
        throw { status: 404, message: 'Utilisateur non trouvé' };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw { status: 403, message: 'Mot de passe incorrect' };
    }

    const { password: _, ...userWithoutPassword } = user._doc;

    const token = jwt.sign({ user: userWithoutPassword }, JWT_SECRET, { expiresIn: '1h' });

    return {
        user: userWithoutPassword,
        token
    };
};