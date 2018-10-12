var usersList = document.getElementById('usersList');
var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var email1 = document.getElementById('email1');
var profissao = document.getElementById('profissao');
var cidade = document.getElementById('cidade');
var estado = document.getElementById('estado');
var senha = document.getElementById('senha1');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nome.value, cpf.value, email1.value, profissao.value, cidade.value, estado.value, senha.value);
});

// Função para criar um registro no Firebase
function create(nome, cpf, email, profissao, cidade, estado, senha) {
    var data = {
        nome: nome,
        cpf: cpf,
        email: email,
        profissao: profissao,
        cidade: cidade,
        estado: estado,
        senha: senha
    };

    return firebase.database().ref().child('users').push(data);
}