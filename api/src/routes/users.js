const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/**
 * @module routes/users
 */

/**
 * @name Get Users
 * @route GET /users
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - Liste des utilisateurs
 */
router.get('/', userController.getUsers);

/**
 * @name Get User by Email
 * @route GET /users/:email
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - L'utilisateur sélectionné par son email
 */
router.get('/:email', userController.getUserByEmail);

/**
 * @name Add User
 * @route POST /users
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - L'utilisateur ajouté
 */
router.post('/', userController.addUsers);

/**
 * @name Update User
 * @route PUT /users/:email
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - L'utilisateur modifié
 */
router.put('/:email', userController.updateUser);

/**
 * @name Delete User
 * @route DELETE /users/:email
 * @function
 * @param {Object} req - Requête Express
 * @param {Object} res - Réponse Express
 * @returns {Object} - L'utilisateur supprimé
 */
router.delete('/:email', userController.deleteUser);

module.exports = router;