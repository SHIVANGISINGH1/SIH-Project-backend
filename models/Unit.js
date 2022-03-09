import mongoose from 'mongoose'

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Question',
    },
  ],
  class: {
    type: mongoose.Types.ObjectId,
    ref: 'Class',
  },
  subject: {
    type: mongoose.Types.ObjectId,
    ref: 'Subject',
  },
})

const Unit = mongoose.model('Unit', unitSchema)

export default Unit
