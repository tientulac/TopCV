const Repository = require('../repositories/repository');
const userJob = require('../models/inputModels/user_job');

module.exports = new class extends Repository {
    async RfindById(id) {
        return userJob.findById({ _id: id }).lean();
    }
    async Rfind() {
        return userJob.find().lean();
    }
    async RfindOne(req) {
        return userJob.findOne(req).lean();
    }
    async RinsertOne(req) {
        return userJob.create(req).then();
    }
    async RdeleteOne(id) {
        return userJob.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return userJob.findByIdAndUpdate(id, { $set: req }).lean();
    }
}