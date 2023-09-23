const receitas = [
    {
        titulo: "Estrogonofe de Frango",
        descricao: "Uma versão irresistível do estrogonofe com pedaços suculentos de frango em um molho cremoso.",
        img: "./img/estrogonoff2.jpg",
        link: "./receitas/Estrogonofe.html",
        classificacao: "almoco jantar"
    },
    {
        titulo: "Espaguete ao Molho Pesto",
        descricao: "Um prato clássico italiano com molho pesto fresco e ingredientes de alta qualidade.",
        img: "./img/espagueti1.jpg",
        link: "./receitas/espaguete.html",
        classificacao: "almoco jantar"
    },
    {
        titulo: "Feijoada Brasileira",
        descricao: "Um prato icônico da culinária brasileira, repleto de sabores e acompanhamentos deliciosos.",
        img: "./img/feijoada1.jpg",
        link: "./receitas/feijoada.html",
        classificacao: "jantar"
    },
    {
        titulo: "Sushi Delicioso",
        descricao: "Uma seleção de sushis frescos e saborosos que são um verdadeiro deleite para os amantes de comida japonesa.",
        img: "./img/sushi2.jpg",
        link: "./receitas/sushi.html",
        classificacao: "petisco"
    },
    {
        titulo: "Petit Gâteau",
        descricao: "O Petit Gâteau, que significa “pequeno bolo” em francês, é uma sobremesa clássica que agrada a todos.",
        img: "./img/petit2.jpg",
        link: "./receitas/petit.html",
        classificacao: "sobremesa"
    },

    
  ]
  
  let main = document.querySelector(".receitas");
  for(let i = 0; i < receitas.length; i++){
      main.innerHTML += 
      `
      <a class="receita_container ${receitas[i].classificacao}" style="background-image: url(${receitas[i].img});" href="${receitas[i].link}">
            <div class="receita_titulo">${receitas[i].titulo}</div>
            <div class="receita_texto">${receitas[i].descricao}</div>
        </a>
      `
  }