const authService = require('../services/auth');

exports.login = async (req, res) => {
    try {
        const result = await authService.authenticate(req, res);
        res.status(200).json(result); 
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};

exports.logout = (req, res) => {
    try {
        res.clearCookie('auth_token');
        return res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};