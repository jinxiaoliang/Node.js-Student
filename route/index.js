//引入router第三方模块
const getRouter = require('router');
//获取路由对象
const router = getRouter();
//学生信息集合
const Student = require('../modle/user');
//引入模板引擎
const template = require('art-template');
//引入querystring模块
const queryString = require('querystring');

//呈递学生档案信息页面
router.get('/add',(req,res) => {
	let html = template('index',{});
	res.end(html);
});

//呈递学生档案信息列表页面
router.get('/list',async (req,res) => {
	//查询学生信息
	let student = await Student.find();
	let html = template('list',{
		student: student
	});
	res.end(html);
});

//实现学生信息添加功能路由
router.post('/add',(req,res) => {
	//接收post请求参数
	let formDate = '';
	req.on('data',param => {
		formDate += param;
	});
	req.on('end', async () => {
		await Student.create(queryString.parse(formDate));
		res.writeHead(301, {
			Location: '/list'
		});
		res.end();
	});
});

module.exports = router;