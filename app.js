'use strict'



const mapa = document.querySelector('svg')




const getEstados = async (event) => {

    const estado = event.target.id.replace('BR-', '')
    
    console.log(estado)
}

mapa.addEventListener('click', (event) => {

  
    getEstados(event)
   
})
