var mensajenombre = document.getElementById('nombre')
var mensajecancion = document.getElementById('cancion')
var mensajenumintegrantes = document.getElementById('numintegrantes')
var mensajepais = document.getElementById('pais')

function informacion(){
    var nombre = prompt('Ingresa el nombre de la banda')
    var mensajenom = `Nombre: ${nombre}`
    mensajenombre.innerText = mensajenom
    var cancion = prompt('ingresa el nombre de una cancion de la banda que conozcas')
    var mensajecan = `Canción: ${cancion}`
    mensajecancion.innerText = mensajecan
    var numintegrantes = prompt('ingresa el numero de integrantes de la banda')
    var mensajenum = `Numero de integrantes: ${numintegrantes}`
    mensajenumintegrantes.innerText = mensajenum
    var pais = prompt('ingresa el pais de origen de la banda')
    var mensajepa = `Pais: ${pais}`
    mensajepais.innerText = mensajepa    
}
