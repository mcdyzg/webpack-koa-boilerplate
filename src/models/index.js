const mongoose = require('mongoose')
const { mongoUri,mongoUriParam} = require('../../config')

mongoose.Promise = global.Promise

const conn = mongoose.createConnection(`${mongoUri}/fenxiao?${mongoUriParam}`)

console.log('models')

const db = {};

const industry = require('./industry')

const models = [
    industry,
]

for (model of models) {
    const newSchema = new mongoose.Schema(typeof model.schema === 'function'&& model.schema(mongoose.Schema) || model.schema, { collection: model.name });
    db[model.name] = conn.model(model.name, newSchema);
}

module.exports = db;
