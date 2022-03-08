import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import Class from '../models/class.js'

const router = Router()

router.get('/api/info/standard', async (req, res) => {
  // return all standards
  try {
    const t = await Class.find().exec()
    res
      .json({
        standards: t.map((x) => {
          return { id: x.id, standard: x.standard }
        }),
      })
      .status(StatusCodes.OK)
      .end()
  } catch (error) {
    console.error(error.message)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
  }
})

router.get('/api/info/standard/:num', async (req, res) => {
  // return the asked standard with populated subjects and unit
  console.log(req.params.num)
  try {
    console.log(
      await Class.findOne({ standard: req.params.num })
      //   .populate('subjects')
    )
    const t = await Class.findOne({
      standard: req.params.num,
    }).populate({
      path: 'subjects',
      populate: {
        path: 'units',
      },
      //   path: 'subjects.units',
    })
    res.send(t)
  } catch (error) {
    console.error(error.message)
  }
})

router.get('/api/info/subjects', (req, res) => {})

router.get('/api/info/units', (req, res) => {})

const infoRoute = router
export default infoRoute
