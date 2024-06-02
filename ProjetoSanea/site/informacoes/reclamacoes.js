let btn_fil_reclamacao = document.getElementById("filtro-reclamacoes");
let fil_reclamacao = document.getElementById("input-filtro-reclamacao");
let cancelar_fil_reclamacao = document.getElementById("cancelar-pesquisa-reclamacao");
let cards_reclamacoes = document.querySelectorAll(".card-reclamacao");
let nenhuma_reclamacao = document.querySelector(".card-nenhuma-reclamacao");

ScrollReveal().reveal('.banner-reclamacoes',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.img-banner-reclamacoes',{origin: "bottom", duration: 2000, easing: 'ease', opacity: 0.2, distance: "40px"});

if(!fil_reclamacao.value){
    cancelar_fil_reclamacao.style.display = "none";
}

fil_reclamacao.addEventListener('input', function(){
    let cont_resultados = cards_reclamacoes.length;
    if(!fil_reclamacao.value){
        cancelar_fil_reclamacao.style.display = "none";
        nenhuma_reclamacao.style.display = "none";
    }
    else{
        cancelar_fil_reclamacao.style.display = "flex";
    }
    
    for (let i = 0; i < cards_reclamacoes.length; i++) {
        let card_id = cards_reclamacoes[i].id;
        if(!card_id.includes(`card-${fil_reclamacao.value.toLowerCase()}`)){
            cards_reclamacoes[i].style.display = "none";
        }
        else{
            cards_reclamacoes[i].style.display = "flex";
            cont_resultados--;
        }
    }
    
    if(cont_resultados == cards_reclamacoes.length){
        nenhuma_reclamacao.style.display = "flex";
    } else{
        nenhuma_reclamacao.style.display = "none";
    }
});

cancelar_fil_reclamacao.addEventListener('click', function(){
    fil_reclamacao.value = "";
    cards_reclamacoes.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_reclamacao.style.display = "none";
    nenhuma_reclamacao.style.display = "none";
});

cards_reclamacoes.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_reclamacoes.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `view_reclamacoes.html`;
    });
})