const config = require('../../config')

const show = async (ctx) =>{
    await ctx.render('index',{
        cdnHostName:config.cdnHostName,
        jsVersion:config.jsVersion,
    })
}
const showA = async (ctx) =>{
    console.log(ctx.session.a)
    // ctx.session.a = 111
    console.log(ctx.session.a)
    ctx.body = 'aaaa'
}

module.exports = {
    show,
    showA,
}
