// Botão de criar novo usuario com e-mail e senha
var createUserButton = document.getElementById('createUserButton');

// Inputs para preenchimento de e-mail e senha
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('senhaInput');

// Função para criar novo usuário com e-mail e senha
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, senhaInput.value)
        .then(function () {
            alert('A sua nova conta foi criada com sucesso!!!');
            window.open('login.html', '_self');
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});