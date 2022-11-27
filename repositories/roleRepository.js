const Repository = require('../repositories/repository');
const role = require('../models/inputModels/role');

module.exports = new class extends Repository {
    async RfindById(id) {
        return role.findById({ _id: id }).lean();
    }
    async Rfind() {
        return role.find().lean();
    }
    async RfindOne(req) {
        return role.findOne(req).lean();
    }
    async RinsertOne(req) {
        return role.create(req).then();
    }
    async RdeleteOne(id) {
        return role.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return role.findByIdAndUpdate(id, { $set: req }).lean();
    }
}