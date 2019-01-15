const express = require('express');

const config = require('./server/config');

const app = config(express());
require('./database');

app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto', app.get('port'));
});