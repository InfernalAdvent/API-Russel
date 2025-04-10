const express = require('express');
const router = express.Router();
const catwaysController = require('../controllers/catwaysController');


router.get('/', catwaysController.getCatways);
router.get('/:id', catwaysController.getCatwayById);
router.post('/', catwaysController.addCatways);
router.put('/:id', catwaysController.updateCatwayState);
router.delete('/:id', catwaysController.deleteCatway);

module.exports = router;