// alert('hello!!');

var a = document.getElementById('sample_work');
var b = document.getElementById('count');
var times = 0;
a.addEventListener("click",function(){
    times++;
    // console.log(times);
    b.innerText = times;
});
