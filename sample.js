// alert('hello!!');
// var b = document.getElementById('count').value;
// function add(){
//     b++;
//     document.getElementById('count').value === b;
// }
var a = document.getElementById('sample_work');
var b = document.getElementById('count');
var times = 0;
a.addEventListener("click",function(){
    times++;
    // console.log(times);
    b.innerText = times;
});