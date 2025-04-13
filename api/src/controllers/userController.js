const userService = require('../services/users');

// Créer un utilisateur
exports.addUsers = async (req, res) => {
    try {
        const newUser = await userService.addUsers(req.body);
        return res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }

        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Erreur de validation', details: error.errors });
        }

        console.error(error);
        return res.status(500).json({ error: 'Erreur interne lors de la création de l\'utilisateur' });
    }
};

// Récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Récupérer un utilisateur avec son email
exports.getUserByEmail = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur', details: err });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.email, req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: 'Utilisateur introuvable' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.email);
        if (deletedUser.deletedCount === 0) {
            return res.status(404).json({ error: 'Utilisateur introuvable' });
        }
        res.status(200).json({ message: 'Utilisateur supprimé' });
    } catch (err) {
        res.status(500).json(err);
    }
};