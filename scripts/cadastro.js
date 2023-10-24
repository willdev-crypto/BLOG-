let usuarioInput = document.querySelector('input[name="usuario"]');
let senhaInput = document.querySelector('input[name="senha"]');
let confirmarSenhaInput = document.querySelector('input[name="confirmar_senha"]');

let requisitos_senha = document.querySelectorAll(".requisito");
let requisito_confirmar_senha = document.querySelector(".requisito_confirmar_senha");
let requisito_usuario = document.querySelector(".requisito_usuario");

let numDigitos = document.querySelector(".num_digitos");
let charEspecial = document.querySelector(".especial");
let maiuscula = document.querySelector(".maiusculo");
let minuscula = document.querySelector(".minusculo");
let numero = document.querySelector(".numero");

let caracteresEspeciais = ['!','@','#','$','%','¨','&','*','(',')','_','-','=',"+",'[',']','{','}','|',"/",'^','~','.',',',':','?','"',"'"];

function validarSenha(){
    for(let i = 0; i < requisitos_senha.length; i++){
        requisitos_senha[i].style.display = "block";
    }
    
    //8 Dígitos
    if(senhaInput.value.length >= 8){
        numDigitos.style.color = "#8fff97";
        numDigitos.innerText = "- 8 digitos"
    }else{
        numDigitos.style.color = "#fd6e6e";
        numDigitos.innerText = `- 8 digitos (${senhaInput.value.length - 8})`
    }

    
    //Caracteres Especiais
    if (caracteresEspeciais.some(caracter => senhaInput.value.includes(caracter))) {
        charEspecial.style.color = "#8fff97";
    } else {
        charEspecial.style.color = "#fd6e6e";
    }

    //Maiúscula
    if(/[A-Z]/.test(senhaInput.value)){
        maiuscula.style.color = "#8fff97";
    } else {
        maiuscula.style.color = "#fd6e6e";
    }

    //Minúscula
    if(/[a-z]/.test(senhaInput.value)){
        minuscula.style.color = "#8fff97";
    } else {
        minuscula.style.color = "#fd6e6e";
    }

    //Número
    if(/[0-9]/.test(senhaInput.value)){
        numero.style.color = "#8fff97";
    } else {
        numero.style.color = "#fd6e6e";
    }
}
function ocultarValidadoresSenha(){
    for(let i = 0; i < requisitos_senha.length; i++){
        requisitos_senha[i].style.display = "none";
    }
}

function confirmarSenha(){
    requisito_confirmar_senha.style.display = "block";
    if(senhaInput.value == ""){
        requisito_confirmar_senha.innerText = "- Senha Vazia";
        requisito_confirmar_senha.style.color = "#fd6e6e";
    }
    else if(senhaInput.value == confirmarSenhaInput.value){
        requisito_confirmar_senha.innerText = "- As senhas devem ser iguais";
        requisito_confirmar_senha.style.color = "#8fff97";
    }else{
        requisito_confirmar_senha.innerText = "- As senhas devem ser iguais";
        requisito_confirmar_senha.style.color = "#fd6e6e";
    }
}
function ocultarValidadoresConfirmarSenha(){
    requisito_confirmar_senha.style.display = "none";
}

function validarUsuario(){
    requisito_usuario.style.display = "block";
    
    if(usuarioInput.value.length >= 5){
        requisito_usuario.style.color = "#8fff97";
        requisito_usuario.innerText = "Usuário Válido";
    }else{
        requisito_usuario.style.color = "#fd6e6e";
        requisito_usuario.innerText = "Usuário Inválido";
    }
}
function ocultarValidadoresUsuario(){
    requisito_usuario.style.display = "none";
}