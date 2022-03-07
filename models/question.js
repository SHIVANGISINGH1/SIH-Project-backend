import mongoose from 'mongoose'


const questionSchema = new mongoose.Schema({
    
    questionStatement: {
        type: String,
        required: true
    },

    answer: {
        type: Number
    },

    options:[ {
        index: {
            type: Number
        },
        statement: {
            type: String
        }
    }]
})

const Question = mongoose.model('Question' , questionSchema);

export default Question;