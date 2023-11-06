
const queryString = window.location.search;

function obterParametroValor(nomeDoParametro) {
    const parametros = new URLSearchParams(queryString);
    return parametros.get(nomeDoParametro);
}

const titulo = obterParametroValor('titulo');
const ingredientes = JSON.parse(obterParametroValor('ingredientes'));
const preparo = JSON.parse(obterParametroValor('preparo'));
const img = obterParametroValor('img');

console.log('Título:', titulo);
console.log('Ingredientes:', ingredientes);
console.log('Preparo:', preparo);
console.log('URL da imagem:', img);

const container = document.querySelector('.container')
container.innerHTML = 
`
    <div class="receita">
    <h2 class="titulo">${titulo}</h2>
    <h2>Ingredientes:</h2>
    <ul class="ingredientes">

    </ul>
    <h2>Modo de preparo:</h2>
    <ol class="preparo">

    </ol>
    </div>
    <div class="imagem" style="background-image: linear-gradient(to left, #1D1D1D00, #1D1D1D), url('.${img}');">
        
    </div>
`
const ingred = document.querySelector('.ingredientes')
for(let i = 0; i < ingredientes.length; i++){
    ingred.innerHTML+= 
    `
        <li><input type="checkbox"> ${ingredientes[i]}</li>
    `
}
const prep = document.querySelector('.preparo')
for(let j = 0; j < preparo.length; j++){
    prep.innerHTML+= 
    `
        <li>${preparo[j]}</li>
    `
}
