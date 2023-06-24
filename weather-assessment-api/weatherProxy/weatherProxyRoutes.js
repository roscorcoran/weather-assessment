const express = require('express');
const router = express.Router();
let { getAllWeatherProxy } = require('./weatherProxyController')

/**
 * @swagger
 * /weatherproxy:
 *   get:
 *     description: All weather proxy
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: integer
 *         description: The Latitude
 *       - in: query
 *         name: lng
 *         schema:
 *           type: integer
 *         description: The Longitude
 *     responses:
 *       200:
 *         description: Returns all the weather proxy
 */
router.get('/', async (req, res) => {

    let response = await getAllWeatherProxy(req.query);
    //TODO Not to be in prod - .env
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = router;