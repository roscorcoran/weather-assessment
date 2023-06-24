const WeatherAccess = require('./weatherAccess');

async function getAllWeatherAccess() {
    let options = {};
    try {
        const weatherAccess = await WeatherAccess.find(options);
        return {
            success: true,
            data: weatherAccess,
        };
    } catch (err) {
        return { success: false, message: "Catchphrases not found" };
    }
}

async function addWeatherAccess(body) {
    const weatherAccess = new WeatherAccess(body);

    try {
        const newWeatherAccess = await weatherAccess.save();
        return {
            success: true,
            data: newWeatherAccess,
        };
    } catch (err) {
        return { success: false, message: "Failed to add weather access" };
    }
}

module.exports = {
    getAllWeatherAccess: getAllWeatherAccess,
    addWeatherAccess: addWeatherAccess,
}