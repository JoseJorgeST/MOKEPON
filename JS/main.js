
const sectionReiniciar  = document.getElementById('reiniciar')
const botonFuego = document.getElementById('boton-fuego')
const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSelecionarAtaque = document.getElementById('seleccionar-ataque')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionSelecionarAtaque.style.display = 'none'  
sectionReiniciar.style.display = 'none' 

const sectionSelecionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spamMascotaJugador = document.getElementById('mascota-jugador');

const spamMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;


function iniciarJuego() {   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
    botonFuego.addEventListener('click', ataqueFuego)    
    botonAgua.addEventListener('click', ataqueAgua)    
    botonTierra.addEventListener('click', ataqueTierra)    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
   
    sectionSelecionarMascota.style.display = 'none'    
    sectionSelecionarAtaque.style.display = 'flex'

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
    let nuevoAtacanteDelJugador = document.createElement('p');
    let nuevoAtacanteDelEnemigo = document.createElement('p');
    sectionMensaje.innerHTML = resultado
    nuevoAtacanteDelJugador.innerHTML = ataqueJugador
    nuevoAtacanteDelEnemigo.innerHTML = ataqueEnemigo  
    ataqueDelJugador.appendChild(nuevoAtacanteDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtacanteDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
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

