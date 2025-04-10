const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key';

exports.authenticate = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email }, '-__v -createdAt -updatedAt');
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        // Comparaison du mot de passe avec bcrypt
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(403).json({ error: 'Mot de passe incorrect' });
        }

        // Création du JWT, en excluant le mot de passe
        const { password: _, ...userWithoutPassword } = user._doc;

        const token = jwt.sign({ user: userWithoutPassword }, JWT_SECRET, { expiresIn: '1h' });

        res.cookie('auth_token', token, {
            httpOnly: true,      // (inaccessible côté client)
            secure: process.env.NODE_ENV === 'production', // 'true' si HTTPS est activé
            maxAge: 24 * 60 * 60 * 1000,     // (1 heure)
            sameSite: 'Strict',  // Le cookie ne sera jamais envoyé si l'utilisateur arrive sur le domaine depuis un autre site
        });

        // Ajouter le token dans l'en-tête Authorization
        res.header('Authorization', 'Bearer ' + token);

        // Réponse de succès
        return { message: 'Authentification réussie', token };  // On renvoie juste un objet, sans envoyer de réponse encore ici
    } catch (error) {
        console.error('Erreur lors de l\'authentification:', error);
        // Laisser l'erreur être gérée par le catch du controller
        throw error;
    }
};