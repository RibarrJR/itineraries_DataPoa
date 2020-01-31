const axios = require('axios').default;

module.exports = {
    async getLotacao(req, res) {
        await axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l')
                .then(function (response) {
                 res.send(response.data)
                })
                .catch(function (error) {
                  res.send({ error: error })
                });
    }
}