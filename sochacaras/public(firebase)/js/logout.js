//Botão de sair (logout)
var logOutButton = document.getElementById('logOutButton');
// Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            alert('Você se deslogou');
            window.open('login.html', '_self'); //abre a pagina de login ao clicar em sair
        }, function (error) {
            console.error(error);
        });
});