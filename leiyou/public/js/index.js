(function (){
  $.ajax({
    url:"http://localhost:3000/index/produce",
    type:"get",//请求类型
    //无请求参数
    dataType:"json"//返回值类型
  })//.then中的函数会在请求结束后，自动执行
  //        open(result)
  //               ↓
  .then(function(result){
    console.log(result);
    var html="";
  for(var p of result){
     //将当前循环的属性，填充进HTML片段中
      html+=`<div class="sub-product1" >
      <div class="sub-product2">
     <img src="${p.img}" alt="">
     <div class="sub-product3">
       <span>${p.title}</span>
       <div class="top_border"></div>
       <p>${p.promise}</p>
     </div>
     </div>
				</div>
     `
  }
   //放回页面中原位置:
   document.getElementById("p1")
   .innerHTML=html;
   
   //触发元素 li
   var navLi=document.querySelectorAll(".nav .list-nav li");
   //遍历li
     for(var li of navLi){
         //给当前li添加点击事件
         li.onclick=function(){
             var li=this;
              //修改的元素  查找带有hover的li
              var aClick=document.querySelector(".nav .list-nav li.aOnclick");
             //将带有hover的class清空
                aClick!=null&&(aClick.className="")
             //再给当前点击的li添加hover类
             li.className="aOnclick";
             }
          }
          var nav=document.querySelector(".nav");
          console.log(nav);
          window.onscroll=function(){
           var as=document.querySelectorAll(".nav .list-nav li a")
          if(window.scrollTop!=0){
              nav.style.transition="all 1s linear"
             nav.style.background="rgba(96,125,139,0.9)"
              for(var a of as){
                  a.style.color="#fff"
              }
           }
       }
    var i=0;
   var LIWIDTH=2000;
   var DURATION=500;
   var LICOUNT=3;
   var ulImgs=document.getElementById("ul-imgs");
   var ulIdxs=document.getElementById("ul-idxs");
   var lis=ulIdxs.children;
   function moveTo(to){
     if(to==undefined){
       to=i+1;
     }
     if(i==0){
       if(to>i){
         ulImgs.className="transition";
       }else{
         ulImgs.className="";
         ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
         setTimeout(function(){
           moveTo(LICOUNT-1);
         },100);
         return;
       }
     }
     i=to;
     ulImgs.style.marginLeft=-i*LIWIDTH+"px";
     for(var li of lis){
       li.className=""
     }
    // console.log(i);
     if(i==LICOUNT){
       i=0;
       setTimeout(function(){
         ulImgs.className="";
         ulImgs.style.marginLeft=0;
       },DURATION)
     }
     lis[i].className="active";
   }
   
   
   var btnLeft=document.getElementById("btn-left");
   var btnRight=document.getElementById("btn-right");
   var canClick=true;
   btnRight.onclick=function(){
     move(1)
   }
   function move(n){
     if(canClick){
       console.log(i+n);
       moveTo(i+n);
       canClick=false;
       setTimeout(function(){
         canClick=true;
       },DURATION+100);
     }
   }
   btnLeft.onclick=function(){
     move(-1);
   }
   
   
   var interval=3000;
   var timer=setInterval(function(){
     moveTo()
   },3000);
   var banner=document.getElementById("banner");
   banner.onmouseover=function(){
     clearInterval(timer);
   }
   banner.onmouseout=function(){
     timer=setInterval(function(){
       moveTo()
     },3000);
   }
   
   var ulIdxs=document.getElementById("ul-idxs");
   var canClick=true;
   ulIdxs.onclick=function(e){
     if(canClick){
       var li=e.target;
       if(li.nodeName=="LI"){
         if(li.className!=="active"){
           for(var i=0;i<lis.length;i++){
             if(lis[i]==li){
               break;
             }
           }
           moveTo(i);
           setTimeout(function(){
             canClick=true;
           },DURATION);
         }
       }
     }
   }
  
  })
 
})()