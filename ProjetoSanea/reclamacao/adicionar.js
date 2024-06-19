const input = document.getElementById('imagem-input');
const button = document.getElementById('upload-button');
const preview = document.getElementById('imagem-preview');
const botaoEnviar = document.getElementById("enviar-botao");

// Quando o botão é clicado, o input de arquivo é acionado
button.addEventListener('click', function() {
    input.click();
});

// Quando um arquivo é selecionado, a pré-visualização é atualizada
input.addEventListener('change', function(event) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
});

botaoEnviar.addEventListener("click", function(){
    window.location.href = "../index.html"
});