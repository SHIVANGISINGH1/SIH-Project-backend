import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  questionStatement: {
    type: String,
    required: true,
  },
  answer: {
    type: Number,
  },
  options: [String],
  class: {
    type: mongoose.Types.ObjectId,
    ref: 'Class',
  },
  subject: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
  },
  unit: {
    type: mongoose.Types.ObjectId,
    ref: 'Unit',
  },
})

const Question = mongoose.model('Question', questionSchema)

export default Question
