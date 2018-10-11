//Definição das variaveis a serem gravadas e seus valores, 
//que são pegos pelos inputs da tela de inserção de dados
var nomeInput = document.getElementById('nomeInput');
var enderecoInput = document.getElementById('enderecoInput');
var numeroInput = document.getElementById('numeroInput');
var complementoInput = document.getElementById('complementoInput');
var cepInput = document.getElementById('cepInput');
var cidadeInput = document.getElementById('cidadeInput');
var estadoInput = document.getElementById('estadoInput');
var quartoInput = document.getElementById('quartoInput');
var banheiroInput = document.getElementById('banheiroInput');
var churrasqueiraInput = document.getElementById('churrasqueiraInput');
var piscinaInput = document.getElementById('piscinaInput');
var descricaoInput = document.getElementById('descricaoInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão salva os dados preenchidos no formulario 
//e exibe um alert indicando que foi realizado com sucesso ou se tiver erro exibe o erro
addButton.addEventListener('click', function () {
    create(nomeInput.value, enderecoInput.value, numeroInput.value, complementoInput.value
        , cepInput.value, cidadeInput.value, estadoInput.value, quartoInput.value, banheiroInput.value
        , churrasqueiraInput.value, piscinaInput.value, descricaoInput.value);
    alert('Seus dados foram salvos!!!');
});

// Função para criar um registro no Firebase com o usuario que se cadastrou
function create(nome, endereco, numero, complemento, cep, cidade, estado, quarto, banheiro, churrasqueira, piscina, descricao) {
    var data = {
        nome: nome,
        endereco: endereco,
        numero: numero,
        complemento: complemento,
        cep: cep,
        cidade: cidade,
        estado: estado,
        quarto: quarto,
        banheiro: banheiro,
        churrasqueira: churrasqueira,
        piscina: piscina,
        descricao: descricao
    };

    return firebase.database().ref().child('chacaras').push(data);
}

//Trecho usado para carregar a foto escolhida pelo usuario para o banco (storage)
// Obtendo os elementos para o upload da foto do perfil
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// Ouvir o evento change
fileButton.addEventListener('change', function (e) {
    // Obter o arquivo
    var file = e.target.files[0];

    // Referenciar o Storage
    var storageRef = firebase.storage().ref('foto-chacara/' + file.name);

    // Enviar o arquivo
    var task = storageRef.put(file);

    // Atualizar o Progress Bar
    task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
            console.log(err);
        },
        function complete() {
            var downloadURL = task.snapshot.downloadURL;
            console.log(downloadURL);
            alert('Envio de Imagem completo!')
        }
    )
});