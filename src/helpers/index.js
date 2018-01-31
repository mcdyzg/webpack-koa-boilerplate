const errors = require('./errors')
const schedule = require('node-schedule')

exports.getUuid = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4();
};

exports.getResponse = function(success, e) {
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
exports.addSessionHelper = async(ctx, next) => {
    let adminUser = null;

    const {
        adminId
    } = ctx.session;

    if (adminId) {
        adminUser = await models.admin.findById(adminId);
    }

    ctx.state = {
        admin_id: adminUser ? adminUser._id : '',
        adminUser,
        isAdminSignIn: !!adminUser,
    }

    await next()
};

// 定时任务
exports.runClockMission = async() =>{
    schedule.scheduleJob({minute: 10}, function(){
        console.log('')
    });
}
