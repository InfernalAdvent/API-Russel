const authService = require('../services/auth');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { token, user } = await authService.authenticate(email, password);

        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: 'Strict',
        });

        res.header('Authorization', 'Bearer ' + token);

        res.status(200).json({
            message: 'Authentification réussie',
            token,
            user
        });
    } catch (error) {
        console.error('Erreur d\'authentification:', error);
        res.status(error.status || 500).json({ error: error.message || 'Erreur interne' });
    }
};

exports.logout = (req, res) => {
    try {
        res.clearCookie('auth_token');
        res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        res.status(error.status || 500).json({ error: error.message || 'Erreur interne' });
    }
};