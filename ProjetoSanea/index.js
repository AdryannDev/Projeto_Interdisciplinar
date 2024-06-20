ScrollReveal().reveal('.opcoes-reclamacoes-txt',{origin: "left", duration: 1500, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.opcoes-doencas-txt',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.opcoes-noticias-txt',{origin: "left", duration: 2500, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.opcoes-responsaveis-txt',{origin: "left", duration: 3000, easing: 'ease', opacity: 0.2, distance: "100px"});

ScrollReveal().reveal('.opcoes-reclamacoes-img',{origin: "left", duration: 1500, easing: 'ease', opacity: 0.1, distance: "70px"});
ScrollReveal().reveal('.opcoes-doencas-img',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.1, distance: "70px"});
ScrollReveal().reveal('.opcoes-noticias-img',{origin: "left", duration: 2500, easing: 'ease', opacity: 0.1, distance: "70px"});
ScrollReveal().reveal('.opcoes-responsaveis-img',{origin: "left", duration: 3000, easing: 'ease', opacity: 0.1, distance: "70px"});

//Links do Menu
const opcoesMenu = document.querySelectorAll('.opcao-menu')

opcoesMenu.forEach(opcao=>{
    opcao.addEventListener('click',function(){
        if(opcao.id == "reclamacoes"){
            window.location.href=`reclamacao/${opcao.id}.html`;
        }
        else{
            window.location.href=`informacoes/${opcao.id}.html`;
        }
    })
})
