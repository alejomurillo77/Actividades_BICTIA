const Registro = document.getElementById('registroartistas')

let listaDeArtista = [];


Registro.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputNombre = document.getElementById('Nombre').value
    const inputIntegrantes = document.getElementById('Integrantes').value
    const inputCiudad = document.getElementById('Ciudad').value
    const inputGenero = document.getElementById('Genero').value
    const inputCancion = document.getElementById('Cancion').value

    const Artista = {
        nombre: inputNombre,
        integrantes: inputIntegrantes,
        ciudad: inputCiudad,
        genero: inputGenero,
        cancion: inputCancion
    }
    guardarEnStorage(Artista)
})

const guardarEnStorage =  (Artista)=>{
    if(localStorage.getItem('Artistas') == null){
            listaDeArtista.push(Artista)
            const ArtistasString = JSON.stringify(listaDeArtista)
            localStorage.setItem('Artistas', ArtistasString)
    }else{
        listaEnStorage = JSON.parse(localStorage.getItem('Artistas'))
        listaEnStorage.push(Artista)
        const ArtistasString = JSON.stringify(listaEnStorage)
        localStorage.setItem('Artistas', ArtistasString)
    }
}