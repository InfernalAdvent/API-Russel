const express = require('express');
const router = express.Router();
const catwaysController = require('../controllers/catwaysController');
const reservationsRouter = require('./reservations');


router.get('/', catwaysController.getCatways);
router.get('/:id', catwaysController.getCatwayByCatwayNumber);
router.post('/', catwaysController.addCatways);
router.put('/:id', catwaysController.updateCatwayState);
router.delete('/:id', catwaysController.deleteCatway);

router.use('/:id/reservations', reservationsRouter);

module.exports = router;