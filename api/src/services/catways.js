const Catway = require('../models/catway');

exports.getCatways = async () => {
    return await Catway.find();
};

exports.getCatwayById = async (id) => {
    return await Catway.findById(id);
};

exports.addCatway = async (data) => {
    const newCatway = new Catway(data);
    return await newCatway.save();
};

exports.updateCatwayState = async (id, state) => {
    return await Catway.findByIdAndUpdate(id, { catwayState: state }, { new: true });
};

exports.deleteCatway = async (id) => {
    return await Catway.findByIdAndDelete(id);
};