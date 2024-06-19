ScrollReveal().reveal('.icone-menu-admin',{duration: 1500, easing: 'ease-out', opacity: 0.5});
ScrollReveal().reveal('.txt-menu-admin',{duration: 2000, easing: 'ease-out', opacity: 0.5});


//Links do Menu
const opcoesMenu = document.querySelectorAll('.opcao-dashboard')

opcoesMenu.forEach(opcao=>{
    opcao.addEventListener('click',function(){
        if(opcao.id == "opcao-dash-add-reclamacao"){
            window.location.href = "reclamacao/adicionar.html";
        }
        else if(opcao.id == "opcao-dash-noticias"){
            window.location.href = "informacoes/noticias.html";
        }
        else if(opcao.id == "opcao-dash-doencas"){
            window.location.href = "informacoes/doencas.html";
        }
        else{
            window.location.href = "informacoes/responsaveis.html";
        }
    })
})
