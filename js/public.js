function ajax(){
    //ajax封装
}
window.onload=function(){
    var div=document.getElementById("div");
    div.onclick=function(){
        var p=document.createElement("p");
        p.innerText="好好学习，天天向上";
        div.appendChild(p);
    }
}