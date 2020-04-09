//引入mongoose模块
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true })
		.then(() => console.log('连接成功'))
		.catch(() => console.log('连接失败'));