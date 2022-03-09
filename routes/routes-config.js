import contributeRoute from './contibute.js'
import infoRoute from './info.js'
import generatePDF from './pdf-generate.js'
import questionRoute from './question.js'

function configureRoutes(app) {
  app.use(contributeRoute)
  app.use(questionRoute)
  app.use(infoRoute)
  app.use(generatePDF)
}

export default configureRoutes
