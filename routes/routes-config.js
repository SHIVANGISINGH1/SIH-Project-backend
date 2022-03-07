import contributeRoute from './contibute.js'
import infoRoute from './info.js'
import questionRoute from './question.js'

function configureRoutes(app) {
  app.use(contributeRoute)
  app.use(questionRoute)
  app.use(infoRoute)
}

export default configureRoutes
