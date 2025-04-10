const User = require('../models/user');

exports.addUsers = async (req, res, next) => {

    const temp = ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        let user = await User.create(temp);

        return res.status(201).json(user);

    } catch (error) {
        // Gestion d'un email déjà utilisé
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }

        // Gestion d'une erreur de validation mongoose 
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Erreur de validation', details: error.errors });
        }

        console.error(error);
        return res.status(500).json({ error: 'Erreur interne lors de la création de l\'utilisateur' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getUserByEmail = async (req, res) => {
    const email = req.params.email
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(501).json(err);
    }
};

exports.updateUser = async (req, res, next) => {
    const email = req.params.email
    const temp = ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        let user = await User.findOne({ email : email })
        if (user) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    user[key] = temp[key];
                }
            });

            await user.save()
            return res.status(201).json(user);
    }
    return res.status(404).json ('Utilisateur introuvable');
} catch (err) {
    return res.status(501).json(err);
}
}

exports.deleteUser = async (req, res, next) => {
    const email = req.params.email

    try {
        await User.deleteOne ({ email: email })

        return res.status(204).json('Utilisateur supprimé')
    } catch (err) {
        return res.status(501).json(err);
    }
}