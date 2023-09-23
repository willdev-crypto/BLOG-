function Filtrar() {
    let receitas = document.querySelectorAll(".receita_container");
    let filtros = document.querySelectorAll(".filtros_receitas input:checked");

    for (let receita of receitas) {
        receita.style.display = 'none';
        for (let filtro of filtros) {
            if (receita.classList.contains(filtro.name)) {
                receita.style.display = 'flex';
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

