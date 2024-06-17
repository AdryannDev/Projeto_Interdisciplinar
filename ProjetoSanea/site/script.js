const opcoesMenu = document.querySelectorAll('.opcao-menu')

opcoesMenu.forEach(opcao=>{
    opcao.addEventListener('click',function(){
        window.location.href=`informacoes/${opcao.id}.html`
    })
})

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("navbar-header");
    nav.classList.toggle("active-menu");
    const active = nav.classList.contains('active-menu');
    event.currentTarget.setAttribute("aria-expanded", active);
    if(active){
        event.currentTarget.setAttribute("aria-label","Fechar menu")
    }
    else{
        event.currentTarget.setAttribute("aria-label","Abrir menu")
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

