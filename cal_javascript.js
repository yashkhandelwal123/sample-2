
var a = document.getElementById("display_content");
var b = document.getElementsByTagName("button");
// var value = b.innerText;
// console.log(b);
var op1 = 0;
var op2 = null;
var o = null;

for(var i = 0; i<b.length ; i++){
    b[i].addEventListener('click',function(){
        var value = this.getAttribute("data_value");
        if(value == '+' || value == '-' || value == '/' || value == '%' || value == '*'){
            o = value;
            op1 = parseFloat(display_content.textContent);
            a.textContent = " ";
        }
        else if(value == '='){
            op2 = parseFloat(display_content.textContent);
           var re = eval(op1 +" " + o + " " + op2);
           a.innerText = re;

        }
        else if(value == "clear"){
            op1 = 0;
            op2 = null;
            a.innerText = " ";
        }
        else{
            a.innerText += value;
        }
    });
}