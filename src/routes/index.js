const Router = require('koa-router')
const View = require('../controllers/view')
const a = require('./a')

const router = Router()

const routes = [a]

for (route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

router.get("/", View.show);

module.exports = router
