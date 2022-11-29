const Repository = require('../repositories/repository');
const documentCV = require('../models/inputModels/documentCV');

module.exports = new class extends Repository {
    async RfindById(id) {
        return documentCV.findById({ _id: id }).lean();
    }
    async Rfind() {
        return documentCV.find().lean();
    }
    async RfindOne(req) {
        return documentCV.findOne(req).lean();
    }
    async RinsertOne(req) {
        return documentCV.create(req).then();
    }
    async RfindMany(req) {
        return documentCV.find(req).then();
    }
    async RdeleteOne(id) {
        return documentCV.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return documentCV.findByIdAndUpdate(id, { $set: req }).lean();
    }
}