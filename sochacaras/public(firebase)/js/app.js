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
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

//Exibe banner de instalação do web app
window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
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
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }

      // Nós não precisamos mais do prompt. Limpar tudo.
      deferredPrompt = null;
    });
  }
});

//Trecho contendo a parte de push notifications
function displayConfirmNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: 'Você se inscreveu com sucesso em nosso serviço de notificação!',
      icon: '/imagens/icons/app-icon-96x96.png',
      dir: 'ltr',
      lang: 'pt-BR',
      vibrate: [100, 50, 200],
      badge: '/imagens/icons/app-icon-96x96.png',
      tag: 'confirm-notification',
      renotify: true,
      actions: [
        { action: 'confirm', title: 'Ok', icon: '/imagens/icons/app-icon-96x96.png' },
        { action: 'cancel', title: 'Cancelar', icon: '/imagens/icons/app-icon-96x96.png' }
      ]
    };

    navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Inscrição Realizada com Sucesso!', options);
      });
  }
}

function configurePushSub() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  var reg;
  navigator.serviceWorker.ready
    .then(function(swreg) {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then(function(sub) {
      if (sub === null) {
        // Create a new subscription
        var vapidPublicKey = 'BI5ASE9uPWo-MD4f2tWiHOkVQOSeexE16JEVQrZy0W1eyZv3In5BTJ0iSwOPAQVKjdvP89IgEzFfc-F7GZD1YWY';
        var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidPublicKey
        });
      } else {
        alert("Você já autorizou o serviço de notificações!");
      }
    })
    .then(function(newSub) {
      return fetch('https://so-chacaras.firebaseio.com/InscUsersForPushNotify.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newSub)
      })
    })
    .then(function(res) {
      if (res.ok) {
        displayConfirmNotification();
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

function askForNotificationPermission() {
  Notification.requestPermission(function(result) {
    console.log('Escolha do Usuário', result);
    if (result !== 'granted') {
      console.log('Nenhuma permissão de notificação concedida!');
    } else {
      configurePushSub();
      //displayConfirmNotification();
    }
  });
}
