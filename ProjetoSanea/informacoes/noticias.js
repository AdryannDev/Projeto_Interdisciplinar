let link_noticia = document.getElementById("noticias_navbar_link");
let fil_noticia = document.getElementById("input-filtro-noticias");
let cancelar_fil_noticia = document.getElementById("cancelar-pesquisa-noticias");
let cards_noticias = document.querySelectorAll(".card-noticia");
let nenhuma_noticia = document.querySelector(".card-nenhuma-noticia");
let resultados_noticia = document.querySelector(".resultado-pesquisa-noticias");
let span_resultados = resultados_noticia.querySelector("span");
let select_fil_noticia = document.getElementById("select-noticias"); 

ScrollReveal().reveal('.banner-noticias',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.img-banner-noticias',{origin: "bottom", duration: 2000, easing: 'ease', opacity: 0.2, distance: "40px"});

link_noticia.classList.add("active");

//Função ao utilizar o input para escrever
fil_noticia.addEventListener('input', function(){
    filtrar_noticia(fil_noticia);
    select_fil_noticia.value = "todos";
});

//Função ao modificar o select
select_fil_noticia.addEventListener('input', function(){
    filtrar_noticia(select_fil_noticia);
    fil_noticia.value = ``;
});

function filtrar_noticia(pesquisa){
    //Se o filtro estiver vazio, esconde os elementos de pesquisa
    if(!pesquisa.value){
        display_pesquisa("hide");
    }
    else{ //Senão, mostra o elemento de resetar filtro
        cancelar_fil_noticia.style.display = "flex";
    }
    
    //Se for uma pesquisa utilizando o SELECT
    if(pesquisa == select_fil_noticia){
        select_filtro_noticia(pesquisa);
    }
    //Se for uma pesquisa pelo INPUT
    else{ 
        input_filtro_noticia(pesquisa);
    }
}

function select_filtro_noticia(pesquisa){
    let hasTag = false;
    let num_resultados = 0;

    if(pesquisa.value.trim().toLowerCase() == "todos"){
        cards_noticias.forEach(card => {
            card.style.display = "flex";
        });
        display_pesquisa("hide");
    } else {
        cards_noticias.forEach(card => {
            let hasTag = false;
            let tags = card.querySelectorAll(".tags-noticias span");
            tags.forEach(tag => {
                tag = tag.className.trim().toLowerCase();
                if(tag.includes(pesquisa.value.trim().toLowerCase())) {
                    hasTag = true;
                }
            });

            if(hasTag){
                card.style.display = "flex";
                num_resultados++;
            } else {
                card.style.display = "none";
            }
        });

        if(num_resultados > 0){
            cancelar_fil_noticia.style.display = "flex";
            resultados_noticia.style.display = "flex";
            nenhuma_noticia.style.display = "none";
            if(num_resultados > 1){
                span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>`;
            } else{
                span_resultados.innerHTML = `${num_resultados} resultado para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>`
            }
        } else {
            display_pesquisa("show");
            span_resultados.innerHTML = `Nenhum resultado encontrado para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>`;
        }
    }
}


function input_filtro_noticia(pesquisa){
    cont_resultados = cards_noticias.length;
    num_resultados = 0;

    cards_noticias.forEach(card => {
        let card_id = card.id;
        if(card_id.includes(`card-${pesquisa.value.toLowerCase()}`)){ //Verif se o valor inserido é igual ao id do CARD
            card.style.display = "flex";
            cont_resultados--;
        }
        else{
            card.style.display = "none";
            resultados_noticia.style.display = "flex";
        }
        num_resultados = cards_noticias.length - cont_resultados;

        if(num_resultados == 1){
            span_resultados.innerHTML = `${num_resultados} resultado para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>`;
            nenhuma_noticia.style.display = "none";
        } else if(num_resultados > 1){
            span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>`;
            nenhuma_noticia.style.display = "none";
        } else{//Se não encontrar um resultado
            span_resultados.innerHTML = `Nenhum resultado encontrado para <span class="palavra-filtro-noticias"> "${pesquisa.value}"</span>` ;
            nenhuma_noticia.style.display = "flex";
        }
    });
}

//Função para resetar filtro
cancelar_fil_noticia.addEventListener('click', function(){
    fil_noticia.value = "";
    cards_noticias.forEach(card => {
        card.style.display = "flex";
    });
    display_pesquisa("hide");
    select_fil_noticia.value = "todos";
});

//Função para adicionar um link para cada card
cards_noticias.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_noticias.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `detalhesInformacoes/detalhesNoticias/detalhesNoticias.html`;
    });
})

//Função para alterar displays dos elementos de pesquisa
function display_pesquisa(acao){
    switch (acao) {
        case "hide":
            nenhuma_noticia.style.display = "none";
            cancelar_fil_noticia.style.display = "none";
            resultados_noticia.style.display = "none";
            break;
        case "show":
            nenhuma_noticia.style.display = "flex";
            cancelar_fil_noticia.style.display = "flex";
            resultados_noticia.style.display = "flex";
            break;
        default:
            break;
    }
}

nenhuma_noticia.addEventListener("click", function(){
    cards_noticias.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_noticia.style.display = "none";
    fil_noticia.value = "";
    select_fil_noticia.value = "todos";
    resultados_noticia.style.display = "none";
    nenhuma_noticia.style.display = "none";
});