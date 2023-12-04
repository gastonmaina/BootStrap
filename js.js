const btnEnviar = document.getElementById("btnEnviar")
const divLoading = document.getElementById("loadingIcon")
const formularioReservas = document.getElementById("formularioReservas")

// btnEnviar.addEventListener('click', ()=>{
//     divLoading.classList.add("popup")
//     divLoading.classList.remove("oculto")    
// })

formularioReservas.addEventListener("click", handleFormularioReserva)


function handleFormularioReserva(e){
    
    if(e.target.name == "btnDisponibilidad"){
        e.preventDefault();
        console.log(formularioReservas.fechaInicio.value, formularioReservas.fechaSalida.value)
    }
    
}