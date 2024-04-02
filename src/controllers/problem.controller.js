const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');


function pingProblemController(req, res) {
    return res.json({ message : 'Ping Controller is up'});
}


function addProblem(req, res){
    // return res.status(StatusCodes.NOT_IMPLEMENTED).json({ 
    //     message : 'Not Implemented'
    // });

    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}