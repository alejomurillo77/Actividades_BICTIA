let input = document.getElementById('inp')
let num = []
var num1 = 0;
var num2 = 0;
var opera;

function uno() {
    if(num1==0 && num1 !== '0.'){
        num1 = 1;
    }else{
        num1 += "1";
        
    }
    refrescar();
}
function dos() {
    if(num1==0 && num1 !== '0.'){
        num1 = 2;
    }else{
        num1 += "2";
        
    }
    refrescar();
}  
function tres() {
    if(num1==0 && num1 !== '0.'){
        num1 = 3;
    }else{
        num1 += "3";
        
    }
    refrescar();
} 
function cuatro() {
    if(num1==0 && num1 !== '0.'){
        num1 = 4;
    }else{
        num1 += "4";
        
    }
    refrescar();
} 
function cinco() {
    if(num1==0 && num1 !== '0.'){
        num1 = 5;
    }else{
        num1 += "5";
        
    }
    refrescar();
} 
function seis() {
    if(num1==0 && num1 !== '0.'){
        num1 = 6;
    }else{
        num1 += "6";
        
    }
    refrescar();
} 
function siete() {
    if(num1==0 && num1 !== '0.'){
        num1 = 7;
    }else{
        num1 += "7";
        
    }
    refrescar();
} 
function ocho() {
    if(num1==0 && num1 !== '0.'){
        num1 = 8;
    }else{
        num1 += "8";
        
    }
    refrescar();
} 
function nueve() {
    if(num1==0 && num1 !== '0.'){
        num1 = 9;
    }else{
        num1 += "9";
        
    }
    refrescar();
} 
function cero() {
    if(num1==0 && num1 !== '0.'){
        num1 = 0;
    }else{
        num1 += "0";
        
    }
    refrescar();
} 
function punto(){
    if(num1 == 0) {
        num1 = '0.';
    }else if(num1.indexOf(".") == -1) {
        num1 += '.';
    }
    refrescar();
}

function borrar(){
    num1 = 0;
    num2 = 0;
    refrescar();
}


function suma() {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("inp").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = 1;
  }
  
  function resta() {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("inp").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = 2;
  }
  
  function multiplicacion() {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("inp").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = 3;
  }
  
  function division() {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("inp").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = 4;
  }
  function cuadrado() {
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("inp").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = 5;
  }
  function igual(){
    num1 = parseFloat(num1);
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}
  function refrescar(){
    document.getElementById("inp").value = num1;
}
  
  var botones = document.querySelectorAll("button");
  for (var x = 0; x < botones.length; x++) {
    botones[x].onclick = function() {
      window[this.id]();
    }
  }