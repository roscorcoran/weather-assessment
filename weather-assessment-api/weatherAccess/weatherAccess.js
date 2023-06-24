const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;

const weatherSchema = new Schema({
    url: {
        type: String,
    },
}, { timestamps: true });

const WeatherAccess = mongoose.model('weather', weatherSchema);

module.exports = WeatherAccess;