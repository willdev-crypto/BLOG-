//Pegando a queryString dada pelo href da historia
//Ver : historia.js
const queryString = window.location.search;

//Tratando os valores da queryString
function obterParametroValor(nomeDoParametro) {
    const parametros = new URLSearchParams(queryString);
    return parametros.get(nomeDoParametro);
}

//Guardando os valores em variáveis
const titulo = obterParametroValor('titulo');
const imagem = obterParametroValor('imagem');
const texto = obterParametroValor('texto');
const texto_completo = obterParametroValor('texto_completo');

//Conferindo os valores no console
console.log("Titulo: " + titulo);
console.log("Imagem: " + imagem)
console.log("Texto: " + texto)
console.log("Texto Completo: " + texto_completo)

//Pegando o container '.historia' do 'temp_historia.html'
const container_historias = document.querySelector('.historia');

    //Populando a página 'temp_historia.html' com os devidos valores
    container_historias.innerHTML += 
    `
            <img src=".${imagem}"
                alt="${titulo}" title="${titulo}">
            <h2>${titulo}</h2>
            <p>${texto_completo}</p>
    `