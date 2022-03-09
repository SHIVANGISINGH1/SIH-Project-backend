import { Router } from 'express'
import { create } from 'html-pdf'
import { createReadStream } from 'node:fs'
import { dirname } from 'node:path'

const router = Router()

router.get('/api/generate/question-paper', (req, res) => {
  res.header('Content-Type: application/pdf')
  create('<h1>' + Date.now().toLocaleString() + '<h1>').toStream(
    (err, stream) => {
      stream.pipe(res)
    }
  )
})

router.get('/api/generate/answer-key', (req, res) => {})

const generatePDF = router
export default generatePDF
