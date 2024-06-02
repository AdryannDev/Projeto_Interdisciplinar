let fil_doenca = document.getElementById("input-filtro-doencas");
let cancelar_fil_doenca = document.getElementById("cancelar-pesquisa-doencas");
let cards_doencas = document.querySelectorAll(".card-doenca");
let nenhuma_doenca = document.querySelector(".card-nenhuma-doenca");
let resultados_doenca = document.querySelector(".resultado-pesquisa-doencas");
let span_resultados = resultados_doenca.querySelector("span");
let select_fil_doenca = document.getElementById("select-doencas"); 

ScrollReveal().reveal('.banner-doencas',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "80px"});
ScrollReveal().reveal('.img-banner-doencas',{origin: "bottom", duration: 2000, easing: 'ease', opacity: 0.2, distance: "40px"});

if(!fil_doenca.value){
    cancelar_fil_doenca.style.display = "none";
    resultados_doenca.style.display = "none";
}

fil_doenca.addEventListener('input', function(){
    filtrar_doenca(fil_doenca);
    select_fil_doenca.value = "todos";
});

select_fil_doenca.addEventListener('input', function(){
    filtrar_doenca(select_fil_doenca);
    fil_doenca.value = `${select_fil_doenca.value}`;
});

function filtrar_doenca(pesquisa){
    let cont_resultados = cards_doencas.length;
    
    if(!pesquisa.value){
        cancelar_fil_doenca.style.display = "none";
        nenhuma_doenca.style.display = "none";
        resultados_doenca.style.display = "none";
    }
    else{
        cancelar_fil_doenca.style.display = "flex";
    }
    if(pesquisa.value == "todos"){
        cards_doencas.forEach(card => {
            card.style.display = "flex";
        });
        span_resultados.style.display = "none";
        cancelar_fil_doenca.style.display = "none";
    }
    else{
        for (let i = 0; i < cards_doencas.length; i++) {
            let card_id = cards_doencas[i].id;
            if(!card_id.includes(`card-${pesquisa.value.toLowerCase()}`)){
                cards_doencas[i].style.display = "none";
                resultados_doenca.style.display = "flex";
            }
            else{
                cards_doencas[i].style.display = "flex";
                cont_resultados--;
            }
            let num_resultados = cards_doencas.length - cont_resultados;
            if(num_resultados == 1){
                span_resultados.innerHTML = `${num_resultados} resultado para <span class="palavra-filtro-doencas"> "${pesquisa.value}"</span>`;
            } else if(num_resultados > 1){
                span_resultados.innerHTML = `${num_resultados} resultados para <span class="palavra-filtro-doencas"> "${pesquisa.value}"</span>`;
            } else{
                span_resultados.innerHTML = `Nenhum resultado para <span class="palavra-filtro-doencas"> "${pesquisa.value}"</span>` ;
            }
        }
        
        if(cont_resultados == cards_doencas.length){
            nenhuma_doenca.style.display = "flex";
        } else{
            nenhuma_doenca.style.display = "none";
        }
    }
}

cancelar_fil_doenca.addEventListener('click', function(){
    fil_doenca.value = "";
    cards_doencas.forEach(card => {
        card.style.display = "flex";
    });
    cancelar_fil_doenca.style.display = "none";
    nenhuma_doenca.style.display = "none";
    resultados_doenca.style.display = "none";
    select_fil_doenca.value = "todos";
});

cards_doencas.forEach(card => {
    card.addEventListener('click', function(){
        // window.location.href = `view_doencas.html?${card.id.substring(5)}`; -> codigo para view com variavel com o nome da doença
        window.location.href = `view_doencas.html`;
    });
})