import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  units: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Unit',
    },
  ],
  class: {
    type: mongoose.Types.ObjectId,
    ref: 'Class',
  },
})

const Subject = mongoose.model('Subject', subjectSchema)

export default Subject
