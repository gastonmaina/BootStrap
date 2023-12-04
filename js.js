const btnEnviar = document.getElementById("btnEnviar")
const divLoading = document.getElementById("loadingIcon")

btnEnviar.addEventListener('click', ()=>{
    divLoading.classList.add("popup")
    divLoading.classList.remove("oculto")    
})