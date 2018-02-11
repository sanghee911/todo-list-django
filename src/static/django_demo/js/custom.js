setTimeout(function(){
   window.location.reload(1);
   console.log('test');
}, 1000);

var date = new Date();
var time = date.toLocaleTimeString();
document.getElementById("current-time").innerHTML = time;
console.log(time);
