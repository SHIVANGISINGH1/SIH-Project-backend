import 'dotenv/config'

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log('Connected to mongoDB')
})

import Class from './models/Class.js'
import Subject from './models/Subject.js'
import Unit from './models/Unit.js'
import Question from './models/Question.js'
//
async function addSubject(classid, subjectname) {
  const s = await new Subject({
    name: subjectname,
    class: classid,
    units: [],
  }).save()
  const c = await Class.findById(classid).exec()
  console.log(s)
  c.subjects.push(s.id)
  c.save()
}
async function addUnit(classid, subjectid, unitname) {
  const u = await new Unit({
    name: unitname,
    class: classid,
    questions: [],
    subject: subjectid,
  }).save()
  console.log(u)
  const s = await Subject.findById(subjectid).exec()
  s.units.push(u.id)
  s.save()
}
async function addQuestion(
  classid,
  subjectid,
  unitId,
  questionStatement,
  options
) {}
;(async () => {
  // const subs = ['Mathematics', 'Science', 'Social Science']
  // subs.forEach((x) => {
  //   addSubject('62290180265fc13323cbdf70', x)
  // })
  // const units = [
  //   'India and the Contemporary World - II',
  //   'II Contemporary India - II',
  //   'III Democratic Politics - II',
  //   'IV Understanding Economic Development',
  // ]
  // units.forEach((x) => {
  //   addUnit('62290180265fc13323cbdf70', '62290219e4030b5dc1712f18', x)
  // })
})()
