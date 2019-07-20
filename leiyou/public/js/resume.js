(function(){
    $.ajax({
        url:"http://localhost:3000/about/resume",
        type:"get",//请求类型
        dataType:"json"//返回值类型 
      })//.then中的函数会在请求结束后，自动执行
        //        open(result)
        //               ↓
    .then(function(result){
      console.log(result);
       var html="";
       var i=0;
       var html1="";
        for(var key of result){
            i++
           html+=`<div class="card">
            <div class="card-header">
                <a href="#${i}C" data-toggle="collapse" class="card-link d-block w-100">
                   ${key.title}
                  <span class="close text-primary">∨</span>
                </a>
            </div>
            <div id="${i}C" class="collapse" data-parent="#list_parent_C">
                <div class="card-body">
                  <div class="content">
                    ${key.descr}
                    </div>
                </div>
            </div>
        </div>`
        html1+=`<div class="card">
        <div class="card-header">
            <a href="#${i}D" data-toggle="collapse" class="card-link d-block w-100">
               ${key.title}->en
              <span class="close text-primary">∨</span>
            </a>
        </div>
        <div id="${i}D" class="collapse" data-parent="#list_parent_A">
            <div class="card-body">
              <div class="content">
                ${key.eng}
                </div>
            </div>
        </div>
    </div>`
        }
        list_parent_C.innerHTML=html;
        list_parent_A.innerHTML=html1;

        var options = document.getElementById("options");
        var btnC = options.querySelector("a:nth-child(1)");
        var btnA = options.querySelector("li:nth-child(2)>a");
        var listC = document.getElementById("list_parent_C");
        var listA = document.getElementById("list_parent_A");
        btnC.onclick=function(){
            listC.style.display="block";
            listA.style.display="none";
        }
        btnA.onclick=function(){
            listC.style.display="none";
            listA.style.display="block";
        }
        //console.log(btnA,btnC);

        //中国区
        var list_parent = document.getElementById("parent");
        var card_link = list_parent.querySelectorAll("a");
        for(var elem of card_link){
            elem.onclick = function(){
                var btn = this;
                var span = btn.children[0];
                if(span.textContent=="∨"){
                    var down = list_parent.querySelectorAll("span");
                    for(var elem of down){
                        if(elem.textContent=="∧")
                            elem.textContent="∨";
                    }
                    span.textContent="∧";
                }else{
                    span.textContent="∨"
                }
            }
        }
      })
})()