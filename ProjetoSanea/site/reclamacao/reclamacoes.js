let link_reclamacoes = document.getElementById("reclamacoes_navbar_link");
let fil_reclamacao = document.getElementById("input-filtro-reclamacoes");
let cancelar_fil_reclamacao = document.getElementById("cancelar-pesquisa-reclamacoes");
let cards_reclamacoes = document.querySelectorAll(".card-reclamacao");
let nenhuma_reclamacao = document.querySelector(".card-nenhuma-reclamacao");
let resultados_reclamacao = document.querySelector(".resultado-pesquisa-reclamacoes");
let span_resultados = resultados_reclamacao.querySelector("span");
let select_fil_reclamacao = document.getElementById("select-reclamacoes"); 

ScrollReveal().reveal('.banner-reclamacoes',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.img-banner-reclamacoes',{origin: "bottom", duration: 2000, easing: 'ease', opacity: 0.2, distance: "40px"});

link_reclamacoes.classList.add("active");
link_reclamacoes.classList.remove("navbar-header-link");

//Função ao utilizar o input para escrever
fil_reclamacao.addEventListener('input', function(){
    filtrar_reclamacao(fil_reclamacao);
    select_fil_reclamacao.value = "todos";
});

//Função ao modificar o select
select_fil_reclamacao.addEventListener('input', function(){
    filtrar_reclamacao(select_fil_reclamacao);
    fil_reclamacao.value = ``;
});

function filtrar_reclamacao(pesquisa){
    //Se o filtro estiver vazio, esconde os elementos de pesquisa
    if(!pesquisa.value){
        display_pesquisa("hide");
    }
    else{ //Senão, mostra o elemento de resetar filtro
        cancelar_fil_reclamacao.style.display = "flex";
    }
    
    //Se for uma pesquisa utilizando o SELECT
    if(pesquisa == select_fil_reclamacao){
        select_filtro_reclamacao(pesquisa);
    }
    //Se for uma pesquisa pelo INPUT
    else{ 
        input_filtro_reclamacao(pesquisa);
    }
}

function select_filtro_reclamacao(pesquisa){
    let hasTag = false;
    let num_resultados = 0;

    if(pesquisa.value.trim().toLowerCase() == "todos"){
        cards_reclamacoes.forEach(card => {
            card.style.display = "flex";
        });
        display_pesquisa("hide");
    } else {
        cards_reclamacoes.forEach(card => {
            let hasTag = false;
            let tags = card.querySelectorAll(".tags-reclamacoes span");
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
            cancelar_fil_reclamacao.style.display = "flex";
            resultados_reclamacao.style.display = "flex";
            nenhuma_reclamacao.style.display = "none";
            if(num_resultados > 1){
                span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
            } else{
                span_resultados.innerHTML = `${num_resultados} resultado para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`
            }
        } else {
            display_pesquisa("show");
            span_resultados.innerHTML = `Nenhum resultado encontrado para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
        }
    }
}


function input_filtro_reclamacao(pesquisa){
    cont_resultados = cards_reclamacoes.length;
    num_resultados = 0;

    cards_reclamacoes.forEach(card => {
        let card_id = card.id;
        if(card_id.includes(`card-${pesquisa.value.toLowerCase()}`)){ //Verif se o valor inserido é igual ao id do CARD
            card.style.display = "flex";
            cont_resultados--;
        }
        else{
            card.style.display = "none";
            resultados_reclamacao.style.display = "flex";
        }
        num_resultados = cards_reclamacoes.length - cont_resultados;

        if(num_resultados == 1){
            span_resultados.innerHTML = `${num_resultados} resultado para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
            nenhuma_reclamacao.style.display = "none";
        } else if(num_resultados > 1){
            span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
            nenhuma_reclamacao.style.display = "none";
        } else{//Se não encontrar um resultado
            span_resultados.innerHTML = `Nenhum resultado encontrado para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>` ;
            nenhuma_reclamacao.style.display = "flex";
        }
    });

    // for(let i = 0; i < cards_reclamacoes.length; i++) { //Faz para cada CARD
    //     let card_id = cards_reclamacoes[i].id;
    //     if(card_id.includes(`card-${pesquisa.value.toLowerCase()}`)){ //Verif se o valor inserido é igual ao id do CARD
    //         cards_reclamacoes[i].style.display = "flex";
    //         cont_resultados--;
    //     }
    //     else{
    //         cards_reclamacoes[i].style.display = "none";
    //         resultados_reclamacao.style.display = "flex";
    //     }
    //     num_resultados = cards_reclamacoes.length - cont_resultados;

    //     if(num_resultados == 1){
    //         span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
    //         nenhuma_reclamacao.style.display = "none";
    //     } else if(num_resultados > 1){
    //         span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>`;
    //         nenhuma_reclamacao.style.display = "none";
    //     } else{//Se não encontrar um resultado
    //         span_resultados.innerHTML = `Nenhum resultado encontrado para <span class="palavra-filtro-reclamacoes"> "${pesquisa.value}"</span>` ;
    //         nenhuma_reclamacao.style.display = "flex";
    //     }
    // }
}

//Função para resetar filtro
cancelar_fil_reclamacao.addEventListener('click', function(){
    fil_reclamacao.value = "";
    cards_reclamacoes.forEach(card => {
        card.style.display = "flex";
    });
    display_pesquisa("hide");
    select_fil_reclamacao.value = "todos";
});

//Função para adicionar um link para cada card
cards_reclamacoes.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_reclamacoes.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `../informacoes/detalhesInformacoes/detalhesReclamacao/detalhesReclamacao.html`;
    });
})

//Função para alterar displays dos elementos de pesquisa
function display_pesquisa(acao){
    switch (acao) {
        case "hide":
            nenhuma_reclamacao.style.display = "none";
            cancelar_fil_reclamacao.style.display = "none";
            resultados_reclamacao.style.display = "none";
            break;
        case "show":
            nenhuma_reclamacao.style.display = "flex";
            cancelar_fil_reclamacao.style.display = "flex";
            resultados_reclamacao.style.display = "flex";
            break;
        default:
            break;
    }
}


nenhuma_reclamacao.addEventListener("click", function(){
    cards_reclamacoes.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_reclamacao.style.display = "none";
    fil_reclamacao.value = "";
    select_fil_reclamacao.value = "todos";
    resultados_reclamacao.style.display = "none";
    nenhuma_reclamacao.style.display = "none";
});