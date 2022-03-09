import { renderFile } from 'ejs'
import { render } from 'ejs'
import { Router } from 'express'
import { create } from 'html-pdf'
import { createReadStream } from 'node:fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import Question from '../models/question.js'
const __dirname = dirname(fileURLToPath(import.meta.url))

const router = Router()

router.get('/api/generate/question-paper', async (req, res) => {
  res.header('Content-Type: application/pdf')

  const { questionArr } = req.body

  const questions = questionArr.map((q) => {
    return await Question.findById(q).exec()
  })

  const x = questions.map((x) => {
    return {
      questionStatement: x.questionStatement,
      options: x.options,
    }
  })

  const html = await renderFile(
    __dirname + '/../views/question-paper.ejs',
    {
      check: 'name',
      questions: x,
    },
    { async: true }
  )
  create(html, { format: 'A4' }).toStream((err, stream) => {
    stream.pipe(res)
  })
})

router.get('/api/generate/answer-key', async (req, res) => {
  res.header('Content-Type: application/pdf')

  const x = (await Question.find()).map((x) => {
    return {
      questionStatement: x.questionStatement,
      options: x.options,
    }
  })
  const html = await renderFile(
    __dirname + '/../views/question-paper.ejs',
    {
      check: 'name',
      questions: x,
    },
    { async: true }
  )
  create(html, { format: 'A4' }).toStream((err, stream) => {
    stream.pipe(res)
  })
})

const generatePDF = router
export default generatePDF
