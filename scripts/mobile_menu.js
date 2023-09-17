function mobileMenuShow(){
    let menu = document.querySelector(".mobile-menu");
    if(menu.classList.contains("open")){
        menu.classList.remove("open");
    }else{
        menu.classList.add("open");
    }
}