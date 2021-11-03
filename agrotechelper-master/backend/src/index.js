const expres = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const HOST ='0.0.0.0'
const PORT = 3333;
const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);
app.use(errors());

app.listen(PORT, HOST);