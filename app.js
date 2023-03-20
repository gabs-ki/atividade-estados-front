'use strict'

import { teste } from "http://localhost:8080/v1/senai/estado/sigla/:uf"


const mapa = document.querySelector('svg')




const getEstados = async (event) => {

    const estado = event.target.id.replace('BR-', '')
    const cep = await pesquisarCep(estado)

    const titleEsfera = document.createElement('h1')
    titleEsfera.classList.add('card__title')
    titleEsfera.textContent = cep.estado

}

mapa.addEventListener('click', (event, contato) => {

    let container = document.getElementById('card__container')
    container.replaceChildren()
    getEstados(event)
   
})
