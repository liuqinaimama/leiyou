ajax({
    url:"http://127.0.0.1:5500/public/header.html",
    type:"get"
})
//ES6
.then(res=>{
       document.getElementById("header").innerHTML=res;
//导航栏
     //触发元素 li
       var navLi=document.querySelectorAll("#header ul li");
       var a=document.querySelectorAll("#header ul li a");
       var currentUrl=document.location.href;
       var last=0;
       for(var i=0;i<navLi.length;i++){
           var aurl=a[i].getAttribute("href");
           if(currentUrl.indexOf(aurl)!=-1){
               last=i;
           }
       }
       navLi[last].className="hover"

            

        
            //找到触发事件的元素
            var button=document.querySelector(".navigate button");
             //查找修改元素
             var nav=document.querySelector(".navigate")
             var ul=document.querySelector(".navigate ul");
             var span1=document.querySelector(".navigate button span:first-child");
             var span2=document.querySelector(".navigate button span:nth-child(2)");
             var span3=document.querySelector(".navigate button span:last-child");
             console.log(span1,span2,span3);
            //添加点击事件
              button.onclick=function(){
                 
              //进行判断
              if(nav.style.maxHeight!="29rem"){
                  span1.style.transform="translateY(8px) rotate(60deg)";
                  span2.style.display="none";
                  span3.style.transform="rotate(-60deg)";
                  nav.style.maxHeight="29rem";
                  ul.style.visibility="visible";
              }else{
                  span1.style.transform="translateY(0px) rotate(0deg)";
                  span2.style.display="block";
                  span3.style.transform="rotate(0deg)";
                nav.style.maxHeight="5rem";
                ul.style.visibility="hidden";
               
         }
     }
         window.onscroll=function(){
             var as=document.querySelectorAll(".navigate a")
            if(window.scrollTop!=0){
                nav.style.transition="all 1s linear"
                nav.style.background="rgba(96,125,139,0.9)";
                for(var a of as){
                    a.style.color="#fff"
                }
            }
             
         }
})

