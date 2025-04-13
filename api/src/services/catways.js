const Catway = require('../models/catway');

exports.getCatways = async () => {
    try {
        const catways = await Catway.find();
        if (!catways) {
            throw new Error('Aucun catway trouvé');
        }
        return catways;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération des catways : ${error.message}`);
    }
};

exports.getCatwayByCatwayNumber = async (catwayNumber) => {
    try {
        const catway = await Catway.findOne({ catwayNumber });
        if (!catway) {
            throw new Error(`Catway avec le numéro ${catwayNumber} non trouvé`);
        }
        return catway;
    } catch (error) {
        throw new Error(`Erreur lors de la récupération du catway : ${error.message}`);
    }
};

exports.addCatway = async (data) => {
    try {
        const newCatway = new Catway(data);
        const savedCatway = await newCatway.save();
        return savedCatway;
    } catch (error) {
        throw new Error(`Erreur lors de la création du catway : ${error.message}`);
    }
};

exports.updateCatwayState = async (catwayNumber, state) => {
    try {
        const updatedCatway = await Catway.findOneAndUpdate({catwayNumber: catwayNumber}, { catwayState: state }, { new: true });
        if (!updatedCatway) {
            throw new Error(`Catway avec l'ID ${id} non trouvé`);
        }
        return updatedCatway;
    } catch (error) {
        throw new Error(`Erreur lors de la mise à jour de l'état du catway : ${error.message}`);
    }
};

exports.deleteCatway = async (catwayNumber) => {
    try {
        const deletedCatway = await Catway.findOneAndDelete({ catwayNumber });
        if (!deletedCatway) {
            throw new Error(`Catway avec le numéro ${catwayNumber} non trouvé`);
        }
        return deletedCatway;
    } catch (error) {
        throw new Error(`Erreur lors de la suppression du catway : ${error.message}`);
    }
};