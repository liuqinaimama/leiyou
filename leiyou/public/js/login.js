(function (){
    var uname=document.getElementById("uname");
    var upwd=document.getElementById("upwd");
    var logbtn=document.getElementById("login");
    var uname_span=document.getElementById("uname_span");
    var upwd_span=document.getElementById("upwd_span");
    var span1=document.getElementById("span1");
    //console.log(uname_span);

    uname.onfocus=function(){
        uname_span.innerHTML="用户名必须输入3~10位，不能数字开头";
    }
    upwd.onfocus=function(){
        upwd_span.innerHTML="密码必须输入6~12位";
    }
    uname.onblur=function(){
        uname_span.innerHTML=""
    }
    upwd.onblur=function(){
        upwd_span.innerHTML=""
    }

    logbtn.onclick=function(){
       
            u_name=uname.value;
            u_pwd=upwd.value;
            
     
         
          //3.跳转index.html
         
        $.ajax({
            url:"http://localhost:3000/users/login",
            type:"post",//请求类型
            data:"uname="+u_name+"&upwd="+u_pwd,
            dataType:"json"//返回值类型
          })//.then中的函数会在请求结束后，自动执行
          //        open(result)
          //               ↓
          .then(function(result){
            console.log(result);
            //通过ajax请求数据结束时，进行下列判断
            //uname upwd 正则
            var reg1=/^([\u4e00-\u9fa5a-zA-Z0-9]){3,10}$/;
            var reg2=/^\w{6,12}$/i;
            //对用户名 密码进行判断 
            if(u_name==""||u_pwd==""){
                span1.innerHTML="用户名或密码格不能为空";
            }
            else if(!reg1.test(u_name.trim())||!reg2.test(u_pwd.trim())){
              span1.innerHTML="用户名或密码格式不正确";
             }
             //当用户输入的信息与数据库中一致时
             else if(result.data[0].uname==u_name&&result.data[0].upwd==u_pwd){
                 console.log(result.data[0].uname)
                 // 通过session保存当前用户名  
                 sessionStorage.setItem("uname",u_name);
                 //跳转网页
                 open("resume.html","_self")
             }
             else{span1.innerHTML="";}
           
     
      
      
          })
    }
   
    })()