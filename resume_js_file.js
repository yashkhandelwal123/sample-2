var select =  document.querySelectorAll('#body-nav a');
for(var i =0 ;i<select.length; i++){
    select[i].addEventListener('click',function(event){
        event.preventDefault();
        var elementid = this.textContent.trim().toLowerCase();
        var ele = document.getElementById(elementid);
        var interval = setInterval(function(){
            var coor =  ele.getBoundingClientRect();
            if(coor.top <=0){
                clearInterval(interval);        
                return;
            }
            window.scrollBy(0,50);
        }, 50);  
    });
}
// var a = document.querySelectorAll('');
var cl = document.querySelectorAll('#skill-des > div');
var tl = document.getElementById('skill-des');
window.addEventListener('scroll',checkscroll);
var checkanimation = false;

function intialising(){
    for(let bar of cl){
        bar.style.width = 0 + '%';
    }
}
intialising();
function fillbar(){
    for(let bar of cl){
        let targetwidth = bar.getAttribute('data-value');
        let current = 0;
        let interval = setInterval(function(){
        //    var cordinate = bar.getBoundingClientRect();
           if(current>targetwidth){
               clearInterval(interval);
               return;
           }
           current++;
           bar.style.width = current + '%';
        },5);  
    }
   
}
function checkscroll(){
    var coor = tl.getBoundingClientRect();
    if(!checkanimation && coor.top <= window.innerHeight ){
        checkanimation = true;
        console.log('hello!');
        fillbar();
    }
    else if(coor.top > window.innerHeight){
        checkanimation = false;
        intialising();
    }
}
