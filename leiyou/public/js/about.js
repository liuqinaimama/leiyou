(function(){
    //1.查找触发事件的元素
  var as=document.querySelectorAll(".main-title>a[data-tab=tab]");
  //2.为元素绑定事件处理函数
    //遍历a
     //创建变量i，用于递增zIndex数值
    var i=10;
    for(var a of as){
      //为遍历的，每一个元素添加单击事件
      a.onclick=function(){
           var a=this;
           //修改的元素  查找带有active 的a
           var active=document.querySelector(".mian-title a.active");
          //将带有active 的a清空
             active!=null&&(active.className="");
          //再给当前点击的a添加active类
             a.className="active";

       //查找要修改的元素
        //获取当前单击对象a所缓存的对应的div的id
        //var a=this;
  
        var id=a.getAttribute("data-id");
        //用id作为查询条件，查询对应的div
        var div=document.getElementById(id);
        //修改元素
        //--修改div的zindex属性高于其他div
        div.style.zIndex=i;
         //每次设置完都i+1;
        i++;
        var opacity=document.querySelector("#container>div.opacity1");
        console.log(opacity)
        opacity!=null&&(opacity.className="row m-0");
        div.className+=" opacity1"                                             
      }
    }
    window.onscroll=function(){
      var ps=document.querySelectorAll(".banner-title p")
      console.log(ps);
     if(window.scrollTop!=0){
         for(var p of ps){
           console.log(p);
            p.style.transform="translateY:20px";
            p.style.transition="all 1s linear"
         }
      }
  }
   
})()