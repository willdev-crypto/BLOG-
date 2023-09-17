function Filtrar() {
    let receitas = document.getElementsByClassName("receita");
    let filtros = document.getElementsByClassName("filtros_receitas")[0].getElementsByTagName("input");
    
    for (let receita of receitas) {
        receita.style.display = 'none';
        for (let filtro of filtros) {
            if (filtro.checked && receita.classList.contains(filtro.name)) {
                receita.style.display = 'grid';
            }
        }
    }
}

function showFiltros(){
    let filtro = document.querySelector(".filtros_receitas");
    if(filtro.classList.contains("open")){
        filtro.classList.remove("open");
    }else{
        filtro.classList.add("open");
    }
}