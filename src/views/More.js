import Ame from 'ame-super-app-client';
export default class About {
  // Esta função é responsável por abrir uma URL externa
  accessPortal = () => {
    // Verificar se o método Ame.openBrowser existe
    if (typeof Ame.openBrowser === 'function') {
      // Este método só aceita URL's seguras com protocolo HTTPS
      Ame.openBrowser({ url: 'https://developer.ame.calindra.com.br/' });
    } else {
      // Exibir um alerta ao usuário caso ele esteja com um aplicativo desatualizado.
      Ame.alert({
        title: 'Ops',
        description: 'Parece que o seu Aplicativo da AME DIGITAL não está atualizado.',
        buttonText: 'OK',
      });
    }
  };
}
