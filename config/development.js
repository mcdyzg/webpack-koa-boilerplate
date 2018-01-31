const port = Number.parseInt(process.env.PORT) || 6060;
const mongoUri = ''

module.exports = {
    port,
    mongoUri,
    mongoUriParam: 'authSource=admin',
    // 存放session的库和表配置
    sessionURL:{
        url: mongoUri+'/fenxiao_user?authSource=admin&poolSize=5',
        collection: 'sessions',
        // 这里设置的是数据库session定期清除的时间，与cookie的过期时间应保持一致，cookie由浏览器负责定时清除，需要注意的是索引一旦建立修改的时候需要删除旧的索引。此处的时间是秒为单位，cookie的maxAge是毫秒为单位
        maxAge: 24 * 60 * 60
    },
    // 引用资源的cdn路径
    cdnHostName: 'https://cdn.bootcss.com/',
    // 打包完成发布上线的cdn前缀
    jsVersion:'https://cdn.bootcss.com/',
    view_path:'./'
};
