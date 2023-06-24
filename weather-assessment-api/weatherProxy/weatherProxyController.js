const axios = require('axios');
const {addWeatherAccess} = require("../weatherAccess/weatherAccessController");

const zip = (a, b, c, d, e) => a.map((k, i) => ({
    time: k,
    weathercode: b[i],
    temperature_2m_max: c[i],
    temperature_2m_min: d[i],
    precipitation_sum: e[i],
}));

async function getAllWeatherProxy(reqParams) {
    // Take the params received in the request and map them to the new url
    let axiosOptions = {params: {latitude: reqParams.lat, longitude: reqParams.lng}};

    try {
        const url = 'https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=GMT';
        const res = await axios.get(url, axiosOptions);
        // Preform data transformation to make the objects easier to read and parse on the frontend.
        let data = res.data;
        let daily = data.daily;
        let zipped = zip(daily.time, daily.weathercode, daily.temperature_2m_max, daily.temperature_2m_min, daily.precipitation_sum)
        data.daily = zipped;

        //Log the access to this endpoint
        let fullRequestUrl = axios.getUri({url, params: axiosOptions.params});
        let body = {
            url: fullRequestUrl,
        };
        addWeatherAccess(body);

        return {
            success: true,
            data: res.data,
        };
    } catch (err) {
        return {success: false, message: "Weather not found: " + err.message};
    }
}

module.exports = {
    getAllWeatherProxy: getAllWeatherProxy,
}