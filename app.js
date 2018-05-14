/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/development.js":
/*!*******************************!*\
  !*** ./config/development.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var port = Number.parseInt(Object({\"NODE_ENV\":\"development\"}).PORT) || 6060;\nvar mongoUri = 'mongodb://root:COP2GDjacBLjLPMVSqD774sIDusILa@47.98.157.202:3717';\n\nmodule.exports = {\n\tport: port,\n\tmongoUri: mongoUri,\n\tmongoUriParam: 'authSource=admin',\n\t// 存放session的库和表配置\n\tsessionURL: {\n\t\turl: mongoUri + '/fenxiao_user?authSource=admin&poolSize=5',\n\t\tcollection: 'sessions',\n\t\t// 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位\n\t\tmaxAge: 24 * 60 * 60\n\t},\n\t// 引用资源的cdn路径\n\tcdnHostName: 'https://cdn.bootcss.com/',\n\t// 打包完成发布上线的cdn前缀\n\tjsVersion: 'https://cdn.bootcss.com/',\n\tview_path: './'\n};\n\n//# sourceURL=webpack:///./config/development.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var development = __webpack_require__(/*! ./development */ \"./config/development.js\");\nvar production = __webpack_require__(/*! ./production */ \"./config/production.js\");\n\nvar env = \"development\" || 'development';\n\nvar configs = {\n    development: development,\n    production: production\n};\n\nvar defaultConfig = {\n    env: env\n};\n\nvar config = Object.assign({}, defaultConfig, configs[env]);\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./config/production.js":
/*!******************************!*\
  !*** ./config/production.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var port = Number.parseInt(Object({\"NODE_ENV\":\"development\"}).PORT) || 6060;\nvar mongoUri = '';\n\nmodule.exports = {\n    port: port,\n    mongoUri: mongoUri,\n    mongoUriParam: 'authSource=admin',\n    sessionURL: {\n        url: mongoUri + '/fenxiao_user?authSource=admin&poolSize=5',\n        collection: 'sessions'\n    },\n    cdnHostName: 'https://cdn.bootcss.com/',\n    jsVersion: 'https://cdn.bootcss.com/',\n    view_path: './'\n};\n\n//# sourceURL=webpack:///./config/production.js?");

/***/ }),

/***/ "./src/controllers/view.js":
/*!*********************************!*\
  !*** ./src/controllers/view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _this = this;\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nvar show = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        _context.next = 2;\n                        return ctx.render('index', {\n                            cdnHostName: config.cdnHostName,\n                            jsVersion: config.jsVersion\n                        });\n\n                    case 2:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, _this);\n    }));\n\n    return function show(_x) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar showA = function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n                switch (_context2.prev = _context2.next) {\n                    case 0:\n                        console.log(ctx.session.a);\n                        // ctx.session.a = 111\n                        console.log(ctx.session.a);\n                        ctx.body = 'aaaa';\n\n                    case 3:\n                    case 'end':\n                        return _context2.stop();\n                }\n            }\n        }, _callee2, _this);\n    }));\n\n    return function showA(_x2) {\n        return _ref2.apply(this, arguments);\n    };\n}();\n\nmodule.exports = {\n    show: show,\n    showA: showA\n};\n\n//# sourceURL=webpack:///./src/controllers/view.js?");

/***/ }),

/***/ "./src/helpers/errors.js":
/*!*******************************!*\
  !*** ./src/helpers/errors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n* 错误列表\n*/\n\nmodule.exports = {\n  e001: '请求参数确失'\n};\n\n//# sourceURL=webpack:///./src/helpers/errors.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _this = this;\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar errors = __webpack_require__(/*! ./errors */ \"./src/helpers/errors.js\");\nvar schedule = __webpack_require__(/*! node-schedule */ \"node-schedule\");\n\nexports.getUuid = function () {\n    function s4() {\n        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n    }\n\n    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4();\n};\n\nexports.getResponse = function (success, e) {\n    if (success) {\n        return {\n            data: e || {},\n            success: true\n        };\n    } else {\n        return {\n            success: false,\n            error: e || '',\n            errorMsg: errors[e] || '未知错误！'\n        };\n    }\n};\n\n// 获取用户信息并放到state上\nexports.addSessionHelper = function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {\n        var adminUser, adminId;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        adminUser = null;\n                        adminId = ctx.session.adminId;\n\n                        if (!adminId) {\n                            _context.next = 6;\n                            break;\n                        }\n\n                        _context.next = 5;\n                        return models.admin.findById(adminId);\n\n                    case 5:\n                        adminUser = _context.sent;\n\n                    case 6:\n\n                        ctx.state = {\n                            admin_id: adminUser ? adminUser._id : '',\n                            adminUser: adminUser,\n                            isAdminSignIn: !!adminUser\n                        };\n\n                        _context.next = 9;\n                        return next();\n\n                    case 9:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, _this);\n    }));\n\n    return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n// 定时任务\nexports.runClockMission = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n            switch (_context2.prev = _context2.next) {\n                case 0:\n                    schedule.scheduleJob({ minute: 10 }, function () {\n                        console.log('');\n                    });\n\n                case 1:\n                case 'end':\n                    return _context2.stop();\n            }\n        }\n    }, _callee2, _this);\n}));\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\nvar Koa = __webpack_require__(/*! koa */ \"koa\");\nvar bodyParser = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\nvar logger = __webpack_require__(/*! koa-logger */ \"koa-logger\");\nvar views = __webpack_require__(/*! koa-views */ \"koa-views\");\nvar session = __webpack_require__(/*! koa-session */ \"koa-session\");\nvar MongoStore = __webpack_require__(/*! koa-session-mongo2 */ \"koa-session-mongo2\");\n\nvar router = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\nvar config = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\nvar _require = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\"),\n    addSessionHelper = _require.addSessionHelper,\n    runClockMission = _require.runClockMission;\n\nvar app = new Koa();\n\napp.use(logger());\n\napp.use(bodyParser({}));\n\nvar path =  true ? config.view_path : undefined;\napp.use(views(path, {\n\tmap: {\n\t\thtml: 'lodash'\n\t}\n}));\n\nglobal.models = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n\napp.use(session({\n\tstore: new MongoStore(config.sessionURL),\n\tsigned: false,\n\t// cookie过期时间，由浏览器负责到时清除，单位毫秒\n\tmaxAge: 24 * 60 * 60 * 1000\n}, app));\n\napp.use(router.routes(), router.allowedMethods());\n\n// runClockMission()\n\nconsole.log('启动端口：', config.port);\n\napp.listen(config.port);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _require = __webpack_require__(/*! ../../config */ \"./config/index.js\"),\n    mongoUri = _require.mongoUri,\n    mongoUriParam = _require.mongoUriParam;\n\nmongoose.Promise = global.Promise;\n\nvar conn = mongoose.createConnection(mongoUri + '/fenxiao?' + mongoUriParam);\n\nconsole.log('models');\n\nvar db = {};\n\nvar industry = __webpack_require__(/*! ./industry */ \"./src/models/industry.js\");\n\nvar models = [industry];\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        model = _step.value;\n\n        var newSchema = new mongoose.Schema(typeof model.schema === 'function' && model.schema(mongoose.Schema) || model.schema, { collection: model.name });\n        db[model.name] = conn.model(model.name, newSchema);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n\nmodule.exports = db;\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/models/industry.js":
/*!********************************!*\
  !*** ./src/models/industry.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var model = {\n    name: 'industry',\n    schema: {\n        name: String, //分类名称,不能重复\n        code: Number, //编号\n        create_time: Number\n    }\n};\n\nmodule.exports = model;\n\n//# sourceURL=webpack:///./src/models/industry.js?");

/***/ }),

/***/ "./src/routes/a.js":
/*!*************************!*\
  !*** ./src/routes/a.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nvar View = __webpack_require__(/*! ../controllers/view */ \"./src/controllers/view.js\");\n\nvar router = Router({\n    prefix: '/a'\n});\n\nrouter.get('/', View.showA);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/a.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nvar View = __webpack_require__(/*! ../controllers/view */ \"./src/controllers/view.js\");\nvar a = __webpack_require__(/*! ./a */ \"./src/routes/a.js\");\n\nvar router = Router();\n\nvar routes = [a];\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n  for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n    route = _step.value;\n\n    router.use(route.routes(), route.allowedMethods());\n  }\n} catch (err) {\n  _didIteratorError = true;\n  _iteratorError = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion && _iterator.return) {\n      _iterator.return();\n    }\n  } finally {\n    if (_didIteratorError) {\n      throw _iteratorError;\n    }\n  }\n}\n\nrouter.get(\"/\", View.show);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-session":
/*!******************************!*\
  !*** external "koa-session" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-session\");\n\n//# sourceURL=webpack:///external_%22koa-session%22?");

/***/ }),

/***/ "koa-session-mongo2":
/*!*************************************!*\
  !*** external "koa-session-mongo2" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-session-mongo2\");\n\n//# sourceURL=webpack:///external_%22koa-session-mongo2%22?");

/***/ }),

/***/ "koa-views":
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-views\");\n\n//# sourceURL=webpack:///external_%22koa-views%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-schedule":
/*!********************************!*\
  !*** external "node-schedule" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-schedule\");\n\n//# sourceURL=webpack:///external_%22node-schedule%22?");

/***/ })

/******/ });