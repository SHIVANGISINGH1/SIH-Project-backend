import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Question from '../models/Question.js'
import Unit from '../models/Unit.js'
import {
  validateQuestion,
  validateQuestionsQuery,
} from '../utils/requestValidation.js'

const router = Router()

router.get('/api/question', async (req, res) => {
  if ('id' in req.body) {
    res.send().status(StatusCodes.OK).end()
    return
  }
  res.status(StatusCodes.BAD_REQUEST).end()
})

router.post('/api/question', async (req, res) => {
  if (!validateQuestion(req.body)) {
    res.status(StatusCodes.BAD_REQUEST).end()
    return
  }
  try {
    const unit = await Unit.findById(req.body.unitId).exec()
    const newQuestion = new Question({
      questionStatement: req.body.questionStatement,
      answer: req.body.answer,
      options: req.body.options,
    })
    const newQuestionId = (await newQuestion.save()).id
    unit.questions.push(newQuestionId)
    unit.save()
    res.send({ newQuestionId }).status(StatusCodes.CREATED).end()
  } catch (error) {
    console.error(error.message)
    res.status(StatusCodes.BAD_REQUEST).end()
  }
})

router.get('/api/questions', async (req, res) => {
  if (!validateQuestionsQuery) {
    res.status(StatusCodes.BAD_REQUEST).end()
    return
  }
})

const questionRoute = router
export default questionRoute
