const botoes = document.querySelectorAll(".botao");

for (let i=0; i<botoes.lenght; 1++){
    botoes[i].onclick = function() {

        for  (let j=0; j<botoes.lenght; j++){
            botoes[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
    };
}

