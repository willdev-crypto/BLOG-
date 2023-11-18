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

let cadastro = {
    usuario: false,
    email: false,
    senha: false,
    confirmarSenha: false
}


//Usuário
function validarUsuario(){
    requisito_usuario.style.display = "block";
    if(usuarioInput.value == ""){
        requisito_usuario.style.color = "#fd6e6e";
        requisito_usuario.innerText = "- Campo Obrigatório";

        cadastro.usuario = false;
    }else if(usuarioInput.value.length >= 5){
        requisito_usuario.style.color = "#8fff97";
        requisito_usuario.innerText = "✔ Usuário Válido";

        cadastro.usuario = true;
    }else{
        requisito_usuario.style.color = "#fd6e6e";
        requisito_usuario.innerText = "- Usuário Inválido";

        cadastro.usuario = false;
    }
    console.log("Usuário : " + cadastro.usuario);
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

        cadastro.email = false;
    }else if(emailInput.value.includes('@') && emailInput.value.includes('.') && !emailInput.value.endsWith('.') && !emailInput.value.endsWith('@') && emailInput.value.length > 5){
        requisito_email.style.color = "#8fff97";
        requisito_email.innerText = "✔ Email Válido"; 

        cadastro.email = true;
    }else{
        requisito_email.style.color = "#fd6e6e";
        requisito_email.innerText = "- Email Inválido";
        cadastro.email = false;
    }
    console.log("Email : " + cadastro.email);
}
function ocultarValidadoresEmail(){
    requisito_email.style.display = "none";
}

let validacaoSenha = {
    digitos: false,
    especiais: false,
    maiuscula: false,
    minuscula: false,
    numero: false
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

        validacaoSenha.digitos = true;
    }else{
        numDigitos.style.color = "#fd6e6e";
        numDigitos.innerText = `- 8 digitos (${senhaInput.value.length - 8})`
        validacaoSenha.digitos = false;
    }

    
    //Caracteres Especiais
    if (caracteresEspeciais.some(caracter => senhaInput.value.includes(caracter))) {
        charEspecial.innerText = "✔ Caractere Especial";
        charEspecial.style.color = "#8fff97";

        validacaoSenha.especiais = true;
    } else {
        charEspecial.innerText = "- Caractere Especial";
        charEspecial.style.color = "#fd6e6e";

        validacaoSenha.especiais = false;
    }

    //Maiúscula
    if(/[A-Z]/.test(senhaInput.value)){
        maiuscula.innerText = "✔ Maiúscula";
        maiuscula.style.color = "#8fff97";

        validacaoSenha.maiuscula = true;
    } else {
        maiuscula.innerText = "- Maiúscula";
        maiuscula.style.color = "#fd6e6e";

        validacaoSenha.maiuscula = true;
    }

    //Minúscula
    if(/[a-z]/.test(senhaInput.value)){
        minuscula.innerText = "✔ Minúscula";
        minuscula.style.color = "#8fff97";

        validacaoSenha.minuscula = true;
    } else {
        minuscula.innerText = "- Minúscula";
        minuscula.style.color = "#fd6e6e";

        validacaoSenha.minuscula = false;
    }

    //Número
    if(/[0-9]/.test(senhaInput.value)){
        numero.innerText = "✔ Número";
        numero.style.color = "#8fff97";

        validacaoSenha.numero = true;
    } else {
        numero.innerText = "- Número";
        numero.style.color = "#fd6e6e";

        validacaoSenha.numero = false;
    }

    if( validacaoSenha.digitos &&
        validacaoSenha.especiais &&
        validacaoSenha.maiuscula &&
        validacaoSenha.minuscula &&
        validacaoSenha.numero){
            cadastro.senha = true;
        }else{
            cadastro.senha = false;
        }

    console.log("Senha : " + cadastro.senha);
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

        cadastro.confirmarSenha = false;
    }
    else if(senhaInput.value == confirmarSenhaInput.value){
        requisito_confirmar_senha.innerText = "✔ Senhas Iguais";
        requisito_confirmar_senha.style.color = "#8fff97";

        cadastro.confirmarSenha = true;
    }else{
        requisito_confirmar_senha.innerText = "- As senhas devem ser iguais";
        requisito_confirmar_senha.style.color = "#fd6e6e";

        cadastro.confirmarSenha = false;
    }

    console.log("Confirmar Senha : " + cadastro.confirmarSenha);
}
function ocultarValidadoresConfirmarSenha(){
    requisito_confirmar_senha.style.display = "none";
}

function enviarCadastro(){
    if( cadastro.usuario &&
        cadastro.email &&
        cadastro.senha &&
        cadastro.confirmarSenha){
            alert("Cadastro feito com sucesso!");
        }
    else{
        alert("Preencha os campos corretamente.")
    }
}

