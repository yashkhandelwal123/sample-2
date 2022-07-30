var b = document.body;
var a = document.getElementsByClassName('circle');
var c = document.getElementsByClassName('outer_div');
var d = document.getElementsByTagName('h1');
a[0].addEventListener('click',function(){
    b.classList.add('bg_color');
    c[0].classList.add('bg_color_white');
  
    d[0].classList.add('f-c');

    // b = black;
    // a[0].classList.add('a_cirle');
    // a[0].classList.add('a_cirle');

});