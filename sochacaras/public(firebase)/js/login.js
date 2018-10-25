//Provider necessario para realizar o login com o Google
var provider = new firebase.auth.GoogleAuthProvider();
var user;

function userAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;

      if(user != null) {
        var email_id = user.email;
      }
    } else {
      // No user is signed in.
    }
  });
}

// Autenticar com E-mail e Senha
function logIn() {
  // Campos de preenchimento de e-mail e senha
  var emailInput = document.getElementById('emailInput');
  var passwordInput = document.getElementById('senhaInput');

  firebase.auth().signInWithEmailAndPassword(emailInput.value, senhaInput.value).then(function (result) {
          console.log(result);
          user = result.user;
          alert('Seja Bem vindo!!!' + emailInput.value);
          window.open("index.html", '_self'); //abre uma nova pagina apos verificar se ele esta autentificado
      })
      .catch(function (error) {
          console.error(error.code);
          console.error(error.message);
          alert('Falha ao logar!!! Verifique se usuário e senha estão corretos!')
      });
};

//Função utilizada para fazer a autentificação, pelo Google, do usuario e permiti-lo fazer login np app
function signIn() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // Isso fornece um token do Google Access. Você pode usá-lo para acessar a API do Google
      var token = result.credential.accessToken;
      // As informações do usuário conectado
      user = result.user;
      window.open("index.html", '_self');
      // ...
    }).catch(function(error) {
      // Lidar com erros aqui
      var errorCode = error.code;
      var errorMessage = error.message;
      // O email da conta do usuário usado
      var email = error.email;
      // O tipo firebase.auth.AuthCredential que foi usado
      var credential = error.credential;
      // ...
    });
};