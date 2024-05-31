let btn_fil_doenca = document.getElementById("filtro-doencas");
let fil_doenca = document.getElementById("input-filtro-doenca");
let cancelar_fil_doenca = document.getElementById("cancelar-pesquisa-doenca");
let cards_doencas = document.querySelectorAll(".card-doenca");
let nenhuma_doenca = document.querySelector(".card-nenhuma-doenca");

if(!fil_doenca.value){
    cancelar_fil_doenca.style.display = "none";
}

fil_doenca.addEventListener('input', function(){
    let cont_resultados = cards_doencas.length;
    if(!fil_doenca.value){
        cancelar_fil_doenca.style.display = "none";
        nenhuma_doenca.style.display = "none";
    }
    else{
        cancelar_fil_doenca.style.display = "flex";
    }
    
    for (let i = 0; i < cards_doencas.length; i++) {
        let card_id = cards_doencas[i].id;
        if(!card_id.includes(`card-${fil_doenca.value.toLowerCase()}`)){
            cards_doencas[i].style.display = "none";
        }
        else{
            cards_doencas[i].style.display = "flex";
            cont_resultados--;
        }
    }
    
    if(cont_resultados == cards_doencas.length){
        nenhuma_doenca.style.display = "flex";
    } else{
        nenhuma_doenca.style.display = "none";
    }
});

cancelar_fil_doenca.addEventListener('click', function(){
    fil_doenca.value = "";
    cards_doencas.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_doenca.style.display = "none";
    nenhuma_doenca.style.display = "none";
});

cards_doencas.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_doencas.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `view_doencas.html`;
    });
})