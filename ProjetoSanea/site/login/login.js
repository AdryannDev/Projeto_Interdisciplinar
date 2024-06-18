//INPUTS
let inputsLogin = document.querySelectorAll(".login-input input");
let btnLogin = document.getElementById("login-botao");
let labelStatusEmail = document.getElementById("status-login-email");
let labelStatusSenha = document.getElementById("status-login-senha");
//MENSAGEM
let iconeErro = '<img src="../../img/paginas/login/erro-input.svg" alt=""></img>'
let iconeCorreto = '<img src="../../img/paginas/login/sucesso-input.svg" alt=""></img>';

btnLogin.addEventListener("click", function(){
    let valida = true;
    inputsLogin.forEach(input => {
        if(input.value == ""){
            valida = false;
            if(input.name == "email"){
                labelStatusEmail.innerHTML = `${iconeErro} Digite o seu email!`;
                labelStatusEmail.style.color = "#8b1818";
            }
            else if(input.name == "senha"){
                labelStatusSenha.innerHTML = `${iconeErro} Digite sua senha!`;
                labelStatusSenha.style.color = "#8b1818";
            }
        }
        else{
            if(input.name == "email"){
                labelStatusEmail.innerHTML = ``;
            }
            else if(input.name == "senha"){
                labelStatusSenha.innerHTML = ``;
            }
        }
    });
    if(valida){
        window.location.href = "../index.html";
    }
})