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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var development = __webpack_require__(13);
var production = __webpack_require__(14);

var env = "development" || 'development';

var configs = {
    development: development,
    production: production
};

var defaultConfig = {
    env: env
};

var config = Object.assign({}, defaultConfig, configs[env]);

module.exports = config;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(0);

var show = async function show(ctx) {
    await ctx.render('index', {
        cdnHostName: config.cdnHostName,
        jsVersion: config.jsVersion
    });
};
var showA = async function showA(ctx) {
    console.log((await models.industry.findOne()));
    console.log(ctx.session.a);
    // ctx.session.a = 111
    console.log(ctx.session.a);
    ctx.body = 'aaaa';
};

module.exports = {
    show: show,
    showA: showA
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var Koa = __webpack_require__(6);
var bodyParser = __webpack_require__(7);
var logger = __webpack_require__(8);
var views = __webpack_require__(9);
var session = __webpack_require__(10);
var MongoStore = __webpack_require__(11);

var router = __webpack_require__(12);
var config = __webpack_require__(0);

var _require = __webpack_require__(16),
    addSessionHelper = _require.addSessionHelper,
    runClockMission = _require.runClockMission;

var app = new Koa();

app.use(logger());

app.use(bodyParser({}));

var path =  true ? config.view_path : __dirname + '/views';
app.use(views(path, {
    map: {
        html: 'lodash'
    }
}));

global.models = __webpack_require__(19);

app.use(session({
    store: new MongoStore(config.sessionURL),
    signed: false,
    // cookie过期时间，由浏览器负责到时清除，单位毫秒
    maxAge: 24 * 60 * 60 * 1000
}, app));

app.use(router.routes(), router.allowedMethods());

// runClockMission()

app.listen(config.port);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-session");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-session-mongo2");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(1);
var View = __webpack_require__(2);
var a = __webpack_require__(15);

var router = Router();

var routes = [a];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    route = _step.value;

    router.use(route.routes(), route.allowedMethods());
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

router.get("/", View.show);

module.exports = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var port = Number.parseInt(Object({"NODE_ENV":"development"}).PORT) || 6060;
var mongoUri = 'mongodb://jiamengdba:P9reQI35gN0C7f88@40.125.167.38:27017';

module.exports = {
    port: port,
    mongoUri: mongoUri,
    mongoUriParam: 'authSource=admin',
    // 存放session的库和表配置
    sessionURL: {
        url: mongoUri + '/fenxiao_user?authSource=admin&poolSize=5',
        collection: 'sessions',
        // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位
        maxAge: 24 * 60 * 60
    },
    // 引用资源的cdn路径
    cdnHostName: 'https://cdn.bootcss.com/',
    // 打包完成发布上线的cdn前缀
    jsVersion: 'https://cdn.bootcss.com/',
    view_path: './'
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var port = Number.parseInt(Object({"NODE_ENV":"development"}).PORT) || 6060;
var mongoUri = 'mongodb://jiamengdba:P9reQI35gN0C7f88@40.125.167.38:27017';

module.exports = {
    port: port,
    mongoUri: mongoUri,
    mongoUriParam: 'authSource=admin',
    sessionURL: {
        url: mongoUri + '/fenxiao_user?authSource=admin&poolSize=5',
        collection: 'sessions'
    },
    cdnHostName: 'http://jiaopeitoutiao-test.oss-cn-hangzhou.aliyuncs.com',
    jsVersion: '//jiaopeitoutiao-test.oss-cn-hangzhou.aliyuncs.com/js/console/js/201801031600',
    view_path: './'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Router = __webpack_require__(1);
var View = __webpack_require__(2);

var router = Router({
    prefix: '/a'
});

router.get('/', View.showA);

module.exports = router;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var errors = __webpack_require__(17);
var schedule = __webpack_require__(18);

exports.getUuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4();
};

exports.getResponse = function (success, e) {
    if (success) {
        return {
            data: e || {},
            success: true
        };
    } else {
        return {
            success: false,
            error: e || '',
            errorMsg: errors[e] || '未知错误！'
        };
    }
};

// 获取用户信息并放到state上
exports.addSessionHelper = async function (ctx, next) {
    var adminUser = null;

    var adminId = ctx.session.adminId;


    if (adminId) {
        adminUser = await models.admin.findById(adminId);
    }

    ctx.state = {
        admin_id: adminUser ? adminUser._id : '',
        adminUser: adminUser,
        isAdminSignIn: !!adminUser
    };

    await next();
};

// 定时任务
exports.runClockMission = async function () {
    schedule.scheduleJob({ minute: 10 }, function () {
        console.log('');
    });
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
* 错误列表
*/

module.exports = {
  e001: '请求参数确失'
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(20);

var _require = __webpack_require__(0),
    mongoUri = _require.mongoUri,
    mongoUriParam = _require.mongoUriParam;

mongoose.Promise = global.Promise;

var conn = mongoose.createConnection(mongoUri + '/fenxiao?' + mongoUriParam);

console.log('models');

var db = {};

var industry = __webpack_require__(21);

var models = [industry];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        model = _step.value;

        var newSchema = new mongoose.Schema(typeof model.schema === 'function' && model.schema(mongoose.Schema) || model.schema, { collection: model.name });
        db[model.name] = conn.model(model.name, newSchema);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

module.exports = db;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var model = {
    name: 'industry',
    schema: {
        name: String, //分类名称,不能重复
        code: Number, //编号
        create_time: Number
    }
};

module.exports = model;

/***/ })
/******/ ]);