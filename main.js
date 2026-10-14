const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for (let i=0; i<botoes.lenght; 1++){
    botoes[i].onclick = function() {

        for  (let j=0; j<botoes.lenght; j++){
            botoes[j].classlist.remove("ativo");
            textos[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    };
}

const contadores = document. querySelectorAll(".contador")
const tempoObjetivo1 = new date("2026.10.30T00:00:00")

let tempoAtual = nw Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
