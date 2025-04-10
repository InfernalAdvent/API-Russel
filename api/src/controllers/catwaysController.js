const catwayService = require('../services/catways')

exports.getCatways = async (req, res) => {
    try {
        const catways = await catwayService.getCatways();
        res.status(200).json(catways);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCatwayById = async (req, res) => {
    try {
        const catway = await catwayService.getCatwayById(req.params.id);
        if (!catway) return res.status(404).json({ message: 'Catway non trouvée' });
        res.status(200).json(catway);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addCatways = async (req, res) => {
    try {
        const newCatway = await catwayService.addCatway(req.body);
        res.status(201).json(newCatway);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCatwayState = async (req, res) => {
    try {
        const updatedCatway = await catwayService.updateCatwayState(req.params.id, req.body.catwayState);
        if (!updatedCatway) return res.status(404).json({ message: 'Catway non trouvée' });
        res.status(200).json(updatedCatway);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCatway = async (req, res) => {
    try {
        const deletedCatway = await catwayService.deleteCatway(req.params.id);
        if (!deletedCatway) return res.status(404).json({ message: 'Catway non trouvée' });
        res.status(200).json({ message: 'Catway supprimée' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};