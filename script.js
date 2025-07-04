let pontuacao = 0;
const pontuacaoSpan = document.getElementById('pontuacao');

const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
  const respostaCerta = pergunta.getAttribute('data-resposta').toLowerCase();
  const botoes = pergunta.querySelectorAll('.resposta');
  let respondido = false;

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      if (respondido) return; // impede múltiplas respostas na mesma pergunta
      respondido = true;

      botoes.forEach(b => b.disabled = true); // desativa todos os botões

      const respostaSelecionada = botao.textContent.toLowerCase();

      if (respostaSelecionada === respostaCerta) {
        botao.classList.add('correta');
        pontuacao++;
        pontuacaoSpan.textContent = pontuacao;
      } else {
        botao.classList.add('errada');
        botoes.forEach(b => {
          if (b.textContent.toLowerCase() === respostaCerta) {
            b.classList.add('correta');
          }
        });
      }
    });
  });
});
