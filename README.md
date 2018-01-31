
# webpack-koa-boilerplate

A boilerplate for running a Webpack workflow in Node koa app

## Introduction

koa2+mongodb+koa-session+koa-router+

## Install and Running

development:

`git clone https://github.com/mcdyzg/webpack-koa-boilerplate.git`

`npm install `

`npm start`

`navigate to http://localhost:6060 in your browser of choice.`

deploy:

`npm run dev` to build a development environment bundle.

or

`npm run build` to build a production environment bundle.

## Config

- port: server port
- mongoUri: mongodb ConnectionStrings
- mongoUriParam: 'authSource=admin'
- sessionURL: MongoStore’s config

        example:
        {
            url: mongoUri+'/fenxiao_user?authSource=admin&poolSize=5',
            collection: 'sessions',
            // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位
            maxAge: 24 * 60 * 60
        }

- cdnHostName:cdn prefix.eg:`https://cdn.bootcss.com/`
- jsVersion: js version for html
- view_path: 上线后的html的路径.eg:`./`

## 模块全部使用es5的require语法引入

1. .babelrc置为空，babel-polyfill不引入，yarn dev直接打包运行不报错，此时async函数没有被编译，原样输出。此时需要node环境原生支付async/await。
2. .babelrc置为空，babel-polyfill引入，yarn dev直接打包运行不报错，此时async函数没有被编译，原样输出。但是运行时会require('babel-polyfill')

3. .babelrc使用babel-preset-es2015{"modules": false}，yarn dev直接打包运行不报错，此时async函数都不会编译，此时需要node环境原生支付async/await。babel-polyfill可require也可不require。

4. .babelrc使用babel-preset-env{"modules": false}，不引用babel-polyfill，yarn dev直接打包运行报错，此时async函数都会编译成_asyncToGenerator，由于缺少regeneratorRuntime导致报错。
5. .babelrc使用babel-preset-env{"modules": false}，引用babel-polyfill，yarn dev直接打包运行不报错，此时async函数都会编译成_asyncToGenerator，虽然还是缺少regeneratorRuntime，但是由于运行时会执行require("polyfill")，polyfill中有对regeneratorRuntime的定义，因此没有报错。
6. .babelrc使用babel-preset-env{"modules": false}和

    ```
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
    ```
引用或不引用babel-polyfill，yarn dev打包后运行都会报错，此时async函数都会编译成_asyncToGenerator。但是报Cannot assign to read only property 'exports' of object '#<Object>'这个错

## 模块全部使用es6的import语法引入

1. .babelrc置为空，引入或不引入babel-polyfill，打包运行都成功，此时async函数原样保留，没有编译成_asyncToGenerator。需要node环境支持async/await语法

2. .babelrc使用babel-preset-es2015{"modules": false}，yarn dev直接打包运行不报错，此时async函数都不会编译，只有const、let等es6语法被编译了。babel-polyfill可require也可不require。此时需要node环境原生支付async/await

3. .babelrc使用babel-preset-env{"modules": false}，不引用bael-polyfill。打包运行报错regeneratorRuntime is not defined，此时async函数被编译成了_asyncToGenerator。
4. babelrc使用babel-preset-env{"modules": false}和

    ```
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
    ```

，不引用bael-polyfill。打包运行不报错，此时async函数被编译成了_asyncToGenerator，regeneratorRuntime也被打进了包里，其实是babel-runtime require了regenerator-runtime。
5. .babelrc使用babel-preset-env{"modules": false}，引用bael-polyfill。打包运行成功，此时async函数被编译成了_asyncToGenerator。虽然还是缺少regeneratorRuntime，但是由于运行时会执行require("polyfill")，polyfill中有对regeneratorRuntime的定义，因此没有报错。
6. .babelrc使用babel-preset-env{"modules": false}，引用bael-polyfill和

    ```
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
    ```

。打包运行成功，此时async函数被编译成了_asyncToGenerator，regeneratorRuntime也被打进了包里。运行时会执行require("polyfill")，polyfill中也有对regeneratorRuntime的定义但不会覆盖赋值，因此没有报错。
