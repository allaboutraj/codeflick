const { Problem } = require("../models");
const NotFound = require("../errors/notfound.error");
// const logger = require('../config/logger.config');
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deleteProblem = await Problem.findByIdAndDelete(id);
      if (!deleteProblem) {
        // logger.error(`Problem.Repository: DeleteMethod - Problem with id : ${id} not found in DB`)
        throw new NotFound("Problem", id);
      }
      return deleteProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, updatedData) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      if (!updatedProblem) {
        throw new NotFound("Problem", id);
      }
      return updatedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
