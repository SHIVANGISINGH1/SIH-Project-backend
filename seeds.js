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


//     const s2 = new Subject({
//         name: 'Physics',
//         units: []
//     })

//     s2.save()

//   const u2 = new Unit({
//     name: 'Nuclie',
//     unitNumber: 12,
//     questions: []
//   })
//   u2.save()

//const val = Unit.findById("6225cc6d80a36ccb15980dc9").then(d => console.log(d));


// Subject.findById("6226142ec5f5f8a55491e58a").then(async d => {
//     d.units.push("6225cc6d80a36ccb15980dc9")
//     d.save();
//     //console.log(d.units);
// });
// //console.log(v);

// Subject.findById("6226142ec5f5f8a55491e58a")
// .populate('units').
// then(async d => {
//   console.log(d)
        
// })
// .catch(err => console.log(err))




// Unit.findById('6225cc6d80a36ccb15980dc9').then(d => {
//     d.questions.push('6225c8d0a99a3ee36ef28ed6');
//     d.save();
// })

// Unit.findById('6225cc6d80a36ccb15980dc9').populate('questions').then(async d=> {
//     console.log(d)
// })
// .catch(err => console.log(d))


// Class.findById('6224f20ca7d4382a70265262').then(d => {
//     d.subjects.push('6226142ec5f5f8a55491e58a');
//     d.save();
// })

// Class.findById('6224f20ca7d4382a70265262').populate('subjects').then(async d=> {
//     console.log(d)
// })
// .catch(err => console.log(d))


// const Q1 = new Question({
//     questionStatement: 'What is what',
//     answer: 0,
//     options: [{ index: 0, statement: 'blala' }, { index: 1, statement: 'fdff' }, { index: 2, statement: 'fsdf' }, { index: 3, statement: 'sdff' }],
//     questionClass: [],
//     questionSubject: [],
//     questionUnit: []
// })

// Q1.save().then(d => console.log(d))
// .catch(err => console.log(err))


Question.findById("622633e8aebd5e5fcc71ebf9").then(d => {
    d.questionClass.push('6224f20ca7d4382a70265262')
    d.questionSubject.push('6226142ec5f5f8a55491e58a')
    d.questionUnit.push('6225cc6d80a36ccb15980dc9')
    d.save();
})

Question.findById("622633e8aebd5e5fcc71ebf9").populate('questionClass').then(d => console.log(d))
