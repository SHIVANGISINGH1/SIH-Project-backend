import mongoose from 'mongoose'


const questionSchema = new mongoose.Schema({
    
    questionStatement: {
        type: String,
        required: true
    },

    answer: {
        type: Number
    },

    options: {
        type: Number
    }
})

const Question = mongoose.model('Question' , questionSchema);

export default Question;