const model = {
    name: 'industry',
    schema: {
        name:String,//分类名称,不能重复
        code:Number,//编号
        create_time:Number,
    }
}

module.exports = model
