(function(){
    $.ajax({
       url:"http://localhost:3000/news/news",
       type:"get",//请求类型
       dataType:"json"//返回值类型 
     })//.then中的函数会在请求结束后，自动执行
     //        open(result)
     //               ↓
     .then(function(result){
     console.log(result);
     var html="";
     for(var key of result){
       html+=`<div class="col-lg-6 col-md-12 p-0">
       <div class="ml-5 my-border-style">
<img src="${key.img}" alt="" class="my-img float-left"/>
 <div class="float-left my-width ml-5  my-magin-left">
 <h5 class="font-weight-bold"> ${key.title}</h5>
 <p class="mySmall">
    ${key.subtitle}
     <a href="details.html">[详细]</a>
 </p>
 </div>
</div>
</div>`
     }
     //放回页面原位置
     new1.innerHTML=html;
      //触发元素 li
  var navLi=document.querySelectorAll("#content ul li");
  var navLi=document.querySelectorAll("#content ul li");
    var a=document.querySelectorAll("#content ul li a");
    var currentUrl=document.location.href;
    var last=0;
    for(var i=0;i<navLi.length;i++){
        var aurl=a[i].getAttribute("href");
        if(currentUrl.indexOf(aurl)!=-1){
            last=i;
        }
    }
    navLi[last].className+=" hover"
    
    var nav=document.querySelector(".navbar");
    console.log(nav);
    window.onscroll=function(){
     var as=document.querySelectorAll("#content ul li a")
    if(window.scrollTop!=0){
        nav.style.transition="all 1s linear"
        console.log(777,nav)
        nav.style.background="rgba(96,125,139,0.9)"
        for(var a of as){
            a.style.color="#fff"
        }
     }
 }
    })
 })()