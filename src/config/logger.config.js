const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
const path = require('path');
require('winston-mongodb');

const allowedTransports = [];

//Below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({  //making sure we are configuring console based logger
    format: winston.format.combine(
        winston.format.colorize(),
        // winston.format.simple()
        //1st Argument to the combine method defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        //2nd metod which define what is excatly going to be printed in the log
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
    )
})) 

//Below transport configuration enables logging in MOngoDB DataBase
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}))

//Below transport configuration enables logging in the file
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    //Default Formatting
    format: winston.format.combine(
        //1st Argument to the combine method defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        //2nd metod which define what is excatly going to be printed in the log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;
