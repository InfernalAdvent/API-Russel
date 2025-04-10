const express = require('express');
const router = express.Router();

const service = require('../services/users');

router.get('/', service.getUsers);

router.get('/:email', service.getUserByEmail);

router.post('/', service.addUsers);

router.put('/:email', service.updateUser);

router.delete('/:email', service.deleteUser);

module.exports = router;
