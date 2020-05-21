const express = require('express');
const apiVeiculos = require('sinesp-api');

const app = express();

app.get('/veiculo/:placa', (req, res) => {
    const { placa } = req.params;
    apiVeiculos.search(placa)
        .then(data => res.send(data))
        .catch(() => res.send('Ocorreu um erro ao consultar o veículo.'))
})

app.listen(3000, () => console.log('Serviço disponível'));