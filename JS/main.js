
const sectionReiniciar  = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSelecionarAtaque = document.getElementById('seleccionar-ataque')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionSelecionarAtaque.style.display = 'none'  
sectionReiniciar.style.display = 'none' 

const sectionSelecionarMascota = document.getElementById('seleccionar-mascota')
const spamMascotaJugador = document.getElementById('mascota-jugador');

const spamMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorataques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('verMapa')
const mapa = document.getElementById('mapa')



let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let vidaJugador = 3;
let vidaEnemigo = 3;
let opcionDeMokepon;
let inputHipodoge
let inputCapipepo
let mascotaJugador
let inputRatigueya
let ataquesMokepon
let botonAgua 
let botonTierra 
let botonFuego 
let botones = []
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueenemigo
let victoriasJugador = 0
let victoriasEnemigos = 0



class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('HIPODOGE', './image/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('CAPIPEPO', 'image/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('RATIGUEYA', 'image/mokepons_mokepon_ratigueya_attack.png', 5);



hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua' },
    {nombre: '💧', id:'boton-agua' },
    {nombre: '💧', id:'boton-agua' },
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌱', id:'boton-tierra' },
    {nombre: '🌱', id:'boton-tierra' },
    {nombre: '🌱', id:'boton-tierra' },
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua' }
)

ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra' },
    {nombre: '💧', id:'boton-agua' }
)

mokepones.push(hipodoge,capipepo,ratigueya);

function iniciarJuego() {   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    sectionVerMapa.style.display = 'none'

    mokepones.forEach(mokepon => {
        opcionDeMokepon = `
        <label for=${mokepon.nombre} class="targetaMascota">
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        `      
        contenedorTarjetas.innerHTML += opcionDeMokepon;

        inputHipodoge = document.getElementById('HIPODOGE');
        inputCapipepo = document.getElementById('CAPIPEPO');
        inputRatigueya = document.getElementById('RATIGUEYA');
    }
    );

       
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
   
    sectionSelecionarMascota.style.display = 'none'    
    sectionSelecionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) { 
        spamMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id 
    } else if (inputCapipepo.checked) { 
        spamMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) { 
        spamMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else { 
        alert('Selecciona una mascota') 
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    } 
    MostrarAtaques(ataques)
}

function MostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="btn-juego BATaque" >${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')

    botones =  document.querySelectorAll('.BATaque')
  
}

function secuenciaAtaque(){
    botones.forEach(
        (boton) => {
            boton.addEventListener('click', (e) => {
                if (e.target.textContent === '🔥') {
                    ataqueJugador.push('Fuego')
                    console.log(ataqueJugador)
                    boton.style.background = '#FDFEFE'
                    boton.disabled = true
                }else if(e.target.textContent === '💧'){
                    ataqueJugador.push('Agua')
                    console.log(ataqueJugador)
                    boton.style.background = '#FDFEFE'
                    boton.disabled = true
                }else{
                    ataqueJugador.push('Tierra')
                    console.log(ataqueJugador)
                    boton.style.background = '#FDFEFE'
                    boton.disabled = true
                }
                ataqueAleatorioEnemigo() 
            })
        }
    )
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)   

    spamMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;

    sectionVerMapa.style.display = 'flex'
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo
    
        .length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('Fuego')
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('Agua')
    }else{
        ataqueEnemigo.push('Tierra')
    }
    //
    console.log('Enemigo '+ataqueEnemigo)
    iniciarPelea()

}

function iniciarPelea() {
    if(ataqueJugador.length === 5){
        Combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueenemigo = ataqueEnemigo[enemigo]
}

function Combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidaJugador.innerHTML =victoriasJugador
        }else if(ataqueJugador[index] === 'Fuego'  && ataqueEnemigo[index] == 'Tierra'){
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidaJugador.innerHTML =victoriasJugador
        }else if(ataqueJugador[index] === 'Agua' && ataqueEnemigo[index] === 'Fuego'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidaJugador.innerHTML =victoriasJugador
        }else if(ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Agua'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidaJugador.innerHTML =victoriasJugador
        }else{
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigos++
            spanVidaEnemigo.innerHTML = victoriasEnemigos
        }
    }
   
    revisarVidas()   
}

function revisarVidas() {
    if(victoriasJugador === victoriasEnemigos){
        crearMensajeFinal("Esto fue un empate")
    }else if(victoriasJugador > victoriasEnemigos){
        crearMensajeFinal("Felicidades, GANASTE")
    }else{
        crearMensajeFinal("Lo siento, PERDISTE")
    }
}

function crearMensaje(resultado) {
    let nuevoAtacanteDelJugador = document.createElement('p');
    let nuevoAtacanteDelEnemigo = document.createElement('p');
    sectionMensaje.innerHTML = resultado
    nuevoAtacanteDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtacanteDelEnemigo.innerHTML = indexAtaqueenemigo  
    ataqueDelJugador.appendChild(nuevoAtacanteDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtacanteDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal

    

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

