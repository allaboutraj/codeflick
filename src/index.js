const express = require('express');
const bodyParser = require('body-parser');
const BaseError = require('./errors/base.error');
// const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./utils/errorHandler');

const {PORT} =  require('./config/server.config');


const apiRouter = require('./routes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message: 'Ping Service is alive'});
});

//last Middleware if any error come
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);

});