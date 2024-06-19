//INPUTS
let cep = document.getElementById("endereco");
let labelStatusEndereco = document.getElementById("status-cadastro-endereco");
let inputsCadastro = document.querySelectorAll(".cadastro-input input")
let labelStatusNome = document.getElementById("status-cadastro-nome");
let labelStatusSenha = document.getElementById("status-cadastro-senha");
let labelStatusTelefone = document.getElementById("status-cadastro-telefone");
let labelStatusEmail = document.getElementById("status-cadastro-email");

//API
let viacep = "https://viacep.com.br/ws/01001000/json/";
//MENSAGEM
let iconeErro = '<img src="../img/paginas/login/erro-input.svg" alt=""></img>'
let iconeCorreto = '<img src="../img/paginas/login/sucesso-input.svg" alt=""></img>';
//FORMULARIO
let removerEndereco = document.getElementById("remover_endereco");
let btnCadastro = document.getElementById("cadastro-botao");

cep.addEventListener('input', async function buscarCep(){
    if(!cep.readOnly){
        if(cep.value.length != "0"){
            if(cep.value.length == 8){
                viacep = `https://viacep.com.br/ws/${cep.value}/json/`;
                let dados = await fetch(viacep);
                let dadosFormat = await dados.json();
                if (!("erro" in dadosFormat)){
                    cep.value = `${dadosFormat.bairro}, ${dadosFormat.localidade}, ${dadosFormat.uf}`; 
                    cep.style.border = "2px solid green";
                    labelStatusEndereco.innerHTML = `${iconeCorreto} Endereço localizado!`
                    labelStatusEndereco.style.color = "#327733"
                    cep.readOnly = true;
                    removerEndereco.style.display = "block";
                }
                else{ //CEP inválido
                    cep.style.border = "2px solid #8b1818";
                    labelStatusEndereco.style.color = "#8b1818"
                    labelStatusEndereco.innerHTML = `${iconeErro} O CEP inserido não existe!`
                }
            }
            else{
                cep.style.border = "2px solid #8b1818";
                labelStatusEndereco.style.color = "#8b1818"
                labelStatusEndereco.innerHTML = `${iconeErro} Número de dígitos inválido para o CEP`
            }
        }
        else{
            cep.style.border = "";
            labelStatusEndereco.innerHTML = "";
            removerEndereco.style.display = "none";
        }
    }
});

removerEndereco.addEventListener("click", function(){
    cep.value = "";
    cep.readOnly = false;
    removerEndereco.style.display = "none";
    labelStatusEndereco.innerHTML = "";
    cep.style.border = "";
})

btnCadastro.addEventListener('click', function(){
    let valida = true;
    inputsCadastro.forEach(input => {
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
            else if(input.name == "nome"){
                labelStatusNome.innerHTML = `${iconeErro} Digite o seu nome!`;
                labelStatusNome.style.color = "#8b1818";
            }
            else if(input.name == "telefone"){
                labelStatusTelefone.innerHTML = `${iconeErro} Digite o seu telefone!`;
                labelStatusTelefone.style.color = "#8b1818";
            }
            else if(input.name == "endereco"){
                labelStatusEndereco.innerHTML = `${iconeErro} Digite o seu endereço!`;
                labelStatusEndereco.style.color = "#8b1818";
            } 
        }
        else{
            if(input.name == "email"){
                labelStatusEmail.innerHTML = `${iconeCorreto}`;
                labelStatusEmail.style.color = "#327733";
            }
            else if(input.name == "senha"){
                labelStatusSenha.innerHTML = `${iconeCorreto}`;
                labelStatusSenha.style.color = "#327733";
            }
            else if(input.name == "nome"){
                labelStatusNome.innerHTML = `${iconeCorreto}`;
                labelStatusNome.style.color = "#327733";
            }
            else if(input.name == "telefone"){
                labelStatusTelefone.innerHTML = `${iconeCorreto}`;
                labelStatusTelefone.style.color = "#327733";
            }
        }
   });
   if(valida){
        window.location.href = "../index.html";
    }
})