require('babel-polyfill')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const views = require('koa-views')
const session = require('koa-session')
const MongoStore = require('koa-session-mongo2')

const router = require('./routes')
const config = require('../config')
const { addSessionHelper, runClockMission } = require('./helpers')

const app = new Koa()

app.use(logger())

app.use(bodyParser({}))

let path = process.env.NODE_ENV ? config.view_path : __dirname + '/views'
app.use(
	views(path, {
		map: {
			html: 'lodash',
		},
	}),
)

global.models = require('./models')

app.use(
	session(
		{
			store: new MongoStore(config.sessionURL),
			signed: false,
			// cookie过期时间，由浏览器负责到时清除，单位毫秒
			maxAge: 24 * 60 * 60 * 1000,
		},
		app,
	),
)

app.use(router.routes(), router.allowedMethods())

// runClockMission()

console.log('启动端口：', config.port)

app.listen(config.port)
