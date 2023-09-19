function Filtrar() {
    let receitas = document.querySelectorAll(".receita");
    let filtros = document.querySelectorAll(".filtros_receitas input:checked");

    for (let receita of receitas) {
        receita.classList.remove("receitas-animadas"); // Remove a classe de animação
        receita.style.display = 'none';
        for (let filtro of filtros) {
            if (receita.classList.contains(filtro.name)) {
                receita.style.display = 'grid';
                receita.classList.add("receitas-animadas"); // Adiciona a classe de animação
            }
        }
    }
}

function showFiltros() {
    let filtro = document.querySelector(".filtros_receitas");
    if (filtro.classList.contains("open")) {
        filtro.classList.remove("open");
    } else {
        filtro.classList.add("open");
    }
}
