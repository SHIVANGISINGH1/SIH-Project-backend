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
  Class: {
    type: mongoose.Types.ObjectId,
    ref: 'Class',
  },
  Subject: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
  },
  Unit: {
    type: mongoose.Types.ObjectId,
    ref: 'Unit',
  },
})

const Question = mongoose.model('Question', questionSchema)

export default Question
