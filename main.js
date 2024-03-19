const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0; i<botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("textos");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const botoes = document.querySelectorAll(".conteudo");
const tempoobjetivo1 = new Date(2024);
