const express = require('express');
const router = express.Router();
let { getAllWeatherAccess } = require('./weatherAccessController')


/**
 * @swagger
 * /weather-access:
 *   get:
 *     description: All weather access
 *     responses:
 *       200:
 *         description: Returns all the weather access
 */
router.get('/', async (req, res) => {
    let response = await getAllWeatherAccess();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = router;