const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const btn5 = document.getElementById('5')
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')
const btn0 = document.getElementById('0')
const btn = document.getElementById('reset')
const inpt = document.getElementById('letras')
const inpt1 = document.getElementById('numeros')
let array = [];
let arrayn = [];
let a;


btn.addEventListener('click', ()=>{
    array = []
    arrayn = []
    inpt.value = "letras de la a - j"
    inpt1.value = "Numeros del 0 - 9" 
})
btn1.addEventListener('click', ()=>{
    if(array[0] == null){
        array[0] = 'A'
        a = array.join(' ')
        $("#letras").val(a)    
    }else if(array[9] == 'J' & arrayn[0] == null){
        arrayn[0] = '1'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
        swal("error", "Boton Incorrecto!", "error");
}})

btn2.addEventListener('click', ()=>{
    if(array[0]=='A' & array[1] == null){
        array[1] = 'B'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[0] == '1' & arrayn[1] == null){
        arrayn[1] = '2'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
    }})
btn3.addEventListener('click', ()=>{
    if(array[1]=='B' & array[2] == null){
        array[2] = 'C'
        a = array.join(' ')
        $("#letras").val(a);    
        }else if(arrayn[1] == '2'  & arrayn[2] == null){
            arrayn[2] = '3'
            a = arrayn.join(' ')
            $("#numeros").val(a)
        }else{ 
        swal("error", "Boton Incorrecto!", "error");
    }})
btn4.addEventListener('click', ()=>{
    if(array[2]=='C' & array[3] == null){
        array[3] = 'D'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[2] == '3' & arrayn[3] == null){
        arrayn[3] = '4'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})
btn5.addEventListener('click', ()=>{
    if(array[3]=='D' & array[4] == null){
        array[4] = 'E'
        a = array.join(' ')
        $("#letras").val(a);    
        }else if(arrayn[3] == '4' & arrayn[4] == null){
            arrayn[4] = '5'
            a = arrayn.join(' ')
            $("#numeros").val(a)
        }else{ 
        swal("error", "Boton Incorrecto!", "error");
}})
btn6.addEventListener('click', ()=>{
    if(array[4]=='E' & array[5] == null){
        array[5] = 'F'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[4] == '5' & arrayn[5] == null){
        arrayn[5] = '6'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})
btn7.addEventListener('click', ()=>{
    if(array[5]=='F' & array[6] == null){
        array[6] = 'G'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[5] == '6' & arrayn[6] == null){
        arrayn[6] = '7'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})

btn8.addEventListener('click', ()=>{
    if(array[6]=='G' & array[7] == null){
        array[7] = 'H'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[6] == '7' & arrayn[7] == null){
        arrayn[7] = '8'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})
btn9.addEventListener('click', ()=>{
    if(array[7]=='H' & array[8] == null){
        array[8] = 'I'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[7] == '8' & arrayn[8] == null){
        arrayn[8] = '9'
        a = arrayn.join(' ')
        $("#numeros").val(a)
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})
btn0.addEventListener('click', ()=>{
    if(array[8]=='I' & array[9] == null){
        array[9] = 'J'
        a = array.join(' ')
        $("#letras").val(a);    
    }else if(arrayn[8] == '9' & arrayn[9] == null){
        arrayn[9] = '0'
        a = arrayn.join(' ')
        $("#numeros").val(a)
        swal("Excelente", "Haz completado el algoritmo!", "success");
    }else{ 
    swal("error", "Boton Incorrecto!", "error");
}})
