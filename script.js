var time = 10;
var timer = setInterval(()=>{
  if(time <= 0){
    clearInterval(timer);
    var div = document.getElementById("countdown");
    div.innerHTML="HAPPY INDEPENDENCE DAY" 
  }else{
    document.getElementById("countdown").innerHTML = time + " seconds remaining";
  }
  time -= 1;
}, 1000);
