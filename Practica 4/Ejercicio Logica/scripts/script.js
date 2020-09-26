const btnretro = document.getElementById('retro')

btnretro.addEventListener('click', ()=>{
    if (localStorage.getItem("tema") === null){
    const container = document.getElementById('container')
    container.className = "container retro"    
    localStorage.setItem('tema', "retro")
    }else {
        const container = document.getElementById('container')
        container.className = "container"
        localStorage.clear()  
    }
})

const btnDark = document.getElementById('dark')

btnDark.addEventListener('click', ()=>{
    if (localStorage.getItem("tema") === null){
    const container = document.getElementById('container')
    container.className = "container dark"
    localStorage.setItem('tema', "dark")
}else {
    const container = document.getElementById('container')
    container.className = "container"
    localStorage.clear()  
}
})

const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema')

    if(temaGuardado == "retro"){
        document.getElementById('container').classList.add('retro')
    }else if(temaGuardado == "dark"){
        document.getElementById('container').classList.add('dark')
    }else if(temaGuardado == "light"){
        document.getElementById('container').container.className = "container"
    }
}

temaEnStorage()