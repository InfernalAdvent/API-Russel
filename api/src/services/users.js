const User = require('../models/user');

// Créer un utilisateur
exports.addUsers = async (data) => {
    const temp = {
        username: data.username,
        email: data.email,
        password: data.password
    };
    return await User.create(temp);
};

// Récupérer tous les utilisateurs
exports.getUsers = async () => {
    return await User.find();
};

// Récupérer un utilisateur par email
exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Mettre à jour un utilisateur
exports.updateUser = async (email, data) => {
    const user = await User.findOne({ email });
    if (!user) return null;

    Object.keys(data).forEach((key) => {
        if (data[key]) {
            user[key] = data[key];
        }
    });

    await user.save();
    return user;
};

// Supprimer un utilisateur
exports.deleteUser = async (email) => {
    return await User.deleteOne({ email });
};