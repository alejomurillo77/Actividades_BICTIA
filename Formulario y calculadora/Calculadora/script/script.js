
function operacion(basica){ 
    let inputnum1 = parseInt(document.getElementById('num1').value)
    let inputnum2 = parseInt(document.getElementById('num2').value)
    let resultado
    let mensajeresultado = document.getElementById('resultado')
    let mensajeres    
            
    switch(basica){
        case "+":
            resultado = inputnum1 + inputnum2;
            mensajeres = `RESULTADO: ${resultado}`
            mensajeresultado.innerText = mensajeres
            alert('el resultado de la suma es ' + resultado)            
            break;
          case "-":
            resultado = inputnum1 - inputnum2;
            mensajeres = `RESULTADO: ${resultado}`
            mensajeresultado.innerText = mensajeres
            alert('el resultado de la resta es ' + resultado)            
            break;
            case "*":
                resultado = inputnum1 * inputnum2;
                mensajeres = `RESULTADO: ${resultado}`
                mensajeresultado.innerText = mensajeres
                alert('el resultado de la multiplicación es ' + resultado)
            break;
            case "/":                
                    if(inputnum2 == 0){
                        alert('no es posible dividir un numero entre 0')
                    }else{
                        resultado = inputnum1 / inputnum2;
                        mensajeres = `RESULTADO: ${resultado}`
                        mensajeresultado.innerText = mensajeres
                        alert('el resultado de la división es ' + resultado)                        
                    }                
            break;
    } 
  }