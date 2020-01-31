

const axios = require('axios').default;

module.exports = {
    async getItinerarie(req, res) {
        await axios.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${req.params.id}`)
            .then(function (response) {
                res.send(response.data)
            })
            .catch(function (error) {
                res.send({ error: error })
            });
    }
}