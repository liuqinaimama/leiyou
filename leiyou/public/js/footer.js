ajax({
    url:"http://127.0.0.1:5500/public/footer.html",
    type:"get"
})
//ES6
.then(res=>{
       document.getElementById("footer").innerHTML=res;
})
