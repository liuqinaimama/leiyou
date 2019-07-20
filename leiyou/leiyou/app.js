//使用express构建web服务器 
const express = require('express');

const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
const index=require("./routes/index");
const product=require("./routes/product");
const news=require("./routes/news");
const login=require("./routes/login");
const about=require("./routes/about");

var app = express();
app.listen(3000);


//提前配置好客户端的IP地址，有了这句话，后面的接口都不用担心跨域问题
//因为在封接口之前，就已经跨域了。
app.use(cors({origin:"http://127.0.0.1:5500"}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/product",product);
app.use("/news",news);
app.use("/users",login);
app.use("/about",about);



