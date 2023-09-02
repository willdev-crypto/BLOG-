function Filtrar(value) {
    let receitas = document.getElementsByClassName("receita");
    for (let receita of receitas) {
        if (receita.classList.contains(value)) {
            receita.style.display = 'grid';
        } else {
            receita.style.display = 'none';
        }
    }
}

function exibirTodas() {
    let receitas = document.getElementsByClassName("receita");
    for (let receita of receitas) {
        receita.style.display = 'grid';
    }
}