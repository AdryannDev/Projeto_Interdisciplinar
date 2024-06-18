ScrollReveal().reveal('.opcoes-doencas',{origin: "left", duration: 2000, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.opcoes-noticias',{origin: "left", duration: 2500, easing: 'ease', opacity: 0.2, distance: "100px"});
ScrollReveal().reveal('.opcoes-responsaveis',{origin: "left", duration: 3000, easing: 'ease', opacity: 0.2, distance: "100px"});

//Links do Menu
const opcoesMenu = document.querySelectorAll('.opcao-menu')

opcoesMenu.forEach(opcao=>{
    opcao.addEventListener('click',function(){
        window.location.href=`informacoes/${opcao.id}.html`
    })
})
