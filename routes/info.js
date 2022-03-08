import { Router } from 'express'

const router = Router()

router.get('/api/info/standard', (req, res) => {
  // return all standards
})
router.get('/api/info/standard/:num', (req, res) => {
  // return the asked standard with populated subjects and unit
  console.log(req.params.num)
})

const infoRoute = router
export default infoRoute
