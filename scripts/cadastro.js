let usuarioInput = document.querySelector('input[name="usuario"]');
let senhaInput = document.querySelector('input[name="senha"]');
let confirmarSenhaInput = document.querySelector('input[name="confirmar_senha"]');
let emailInput = document.querySelector('input[name="email"]');

let requisitos_senha = document.querySelectorAll(".requisito");
let requisito_confirmar_senha = document.querySelector(".requisito_confirmar_senha");
let requisito_usuario = document.querySelector(".requisito_usuario");
let requisito_email = document.querySelector(".requisito_email");

let numDigitos = document.querySelector(".num_digitos");
let charEspecial = document.querySelector(".especial");
let maiuscula = document.querySelector(".maiusculo");
let minuscula = document.querySelector(".minusculo");
let numero = document.querySelector(".numero");

let caracteresEspeciais = ['!','@','#','$','%','¨','&','*','(',')','_','-','=',"+",'[',']','{','}','|',"/",'^','~','.',',',':','?','"',"'"];

//Usuário
function validarUsuario(){
    requisito_usuario.style.display = "block";
    if(usuarioInput.value == ""){
        requisito_usuario.style.color = "#fd6e6e";
        requisito_usuario.innerText = "- Campo Obrigatório";
    }else if(usuarioInput.value.length >= 5){
        requisito_usuario.style.color = "#8fff97";
        requisito_usuario.innerText = "✔ Usuário Válido";
    }else{
        requisito_usuario.style.color = "#fd6e6e";
        requisito_usuario.innerText = "- Usuário Inválido";
    }
}
function ocultarValidadoresUsuario(){
    requisito_usuario.style.display = "none";
}

//Email
function validarEmail(){
    requisito_email.style.display = "block";
    if(emailInput.value == ""){
        requisito_email.style.color = "#fd6e6e";
        requisito_email.innerText = "- Campo Obrigatório";
    }else if(emailInput.value.includes('@') && emailInput.value.includes('.') && !emailInput.value.endsWith('.') && !emailInput.value.endsWith('@') && emailInput.value.length > 5){
        requisito_email.style.color = "#8fff97";
        requisito_email.innerText = "✔ Email Válido"; 
    }else{
        requisito_email.style.color = "#fd6e6e";
        requisito_email.innerText = "- Email Inválido";
    }
}
function ocultarValidadoresEmail(){
    requisito_email.style.display = "none";
}


//Senha
function validarSenha(){
    for(let i = 0; i < requisitos_senha.length; i++){
        requisitos_senha[i].style.display = "block";
    }
    
    //8 Dígitos
    if(senhaInput.value.length >= 8){
        numDigitos.style.color = "#8fff97";
        numDigitos.innerText = "✔ 8 digitos"
    }else{
        numDigitos.style.color = "#fd6e6e";
        numDigitos.innerText = `- 8 digitos (${senhaInput.value.length - 8})`
    }

    
    //Caracteres Especiais
    if (caracteresEspeciais.some(caracter => senhaInput.value.includes(caracter))) {
        charEspecial.innerText = "✔ Caractere Especial";
        charEspecial.style.color = "#8fff97";
    } else {
        charEspecial.innerText = "- Caractere Especial";
        charEspecial.style.color = "#fd6e6e";
    }

    //Maiúscula
    if(/[A-Z]/.test(senhaInput.value)){
        maiuscula.innerText = "✔ Maiúscula";
        maiuscula.style.color = "#8fff97";
    } else {
        maiuscula.innerText = "- Maiúscula";
        maiuscula.style.color = "#fd6e6e";
    }

    //Minúscula
    if(/[a-z]/.test(senhaInput.value)){
        minuscula.innerText = "✔ Minúscula";
        minuscula.style.color = "#8fff97";
    } else {
        minuscula.innerText = "- Minúscula";
        minuscula.style.color = "#fd6e6e";
    }

    //Número
    if(/[0-9]/.test(senhaInput.value)){
        numero.innerText = "✔ Número";
        numero.style.color = "#8fff97";
    } else {
        numero.innerText = "- Número";
        numero.style.color = "#fd6e6e";
    }
}
function ocultarValidadoresSenha(){
    for(let i = 0; i < requisitos_senha.length; i++){
        requisitos_senha[i].style.display = "none";
    }
}

//Confirmar Senha
function confirmarSenha(){
    requisito_confirmar_senha.style.display = "block";
    if(senhaInput.value == ""){
        requisito_confirmar_senha.innerText = "- Senha Vazia";
        requisito_confirmar_senha.style.color = "#fd6e6e";
    }
    else if(senhaInput.value == confirmarSenhaInput.value){
        requisito_confirmar_senha.innerText = "✔ Senhas Iguais";
        requisito_confirmar_senha.style.color = "#8fff97";
    }else{
        requisito_confirmar_senha.innerText = "- As senhas devem ser iguais";
        requisito_confirmar_senha.style.color = "#fd6e6e";
    }
}
function ocultarValidadoresConfirmarSenha(){
    requisito_confirmar_senha.style.display = "none";
}

