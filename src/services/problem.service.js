const sanitizeMarkdownContent = require('../utils/markdownSanitizer');


class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try {
            //1. Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(problemId){
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

    async updateProblem(id , updatedData){
        try {
            //1. Sanitize the markdown for description
            if(updatedData.description){
                updatedData.description = sanitizeMarkdownContent(updatedData.description);
            };
            const updatedProblem = await this.problemRepository.updateProblem(id , updatedData);
            console.log(updatedProblem);
            return updatedProblem;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProblemService;


//Business Logic Inside Service Layer