const botoes = document.querySelectorAll(".botao");

for (let i=0; i<botoes.lenght; 1++){
    botoes[i].onclick = function() {
        botoes[i].classlist.add("ativo");
    };
}