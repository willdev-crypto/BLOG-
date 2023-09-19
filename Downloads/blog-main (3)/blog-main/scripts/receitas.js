const receitas = [
    {
        imagem: "./img/estrogonoff2.jpg",
        titulo: "Estrogonofe de Frango",
        link: "./receitas/Estrogonofe.html",
        texto: "O estrogonofe é um prato russo que se popularizou no Brasil nos anos 1970 e é amado por muitos.",
        imagem_bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
    },
    {
        imagem: "./img/espagueti3.jpg",
        titulo: "Espaguete",
        link: "./receitas/espaguete.html",
        texto: "O espaguete é um tipo de macarrão longo e fino acompanhado de molho, originário da Itália.",
        imagem_bandeira: "https://static.todamateria.com.br/upload/ba/nd/bandeira-da-italia-og.jpg",
    },
    {
        imagem: "./img/feijoada1.jpg",
        titulo: "Feijoada",
        link: "./receitas/feijoada.html",
        texto: "A feijoada é feita com feijão preto e uma variedade de carnes de porco: orelha, rabo e pé",
        imagem_bandeira: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg",
    },
    {
        imagem: "./img/sushi2.jpg",
        titulo: "Sushi",
        link: "./receitas/sushi.html",
        texto: "O sushi é um dos pratos mais tradicionais da culinária japonesa.",
        imagem_bandeira: "https://s4.static.brasilescola.uol.com.br/be/2022/11/bandeira-do-japao.jpg",
    },
    {
        imagem: "./img/petit2.jpg",
        titulo: "Petit Gâteau",
        link: "./receitas/petit.html",
        texto: "O Petit Gâteau, que significa “pequeno bolo” em francês, é uma sobremesa clássica que agrada a todos.",
        imagem_bandeira: "https://static.todamateria.com.br/upload/fr/an/frana_a.jpg",
    }
]

let receita = document.querySelector(".container_receitas");
  for(let i = 0; i < receitas.length; i++){
    receita.innerHTML += 
    `
        <div class="container_receita">
            <div class="receita_imagem"><img src="${receitas[i].imagem}"></div>
            <div class="receita_titulo">
                <h1><a href="${receitas[i].link}">${receitas[i].titulo}</a></h1>
                <p>
                    ${receitas[i].texto}
                </p>
            </div>
            <div class="receita_bandeira" style="background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url('${receitas[i].imagem_bandeira}');"></div>
         </div>
    `
}