const Repository = require('../repositories/repository');
const job = require('../models/inputModels/job');

module.exports = new class extends Repository {
    async RfindById(id) {
        return job.findById({ _id: id }).lean();
    }
    async Rfind() {
        return job.find().lean();
    }
    async RfindOne(req) {
        return job.findOne(req).lean();
    }
    async RinsertOne(req) {
        return job.create(req).then();
    }
    async RdeleteOne(id) {
        return job.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return job.findByIdAndUpdate(id, { $set: req }).lean();
    }
}