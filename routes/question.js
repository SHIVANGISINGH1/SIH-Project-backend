import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
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
})

router.get('/api/questions', async (req, res) => {
  if (!validateQuestionsQuery) {
    res.status(StatusCodes.BAD_REQUEST).end()
    return
  }
})

const questionRoute = router
export default questionRoute
