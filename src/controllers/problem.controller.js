const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services')
const { ProblemRepository} = require('../repositories')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ message : 'Ping Controller is up'});
}


async function addProblem(req, res, next) {
    try {
        console.log("Incoming Request Body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message : 'Successfully Created a new Problem',
            error: {},
            data: newproblem 
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}
async function getProblems(req, res, next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message : 'Successfully Fetched the Problem',
            error: {},
            data: response 
        });
    } catch (error) {
        next(error);
    }
}


function deleteProblem(req, res, next){
    try {
        //nothing Implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res , next){
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