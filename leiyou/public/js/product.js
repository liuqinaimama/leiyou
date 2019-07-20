(function(){
   $.ajax({
      url:"http://localhost:3000/product/product",
      type:"get",//请求类型
      dataType:"json"//返回值类型 
    })//.then中的函数会在请求结束后，自动执行
    //        open(result)
    //               ↓
    .then(function(result){
    console.log(result);
    var html="";
    for(var key of result){
      html+=`<div class="row m-0" >
      <div class="col-lg-6 col-md-12 p-0">
          <img src="${key.img}" alt="" class="my-size"/>
      </div>
      <div class="col-lg-6 col-md-12 p-0">
          <div class="myMb">
          <h3>${key.title}</h3>
          <p>${key.subtitle}</p>
          <a href="${key.href}">查看产品 ></a>
          </div>
      </div>
  </div>`
    }
    //放回页面原位置
    document.getElementById("p1").innerHTML=html;
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
      nav.style.background="rgba(96,125,139,0.9)"
       for(var a of as){
           a.style.color="#fff"
       }
    }
}
   })
})()