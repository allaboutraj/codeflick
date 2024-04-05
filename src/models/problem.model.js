const mongoose = require('mongoose');
const problemSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: [true, 'Title should not be empty']
    },
    description:{
        type: 'string',
        required: [true, 'Description can not be empty']
    },
    difficulty:{
        type: 'string',
        enum: ['easy' , 'medium', 'hard'],
        required: [true, 'Difficulty can not be empty'],
        default: 'easy'
    },
    testCases:[
        {
            input:{
                type: 'string',
                required: true
            },
            output:{
                type: 'string',
                required: true
            }
        }
    ],
    editorial:{
        type: 'string',
    }
});

const Problem = mongoose.model('Problem' , problemSchema);

module.exports = Problem;


/**
 * [{input : '5', output: '10'}, {input : '15', output: '30'}]
 * 
 * 5\n
 * 2 3 5 6 8\n
 * 15
 */