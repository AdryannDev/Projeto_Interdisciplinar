let cidades = document.querySelector("#cidade_select");

function localizacao(){
    var titulo_cidade = document.getElementById("titulo_cidade");
    alert(cidades.value);
    titulo_cidade.innerHTML = cidades.value;
}