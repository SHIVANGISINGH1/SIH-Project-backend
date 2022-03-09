import 'dotenv/config'

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to mongoDB')
})

import Class from './models/class.js'
import Subject from './models/subject.js'
import Unit from './models/unit.js'
import Question from './models/question.js'
// questions ke array ki list req body
// findbyid -> question
// map questionStatement: x.questionStatement,
  //    options: x.options,

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


// Question.findById("622633e8aebd5e5fcc71ebf9").then(d => {
//     d.questionClass.push('6224f20ca7d4382a70265262')
//     d.questionSubject.push('6226142ec5f5f8a55491e58a')
//     d.questionUnit.push('6225cc6d80a36ccb15980dc9')
//     d.save();
// })

// Question.findById("622633e8aebd5e5fcc71ebf9").populate('questionClass').then(d => console.log(d))



// const q1 = new Question({
//   questionStatement: 'vue',
//   answer: 1,
//   options: [{ index: 0, statement: 'blala' }, { index: 1, statement: 'fdff' }, { index: 2, statement: 'fsdf' }, { index: 3, statement: 'sdff' }],
//   questionClass: 12,
//   questionSubject: 'Maths',
//   questionUnit: 'Atoms'
// })

// q1.save().then(d=>console.log(d));



const c1 = new Class({
    standard: 10
});

const c2 = new Class({
  standard: 12
});


// c1.save();
// c2.save();

const sub1 = new Subject({
  name: "abc"
})

const sub2 = new Subject({
  name: "dsds"
})

const sub3 = new Subject({
  name: "dsdsfggf"
})


const sub4 = new Subject({
  name: "trvfr"
})

const sub5 = new Subject({
  name: "rrrrer"
})



// sub1.save();
// sub2.save();
// sub3.save();
// sub4.save();
// sub5.save();



const u1 = new Unit({
  name: "rer",
  unitNumber: 1
})

const u2 = new Unit({
  name: "wer",
  unitNumber: 2
})


const u3 = new Unit({
  name: "mer",
  unitNumber: 3
})


const u4 = new Unit({
  name: "ops",
  unitNumber: 1
})



const u5 = new Unit({
  name: "sdfd",
  unitNumber: 2
})


const u6 = new Unit({
  name: "rerfgf",
  unitNumber: 3
})


const u7 = new Unit({
  name: "dsffdr",
  unitNumber: 1
})

const u8 = new Unit({
  name: "fghfd",
  unitNumber: 2
})

const u9 = new Unit({
  name: "erew",
  unitNumber: 3
})

const u10 = new Unit({
  name: "45fdgdfgr",
  unitNumber: 4
})

u1.save();
u2.save();
u3.save();
u4.save();
u5.save();
u6.save();
u7.save();
u8.save();
u9.save();
u10.save();


// Class.findById('622717556992c39907584c7a').populate('subjects').then(async (d) => {
//   d.subjects.push(sub1);
//   d.subjects.push(sub2);
//   d.subjects.push(sub3);
//   d.save();
//   console.log(d);
// })
// .catch(e => console.log(e))

// Class.findById('622717556992c39907584c7b').populate('subjects').then(async (d) => {
//   d.subjects.push(sub4);
//   d.subjects.push(sub5);
//   d.save();
// })


// Subject.findById('622717556992c39907584c7c').populate('units').then(async (d) => {
//   d.units.push(u1);
//   d.units.push(u2);
//   d.save();
//   console.log(d)
// })
// .catch(e => console.log(e))
