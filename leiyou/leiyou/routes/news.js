const express=require("express")
const router=express.Router();
const pool=require("../pool")

//app.use("/product",product)
//服务端接口地址http://localhost:3000/product
//客户端请求时:
//http://localhost:3000/product?pid=1
router.get("/news",(req,res)=>{

    var sql=`select * from real_news`;
    pool.query(sql,[],(err,result)=>{
      if(err){
        console.log(err);
        res.send({code:0});
      }else{
        res.send(result);
      }
    })
  
})

module.exports=router;