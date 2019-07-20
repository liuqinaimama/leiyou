const express=require("express")
const router=express.Router();
const pool=require("../pool");
//app.js: "/index"
//自己:          "/"
//完整地址: /index/
router.post('/login',(req,res)=>{
	var obj1=req.body;
	console.log(obj1);
    var reg1=/^([\u4e00-\u9fa5a-zA-Z0-9]){3,10}$/;
	var reg2=/^\w{6,12}$/i;
	if(obj1.uname==""||obj1.upwd==""){
		res.send({code:-1,msg:"用户名或密码格式不能为空"})
        return
	}
	else if(!reg1.test(obj1.uname.trim())||!reg2.test(obj1.upwd.trim())){
		res.send({code:-1,msg:"用户名或密码格式不正确"})
		return
	  }
	/*if(!obj1.uname){//判断obj1是否为空
	res.send({code:401,msg:'uname required'});
	      return;
	}
	if(!obj1.upwd){
	   res.send({code:402,msg:'upwd required'});
		   return;
	}*/
	//2.1执行sql语句
	//查询用户表中是否含有用户名和密码同时匹配的数据
	pool.query('SELECT * FROM leiyou_user WHERE uname=? AND upwd=?',[obj1.uname,obj1.upwd],(err,result)=>{
	     if(err) throw err;
		 console.log(result);
		 //判断数组长度是否大于0  数组长度为空，说明用户名或者密码不存在，登陆错误
		 if(result.length>0){
		    res.send({code:200,data:result});
		 }else{
			 res.send({code:301,msg:'login err'});
			}
	})
})

module.exports=router;