let cidades = document.querySelector("#cidade_select").value;

function localizacao(){
    document.getElementById("titulo_cidade").innerText = cidades.innerHTML;
}