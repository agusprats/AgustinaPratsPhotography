var grupoBanner = []

grupoBanner[0]=["https://www.lensculture.com/agustina-prats/", "img/prod1.jpg"]
grupoBanner[1]=["https://www.lensculture.com/agustina-prats/", "img/prod15.jpg"]
grupoBanner[2]=["https://www.lensculture.com/agustina-prats/", "img/prod18.png"]
grupoBanner[3]=["https://www.lensculture.com/agustina-prats/", "img/prod19.png"]
grupoBanner[4]=["https://www.lensculture.com/agustina-prats/", "img/prod20.jpg"]
grupoBanner[5]=["https://www.lensculture.com/agustina-prats/", "img/prod21.jpg"]

var vinculos = document.getElementById("links")
var imagenes = document.getElementById("banner2")

vinculos.href = grupoBanner[0][0]
imagenes.src = grupoBanner[0][1]

var indice = 0

function actualizarBanner() {
    indice++
    if(indice>5){
        indice=0
    }
    vinculos.href=grupoBanner[indice][0]
    imagenes.src=grupoBanner[indice][1]
}

setInterval(actualizarBanner, 3500)

var grupoBanner2 = []

grupoBanner2[0]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod8.jpg"]
grupoBanner2[1]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod22.jpg"]
grupoBanner2[2]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod23.jpg"]
grupoBanner2[3]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod17.jpg"]
grupoBanner2[4]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod24.jpg"]
grupoBanner2[5]=["https://www.lensculture.com/agustina-prats/?modal=project-149986", "img/prod12.jpg"]

var vinculos2 = document.getElementById("links2")
var imagenes2 = document.getElementById("banner3")

vinculos2.href = grupoBanner2[0][0]
imagenes2.src = grupoBanner2[0][1]

var indicep = 0

function actualizarBanner2() {
    indicep++
    if(indicep>5){
        indicep=0
    }
    vinculos2.href=grupoBanner2[indicep][0]
    imagenes2.src=grupoBanner2[indicep][1]
}

setInterval(actualizarBanner2, 3500)


//Cambio de color de los párrafos con los titulos fotos
var parrafos = document.getElementsByTagName("p")
parrafos[0].style.color="#ff4242"
parrafos[1].style.color="#ff4242"
parrafos[2].style.color="#ff4242"
parrafos[3].style.color="#ff4242"
parrafos[4].style.color="#ff4242"
parrafos[5].style.color="#ff4242"
parrafos[6].style.color="#ff4242"
parrafos[7].style.color="#ff4242"
parrafos[8].style.color="#ff4242"
parrafos[9].style.color="#ff4242"
parrafos[10].style.color="#ff4242"
parrafos[11].style.color="#ff4242"
parrafos[12].style.color="#ff4242"
parrafos[13].style.color="#ff4242"