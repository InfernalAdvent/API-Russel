const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = new Schema({
    username: {
        type    : String,
        trim    : true,
        required: [true, 'Le nom est requis']
    },
    email: {
        type : String,
        trim: true,
        required: [true, `L'email est requis`],
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'le mot de passe est requis'],
        minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères']
    }
}, {
    timestamps: true
});

User.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);