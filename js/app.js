// Seleccion de elementos del Dom
let resultado = document.querySelector('.resultado')
let input = document.querySelector('.input')
let boton = document.querySelector('.boton')


const funcionCalcula = (valor) => {
    return (100*(Math.E ** (-0.0572*valor) ) + 35)
}

const renderizarResultado = (resultadoOperacion) => {
    resultado.innerHTML = ''
    resultado.innerHTML = resultadoOperacion
    input.value = ''
}

boton.addEventListener('click', () => {
    let valorInput = input.value
    valorInput = parseInt(valorInput)
    let resultadoOperacion = funcionCalcula(valorInput)
    renderizarResultado(resultadoOperacion)
})