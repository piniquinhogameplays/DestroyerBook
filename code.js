(function clickButtonPeriodically() {
  const selector = '[data-testid="bonsai-icon-caret-right"]'; // Usando o atributo data-testid

  // Função para clicar no botão
  function clickButton() {
    const button = document.querySelector(selector);
    if (button) {
      button.click();
      console.log('Ícone clicado!');
    } else {
      console.error('Ícone não encontrado!');
    }
  }

  // Clica imediatamente e depois continua clicando a cada 3 minutos e meio
  clickButton(); // Clique imediato
  setInterval(clickButton, 210000); // 210000ms = 3 minutos e meio
})();
