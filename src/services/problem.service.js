const sanitizeMarkdownContent = require('../utils/markdownSanitizer');


class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try {
            //1. Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("Problem Data",problemData)
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("Problem Created", problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;


//Business Logic Inside Service Layer