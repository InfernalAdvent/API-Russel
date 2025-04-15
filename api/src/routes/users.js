const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


/**
 * @module routes/users
 */

/**
 * Récupère la liste de tous les utilsateurs 
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/', userController.getUsers);
/**
 * Récupère un utilisateur avec son email
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.get('/:email', userController.getUserByEmail);
/**
 * Ajoute un nouvel utilisateur
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.post('/', userController.addUsers);
/**
 * Modifie un utilisateur
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.put('/:email', userController.updateUser);
/**
 * Supprime un utilisateur
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Requête Express
 */
router.delete('/:email', userController.deleteUser);

module.exports = router;
