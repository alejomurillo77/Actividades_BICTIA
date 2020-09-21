const tabla = document.getElementById('Artistas_favoritos')


const ArtistasStorage = ()=>{
    const ArtistaEnStorage = JSON.parse(localStorage.getItem('Artistas'))
    console.log(ArtistaEnStorage)
    for(let i = 0; i<ArtistaEnStorage.length; i += 1 ){
        tabla.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${ArtistaEnStorage[i].nombre}</td>
                <td>${ArtistaEnStorage[i].integrantes}</td>
                <td>${ArtistaEnStorage[i].ciudad}</td>
                <td>${ArtistaEnStorage[i].genero}</td>
                <td>${ArtistaEnStorage[i].cancion}</td>
            <tr>
        `
        console.log(ArtistaEnStorage[i])
    }

}
ArtistasStorage()

document.getElementById('limpiar').addEventListener('click', ()=>{
    localStorage.clear()
    tabla.innerHTML=''
})