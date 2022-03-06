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
async function make() {
    const c1 = new Class({
        standard: 10,
        subjects: []
    })

    await c1.save().then(d => console.log(d))
.catch(err => console.log(err))
}

make();










