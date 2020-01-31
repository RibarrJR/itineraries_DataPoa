const axios = require('axios').default;

module.exports = {
    async getBus(req, res) {
        await axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o')
                .then(function (response) {
                 res.send(response.data)
                })
                .catch(function (error) {
                  res.send({ error: error })
                });
    }
}