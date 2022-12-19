
let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;

function iniciarJuego() {
    let sectionSelecionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSelecionarAtaque.style.display = 'none'

    let sectionReiniciar  = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {

    let sectionSelecionarMascota = document.getElementById('seleccionar-mascota')
    sectionSelecionarMascota.style.display = 'none' 

    let sectionSelecionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSelecionarAtaque.style.display = 'block' 

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spamMascotaJugador = document.getElementById('mascota-jugador');
    
    

    if (inputHipodoge.checked) { 
        spamMascotaJugador.innerHTML = 'Hipodoge' 
    } else if (inputCapipepo.checked) { 
        spamMascotaJugador.innerHTML = 'capipepo'  
    } else if (inputRatigueya.checked) { 
        spamMascotaJugador.innerHTML = 'ratigueya' 
    } else { 
        alert('Selecciona una mascota') 
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    let spamMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (mascotaAleatorio == 1) {
        spamMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(mascotaAleatorio == 2){
        spamMascotaEnemigo.innerHTML = 'capipepo'
    }else{
        spamMascotaEnemigo.innerHTML = 'ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else{
        ataqueEnemigo = 'Tierra'
    }

    Combate()

}

function Combate() {
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    }else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    } 
    revisarVidas()   
}

function revisarVidas() {
    if(vidaEnemigo == 0){
        crearMensajeFinal("Felicidades, ganaste")
    }else if(vidaJugador == 0){
        crearMensajeFinal("lo siento, perdiste")
    }
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con ' +ataqueJugador+ ', la mascota del enemigo atacó con '+ ataqueEnemigo + ' - '+resultado+' 🎉'

    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar  = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)

