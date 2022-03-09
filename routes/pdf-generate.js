import { renderFile } from 'ejs'
import { render } from 'ejs'
import { Router } from 'express'
import { create } from 'html-pdf'
import { createReadStream } from 'node:fs'

const router = Router()

router.get('/api/generate/question-paper', async (req, res) => {
  //   res.header('Content-Type: application/pdf')
  const html = await renderFile(
    '/home/volcano/P/sih-22/SIH-Project-backend/views/question-paper.ejs',
    {
      check: 'name',
    },
    { async: true }
  )
  create(html).toStream((err, stream) => {
    stream.pipe(res)
  })
})

router.get('/api/generate/answer-key', (req, res) => {})

const generatePDF = router
export default generatePDF
