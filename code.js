const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true }); // Inicia o navegador sem interface gráfica
  const page = await browser.newPage();
  
  const url = 'SUA_URL_AQUI'; // Substitua pela URL da página que você quer automatizar
  const selector = 'SELETOR_DO_BOTÃO_AQUI'; // Substitua pelo seletor CSS do botão

  await page.goto(url);

  // Função para clicar no botão
  async function clickButton() {
    try {
      await page.click(selector); // Clica no botão
      console.log('Botão clicado!');
    } catch (error) {
      console.error('Erro ao clicar no botão:', error);
    }
  }

  // Chama a função de clicar no botão a cada 3 minutos e meio
  setInterval(clickButton, 210000); // 210000 ms = 3 minutos e meio

  // A partir daqui, o script vai ficar rodando indefinidamente
})();
