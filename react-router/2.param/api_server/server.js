const Koa=require('koa');
const Router=require('koa-router');
const mysql=require('mysql');
const mysqlWrapper=require('co-mysql');

let db=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sunbin113',
  database: 'react-router'
});

let server=new Koa();
server.listen(8080);

server.context.db=mysqlWrapper(db);

server.use(async (ctx,next)=>{
  console.log(`接口：${ctx.url}`);
  await next();
});

let router=new Router();

router.use('/api', require('./routers/api'));

server.use(router.routes());
