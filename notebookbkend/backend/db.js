const mongoose = require('mongoose');
const mongoUri = 'mongodb://0.0.0.0:27017/cloudBook'

async function connectToMongo() {
  await mongoose.connect(mongoUri).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
module.exports = connectToMongo;