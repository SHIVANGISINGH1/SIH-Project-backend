import 'dotenv/config'

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to mongoDB')
})

import Class from './models/class.js'
import Subject from './models/subject.js'
import Unit from './models/unit.js'
import Question from './models/question.js'


// const inp = Class.insertMany([{
//     standard: 10,
//     subjects: []
// }, {
//     standard: 10,
//     subjects: []
// }, {
//     standard: 10,
//     subjects: []
// }]).then(d => console.log(d))
// .catch(err => console.log(err))
// async function make() {
//   const c1 = new Class({
//     standard: 10,
//     subjects: []
//   })

//   await c1.save().then(d => console.log(d))
//     .catch(err => console.log(err))
// }

// make();

// const c2 = new Class({
//   standard: 12,
//   subjects: []
// })


  // const q1 = new Question({
  //   questionStatement: 'What is binding energy',
  //   answer: 0,
  //   options: [{ index: 0, statement: 'blala' }, { index: 1, statement: 'fdff' }, { index: 2, statement: 'fsdf' }, { index: 3, statement: 'sdff' }]
  // })

  // q1.save()


  // const s1 = new Subject({
  //   name: 'Maths',
  //   units: []
  // })

  // s1.save()

  // const u1 = new Unit({
  //   name: 'Atoms',
  //   unitNumber: 12,
  //   questions: []
  // })
  // u1.save()

  Subject.findById('6225c8d0a99a3ee36ef28edb').populate('units').then(async d => {
  console.log(d)
        
  })
  .catch(err => console.log(err))







