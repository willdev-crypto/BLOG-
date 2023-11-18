//Array de Objetos de Receitas
const receitas = [
    {
        titulo: "Polenta",
        descricao: "A polenta é um prato tradicional italiano feito com farinha de milho.",
        img: "./img/polenta2.jpg",
        classificacao: "petisco almoco jantar cafe",
        ingredientes: [
            '2 litros de água',
            '400 g de fubá',
            '2 colheres (sopa) de manteiga',
            '1 colher (sopa) de sal'
        ],
        preparo:[
            'Em uma panela, leve a água ao fogo e acrescente o sal e a manteiga.',
            'Quando iniciar a fervura, acrescente o fuba e mexa sem parar para não empelotar.',
            'Deixe a polenta cozinhar por 30 minutos em fogo baixo.',
            'Despeje a polenta em um refratário, salpique com parmesão e cubra com o molho de sua preferência.'
        ]
    },
    {
        titulo: "Estrogonofe de Frango",
        descricao: "Uma versão irresistível do estrogonofe com pedaços suculentos de frango em um molho cremoso.",
        img: "./img/estrogonoff2.jpg",
        classificacao: "almoco jantar",
        ingredientes: [
            '500 g de peito de frango cortado em cubos',
            '1 cebola picada',
            '1 dente de alho picado',
            '1 colher de manteiga ou margarina',
            '2 colheres (sopa) de maionese',
            '1 colher (chá) de mostarda',
            '1/2 copo de ketchup',
            '1 copo ou sachê de cogumelos',
            '1 caixa de creme de leite',
            'batata palha a gosto',
            'pimenta a gosto'
            ],
        preparo: [
            'Tempere o frango em cubos com sal, pimenta e a maionese.',
            'Em uma frigideira grande derreta a manteiga.',
            'Doure a cebola e o alho.',
            'Adicione o frango temperado e deixe dourando.',
            'Adicione os cogumelos, a mostarda e em seguida o ketchup.',
            'Acrescente o creme de leite e mexa bem.',
            'Faça as correções de sal e pimenta, se achar necessário.',
            'Sirva com arroz branco e batata palha.',
        ]
    },
    {
        titulo: "Espaguete ao Molho Pesto",
        descricao: "Um prato clássico italiano com molho pesto fresco e ingredientes de alta qualidade.",
        img: "./img/espagueti1.jpg",
        classificacao: "almoco jantar",
        ingredientes:[
            '1 pacote de macarrão tipo espaguete',
            '1 cebola picada',
            '1 dente de alho picado',
            '1 Salsinha picada',
            '2 molhos de tomate',
            'sal a gosto',
            'pimenta a gosto',
        ],
        preparo:[
            'Encha uma panela com água, leve ao fogo alto e tampe, deixe que a panela aqueça e quando estiver fervendo coloque a água e o óleo',
            'Coloque a tampa na panela e cozinhe o macarrão por mais 5 minutos ou até que ele esteja bem cozido',
            'Doure a cebola e o alho',
            'Desligue o fogo e com muito cuidado escorra a água do seu macarrão, logo em seguida jogue água gelada em cima, pode ser da torneira mesmo',
            'Com a mesma panela, ligue o fogo baixo e coloque mais uma colher de óleo junto da cebola e deixe cozinhar um pouco',
            'Acrescente o alho, mais um pouquinho de sal e a salsinha. Em seguida incorpore o molho de tomate e misture',
            'Faça as correções de sal e pimenta, se achar necessário.',
            'Depois de alguns minutos refogando esse molho, acrescente o seu macarrão e misture.'
        ]
    },
    {
        titulo: "Feijoada Brasileira",
        descricao: "Um prato icônico da culinária brasileira, repleto de sabores e acompanhamentos deliciosos.",
        img: "./img/feijoada1.jpg",
        classificacao: "jantar",
        ingredientes:[
            '1 kg de feijão preto',
            '2 línguas defumadas ou salgadas',
            '1/2 kg de costelinha de porco salgada',
            '1/2 kg de lingüiça calabresa defumada',
            '1/4 kg de toucinho defumado',
            'sal a gosto',
            'pimenta a gosto'
        ],
        preparo:[
            'Escolha o feijão e deixe de molho por 12 horas.',
            'Lave bem as carnes salgadas, corte em pedaços e deixe de molho em água por 12 horas, trocando a água pelo menos duas vezes.',
            'Doure a cebola e o alho.',
            'Coloque o feijão para cozinhar em bastante água com as folhas de louro.',
            'Em uma panela à parte, cozinhe por ½ hora as carnes salgadas, escorra a água e reserve.',
            'Quando o feijão estiver começando a amolecer, coloque as carnes, a lingüiça e o paio e deixe ferver em fogo brando até estar tudo bem cozido (leva algum tempo: de 2 a 3 horas)',
            'Faça as correções de sal e pimenta, se achar necessário.',
            'Sirva bem quente acompanhado de couve picada fina e refogada, farinha de mandioca crua, gomos de laranja e uma cerveja bem gelada.',
        ]
    },
    {
        titulo: "Sushi Delicioso",
        descricao: "Uma seleção de sushis frescos e saborosos que são um verdadeiro deleite para os amantes de comida japonesa.",
        img: "./img/sushi2.jpg",
        classificacao: "petisco",
        ingredientes:[
            '2 xícaras (chá) de arroz japonês',
            '2 xícaras (chá) de água',
            '1/2 xícara (chá) de vinagre japonês para sushi (tozan)',
            '1/2 xícaras (chá) de açúcar',
            '1/2 colher (café) de sal',
            'sal a gosto',
            '1 pacote de nori (algas)'
        ],
        preparo:[
            'Em uma panela colocar o arroz e a água e levar ao fogo para cozinhar.',
            'Misturar todos os ingredientes em uma tigela, misturando aos poucos, ao arroz cozido.',
            'Reservar cerca de 1 colher (sopa) do tempero para fechar os sushis.',
            'Colocar todos os ingredientes do sushi de verduras em uma panela, exceto o gengibre e deixar cozinhar até ficarem macios',
            'Com a ajuda de uma esteira própria para enrolar sushi, coloque o nori, com o lado que brilha voltado para dentro (onde se colocará o arroz).',
            'Acrescente o alho, mais um pouquinho de sal e a salsinha. Em seguida incorpore o molho de tomate e misture',
            'em no centro colocar 2 tiras de cenoura, 2 tiras de vagem e tirinhas de gengibre (1 fileira).',
            'Tire a esteirinha e corte os sushis, com espessura de cerca de 2 dedos cada um.'
        ]
    },
    {
        titulo: "Petit Gâteau",
        descricao: "O Petit Gâteau, que significa “pequeno bolo” em francês, é uma sobremesa clássica que agrada a todos.",
        img: "./img/petit2.jpg",
        link: "./receitas/petit.html",
        classificacao: "sobremesa",
        ingredientes:[
            '200 gramas de chocolate meio amargo',
            '2 colheres de manteiga sem sal',
            '2 ovos',
            '2 gemas',
            'Meia xícara de chá de açúcar',
        ],
        preparo:[
            'Derreta em banho-maria 200 gramas de chocolate meio amargo e 2 colheres de sopa sem sal. Reserve.',
            'Na bateira, coloque 2 ovos, 2 gemas, meia xícara de chá de açúcar. Bata até obter um creme claro.',
            'Em seguida, adicione a mistura de chocolate, 2 colheres de sopa de farinha de trigo e misture.',
            'Transfira a mistura para forminhas untadas com manteiga e enfarinhadas.',
            'Leve para assar em forno preaquecido a 200 graus Celsius de 6 a 10 minutos.',
            'Desenforme ainda quente e sirva com sorvete de creme.'
        ]
    },
];
let main = document.querySelector(".receitas");

//Percorrendo o Array para pegar e atribuir os valores
for (let i = 0; i < receitas.length; i++) {
    const receita = receitas[i];

    //Passando para os hrefs uma queryString ( que guarda os valores da Array ).
    const url = `./receitas/temp.html?titulo=${encodeURIComponent(receita.titulo)}&ingredientes=${encodeURIComponent(JSON.stringify(receita.ingredientes))}&preparo=${encodeURIComponent(JSON.stringify(receita.preparo))}&img=${encodeURIComponent(receita.img)}`;

    //Populando as receitas na página index.html
    main.innerHTML +=
        `
        <a class="receita_container ${receita.classificacao}" style="background-image: url(${receita.img});" href="${url}">
            <div class="receita_titulo">${receita.titulo}</div>
            <div class="receita_texto">${receita.descricao}</div>
        </a>
    `;

    console.log(receita);
}
