const historias = [
    {
        titulo:'Polenta Cremosa',
        imagem: './img/polenta-cremosa-02.webp',
        texto: 'A Polenta é um alimento típico da culinária italiana, mas que tem amplo uso e aceitação em diversos países, como Argentina, Brasil e Paraguai. Sua base é a farinha de milho e antes da chegada de imigrantes italianos, já se consumia no Brasil uma forma de polenta de milho, que pode ter a consistência de uma polenta firme ou cremosa, mas que nunca era grelhado ou frito.',
        link: './historias/polenta.html'
    },
    {
        titulo:'Estrogonofe',
        imagem: './img/estrogonofe.png',
        texto: 'O estrogonofe (ou strogonoff) é um prato russo que se espalhou pelo mundo e caiu no gosto do brasileiro. Embora existam diversas teorias sobre sua origem, assim como mencionamos, a mais reconhecida é a de ser uma criação de um chef francês que trabalhava para a família russa Stroganov (ou Strogonov).',
        link: './historias/estrogonofe.html'
    },
    {
        titulo:'Espaguete',
        imagem: './img/espagueti3.jpg',
        texto: 'Origem chinesa Consta que estudiosos do Instituto de Geologia e Geofísica da Academia Chinesa de Ciências encontraram um prato intocado de espaguete no povoado de Lajia. A comida teria sido deixada ali há cerca de 4 mil anos.E não porque alguém achou que o gosto estava ruim ou algo do tipo: as pessoas tiveram que sair correndo antes mesmo de comer a massa por conta de uma catástrofe natural, possivelmente um terremoto. Sinal disso é que o prato estava de cabeça para baixo.Endireitando de novo a narrativa, lembremos que o mercador italiano Marco Polo visitou a China no século 13. Os mais afobados podem até engolir a versão da história que diz que foi ele quem introduziu o espaguete em território italiano.',
        link: './historias/espaguete.html'
    },
    {
        titulo:'Feijoada',
        imagem: './img/feijoada1.jpg',
        texto: 'A culinária brasileira é um retrato de nossa cultura. Isso porque o Brasil é um país miscigenado, ou seja, possui muitos elementos que compõem o imaginário popular.Graças a nossa variedade climática, ingredientes diferentes, história e criatividade, que muitos povos invejam, somos capazes de criar pratos incríveis, muitas vezes usando muito pouco. Mas por que estamos falando sobre tudo isso? Muito provavelmente, você já deve ter ouvido falar que um dos nossos principais pratos, a feijoada, nasceu das senzalas brasileiras durante a época da escravidão.',
        link: './historias/feijoada.html'
    },
    {
        titulo:'Sushi',
        imagem: './img/sushi2.jpg',
        texto: 'Tudo Começou por volta do século IV a.C os japoneses precisavam conservar o peixe, alimento abundante neste país.Na falta de geladeiras a solução era armazenar camadas de peixe e arroz em barris de madeira que ficavam maturando por até 3 anos.A fermentação do grão liberava ácido láctico garantindo assim a conservação do peixe. Entretanto, nesta técnica o arroz fermentado tinha que ser descartado ao final do processo.',
        link: './historias/sushi.html'
    },
]

const container_historias = document.querySelector('.container_historias')

for(let i = 0; i < historias.length; i++){
    let historia = historias[i];

    container_historias.innerHTML += 
    `
    <li class="historia" onclick="location.href='${historia.link}';">
        <div class="titulo_imagem">
            <h1><a href="./historias/polenta.html">${historia.titulo}</a></h1>
            <img src="${historia.imagem}" alt=""">
        </div>
        <div class="conteudo">
            <h3>História do Prato</h3>
            <p>${historia.texto}</p>
        </div>
    </li>
    `
}