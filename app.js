//引入http模块
const http = require('http');
//引入模板引擎
const template = require('art-template');
//引入path模块
const path = require('path');
//引入serve-static模块
const serveStatic = require('serve-static');
//引入dateformat模块
const dateFormat = require('dateformat');
//实现静态资源访问服务
const serve = serveStatic(path.join(__dirname,'public'));
//引入路由
const router = require('./route/index');
//配置模板根目录
template.defaults.root = path.join(__dirname,'views');
//设置模板默认后缀
template.defaults.extname = '.html';
//处理日期格式的方法
template.defaults.imports.dateFormat = dateFormat;


//数据库连接
require('./modle/connect');
//创建网站服务器
const app = http.createServer();


//当客户端访问服务器的时候
app.on('request',(req,res) => {
	//启用路由功能
	router(req, res, () => {})
	//启用静态资源访问功能
	serve(req, res, () => {})
});

app.listen(80);
console.log('启动成功');