let fil_noticia = document.getElementById("input-filtro-noticias");
let cancelar_fil_noticia = document.getElementById("cancelar-pesquisa-noticias");
let cards_noticias = document.querySelectorAll(".card-noticia");
let nenhuma_noticia = document.querySelector(".card-nenhuma-noticia");
let resultados_noticia = document.querySelector(".resultado-pesquisa-noticias");
let span_resultados = resultados_noticia.querySelector("span");
let select_fil_noticia = document.getElementById("select-noticias"); 

ScrollReveal({ distance: '80px' }); 
ScrollReveal().reveal('.banner-noticias',{origin: "left", duration: 2000});
ScrollReveal().reveal('.img-banner-noticias',{origin: "top", duration: 2000});

if(!fil_noticia.value){
    cancelar_fil_noticia.style.display = "none";
    resultados_noticia.style.display = "none";
}

fil_noticia.addEventListener('input', function(){
    filtrar_noticia(fil_noticia);
    select_fil_noticia.value = "todos";
});

select_fil_noticia.addEventListener('input', function(){
    filtrar_noticia(select_fil_noticia);
    fil_noticia.value = ``;
});

function filtrar_noticia(pesquisa){
    if(pesquisa == select_fil_noticia){
        
    }
    else{
        let cont_resultados = cards_noticias.length;
    
        if(!pesquisa.value){
            cancelar_fil_noticia.style.display = "none";
            nenhuma_noticia.style.display = "none";
            resultados_noticia.style.display = "none";
        }
        else{
            cancelar_fil_noticia.style.display = "flex";
        }
        if(pesquisa.value == "todos"){
            cards_noticias.forEach(card => {
                card.style.display = "flex";
            });
            span_resultados.style.display = "none";
            cancelar_fil_noticia.style.display = "none";
        }
        else{
            for (let i = 0; i < cards_noticias.length; i++) {
                let card_id = cards_noticias[i].id;
                if(!card_id.includes(`card-${pesquisa.value.toLowerCase()}`)){
                    cards_noticias[i].style.display = "none";
                    resultados_noticia.style.display = "flex";
                }
                else{
                    cards_noticias[i].style.display = "flex";
                    cont_resultados--;
                }
                let num_resultados = cards_noticias.length - cont_resultados;
                if(num_resultados == 1){
                    span_resultados.innerHTML = `${num_resultados} resultado`;
                } else if(num_resultados > 1){
                    span_resultados.innerHTML = `${num_resultados} resultados`;
                } else{
                    span_resultados.innerHTML = `Nenhum resultado` ;
                }
            }
            
            if(cont_resultados == cards_noticias.length){
                nenhuma_noticia.style.display = "flex";
            } else{
                nenhuma_noticia.style.display = "none";
            }
        }
    }
}

cancelar_fil_noticia.addEventListener('click', function(){
    fil_noticia.value = "";
    cards_noticias.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_noticia.style.display = "none";
    nenhuma_noticia.style.display = "none";
    resultados_noticia.style.display = "none";
    select_fil_noticia.value = "todos";
});

cards_noticias.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_noticias.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `view_noticias.html`;
    });
})