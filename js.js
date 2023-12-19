import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const appSetting = {
    databaseURL: "https://todoapp-278d1-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app) 
const reservasInDB = ref(database, "hotel")


const btnEnviar = document.getElementById("btnEnviar")
const divLoading = document.getElementById("loadingIcon")
const formularioReservas = document.getElementById("formularioReservas")
const modalReservas = document.getElementById("modalReservas")

formularioReservas.addEventListener("click", handleFormularioReserva)

onValue(reservasInDB, function(snapshot){
    if(snapshot.exists()){
        
        // let datosInDB = Object.entries(snapshot.val())
        // console.log(datosInDB)
    }
    
})

function handleFormularioReserva(e){
    if(e.target.name == "btnDisponibilidad"){
        e.preventDefault();
        let fechaIngreso = (new Date(formularioReservas.fechaInicio.value)).getTime()
        let fechaEgreso = (new Date(formularioReservas.fechaSalida.value)).getTime()
        if(fechaEgreso<=fechaIngreso){
            alert("Ingrese una fecha correcta")
        }else{
            push(reservasInDB, {
                ingreso: formularioReservas.fechaInicio.value,
                egreso: formularioReservas.fechaSalida.value
            })
        }
    }   
}