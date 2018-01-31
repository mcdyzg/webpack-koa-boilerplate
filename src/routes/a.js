const Router = require('koa-router')
const View = require('../controllers/view')

const router = Router({
    prefix: '/a'
})

router.get('/',View.showA)

module.exports = router
