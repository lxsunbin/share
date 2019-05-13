const Router=require('koa-router');

let router=new Router();

router.get('/game_list', async ctx=>{
  let list=await ctx.db.query("SELECT id, name FROM game_table");

  ctx.body={err: 0, data: list};
});

router.get('/game/:id/', async ctx=>{
  let {id}=ctx.params;

  let res=await ctx.db.query("SELECT * FROM game_table WHERE id=?", [id]);

  if(res.length==0){
    ctx.body={err: 1, msg: 'no this game'};
  }else{
    ctx.body={err: 0, data: res[0]};
  }
});

module.exports=router.routes();
