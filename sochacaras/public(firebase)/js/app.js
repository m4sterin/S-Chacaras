var deferredPrompt;

//Verifica se existe uma promessa ativa, se não tiver ele ativa.
if (!window.Promise) {
  window.Promise = Promise;
}

//Registrando o Service Worker no navegador
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registrado!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

//Exibe banner de instalação do web app
window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Evento iniciado');
  e.preventDefault();

  // Esconde o evento para que ele possa ser acionado mais tarde
  deferredPrompt = e;

  return false;
});

btnSave.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // O usuário teve uma interação positiva com nosso aplicativo e o Chrome
    // tentou avisar anteriormente, então vamos mostrar o prompt.
    deferredPrompt.prompt();

    // Siga o que o usuário fez com o prompt.
    deferredPrompt.userChoice.then(function(choiceResult) {

      console.log(choiceResult.outcome);

      if(choiceResult.outcome == 'dismissed') {
        console.log('Instalação da tela inicial cancelada pelo usuário!!!');
      }
      else {
        console.log('Usuário adicionou atalho à tela inicial!!!');
      }

      // Nós não precisamos mais do prompt. Limpar tudo.
      deferredPrompt = null;
    });
  }
});