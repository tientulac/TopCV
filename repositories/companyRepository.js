const Repository = require('../repositories/repository');
const company = require('../models/inputModels/company');

module.exports = new class extends Repository {
    async RfindById(id) {
        return company.findById({ _id: id }).lean();
    }
    async Rfind() {
        return company.find().lean();
    }
    async RfindOne(req) {
        return company.findOne(req).lean();
    }
    async RinsertOne(req) {
        return company.create(req).then();
    }
    async RdeleteOne(id) {
        return company.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return company.findByIdAndUpdate(id, { $set: req }).lean();
    }
}