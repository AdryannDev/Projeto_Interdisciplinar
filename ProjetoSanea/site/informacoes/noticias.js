let btn_fil_noticia = document.getElementById("filtro-noticias");
let fil_noticia = document.getElementById("input-filtro-noticia");
let cancelar_fil_noticia = document.getElementById("cancelar-pesquisa-noticia");
let cards_noticias = document.querySelectorAll(".card-noticia");
let nenhuma_noticia = document.querySelector(".card-nenhuma-noticia");

if(!fil_noticia.value){
    cancelar_fil_noticia.style.display = "none";
}

fil_noticia.addEventListener('input', function(){
    let cont_resultados = cards_noticias.length;
    if(!fil_noticia.value){
        cancelar_fil_noticia.style.display = "none";
        nenhuma_noticia.style.display = "none";
    }
    else{
        cancelar_fil_noticia.style.display = "flex";
    }
    
    for (let i = 0; i < cards_noticias.length; i++) {
        let card_id = cards_noticias[i].id;
        if(!card_id.includes(`card-${fil_noticia.value.toLowerCase()}`)){
            cards_noticias[i].style.display = "none";
        }
        else{
            cards_noticias[i].style.display = "flex";
            cont_resultados--;
        }
    }

    if(cont_resultados == cards_noticias.length){
        nenhuma_noticia.style.display ="flex";
    } else{
        nenhuma_noticia.style.display ="none";
    }

});

cancelar_fil_noticia.addEventListener('click', function(){
    fil_noticia.value = "";
    cards_noticias.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_noticia.style.display = "none";
    nenhuma_noticia.style.display = "none";
});

cards_noticias.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_noticias.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `view_noticias.html`;
    });
})