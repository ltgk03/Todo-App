const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    id: { type: Number, required: true, max: 100 },
    task: { type: String, required: true, max: 1000 },
    status: { type: Boolean, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);
