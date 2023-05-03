const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user");
db.history = require("./history");
db.tool = require("./tool");

module.exports = db;