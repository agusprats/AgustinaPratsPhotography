var video = document.querySelector("#mivideo")
var boton = document.querySelector("#reproducir")


function reproducir() {
    if(video.paused){
    video.play()
    boton.innerHTML= '<span class="fas fa-pause"></span>'
    } else {
        video.pause()
        boton.innerHTML= '<span class="fas fa-play"></span>'
    } 
}

function frenar() {
    video.currentTime=0
    video.pause()
    boton.innerHTML= '<span class="fas fa-play"></span>'
}

function saltar(valor) {
    video.currentTime += valor
}

