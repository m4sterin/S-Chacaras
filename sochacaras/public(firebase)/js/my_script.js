//Java Script contendo os codigos para o app web
//Definindo algumas variaveis que serão utilizadas por funçoes
var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();
var user;
var homeBtn = document.getElementById('homeBtn');
var perfilBtn = document.getElementById('perfilBtn');
var faqBtn = document.getElementById('faqBtn');
var sobreAppBtn = document.getElementById('sobreAppBtn');
var addBtn = document.getElementById('addBtn');
var cadChacBtn = document.getElementById('cadChacBtn');
var cancelarCad = document.getElementById('cancelarCad');
var logOutButton = document.getElementById('logOutButton');

$(document).ready(function(){
	//Escondendo alguns elementos quando se estiver na pagina de login
	$("#myNavbar").show();
	$("#bootNavbar").hide();
	$("#secLogin").show();
	$("#secUserInfo").hide();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").hide();
});

//****************Area para verificar se existe um usuario logado ou não*************************
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Usuario está logado.
    var token = firebase.auth().currentUser.uid;
    queryDatabase();
  } else {
    // Não ha usuario logado.
  }
});

//****************Area da Seção de Autentificação e Login com o Google e com o Fecebook*************************
//Função utilizada para fazer a autentificação, pelo Google, do usuario e permiti-lo fazer login
function signIn() {
	firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
	  // Isso fornece um token do Google Access. Você pode usá-lo para acessar a API do Google
	  var token = result.credential.accessToken;
	  // As informações do usuário conectado
	  user = result.user;
	  showPerfilContainer();
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

//Função utilizada para fazer a autentificação, pelo Facebook, do usuario e permiti-lo fazer login
function logIn() {
	firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
	  // Isso fornece um token do Google Access. Você pode usá-lo para acessar a API do Google
	  var token = result.credential.accessToken;
	  // As informações do usuário conectado
	  user = result.user;
	  showPerfilContainer();
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

//***********************Funções que controlam os itens na pagina****************************************
//Função que mostra os elementos da area de perfil do usuario e oculta os elementos da area de login
function showPerfilContainer() {
	var userFoto = document.createElement("img");
	userFoto.src = user.photoURL;
	$(userFoto).addClass("userFoto");

	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").show();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").show();
	$("#userNome").html("Olá, " + user.displayName);
	$("#userFoto").html(userFoto);
};

//Função para redirecionar a tela inicial na barra de navegação
linkBtn.addEventListener('click', function () {
	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").show();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").show();
});

//Função para redirecionar a tela inicial na barra de navegação
homeBtn.addEventListener('click', function () {
	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").show();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").show();
});

//Função para redirecionar a tela de perfil do usuario na barra de navegação
perfilBtn.addEventListener('click', function () {
	showPerfilContainer();
});

//Função para redirecionar a tela de faq na barra de navegação
faqBtn.addEventListener('click', function () {
	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").show();
	$("#secSobreApp").hide();
	$("#cadBtn").show();
});

//Função para redirecionar a tela sobre o app e a equipe na barra de navegação
sobreAppBtn.addEventListener('click', function () {
	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").show();
	$("#cadBtn").show();
});

//Função para redirecionar ao cadastro da chacara
addBtn.addEventListener('click', function () {
	$("#myNavbar").show();
	$("#bootNavbar").hide();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").show();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").hide();
});

//Função para redirecionar ao cadastro da chacara
cadChacBtn.addEventListener('click', function () {
	$("#myNavbar").show();
	$("#bootNavbar").hide();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").hide();
	$("#secChacInfo").hide();
	$("#secCadChac").show();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").hide();
});

//Função para cancelar o cadastro da chacara caso o usuario mude de ideia
cancelarCad.addEventListener('click', function () {
	$("#myNavbar").hide();
	$("#bootNavbar").show();
	$("#secLogin").hide();
	$("#secUserInfo").hide();
	$("#secIndex").show();
	$("#secChacInfo").hide();
	$("#secCadChac").hide();
	$("#secFAQ").hide();
	$("#secSobreApp").hide();
	$("#cadBtn").show();
});

//Função do botão sair para realizar o logout do usuario
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            alert('Você se deslogou');
            window.open('index.html', '_self');
        }, function (error) {
            console.error(error);
        });
});

//***********************Funções da Seção de Cadastro de Chácara*********************************
var selectedFile;

document.getElementById("upload").addEventListener('change', handleFileSelect, false);

//Função que mostra a area de cadastro de chacara que antes estava ocultada
function handleFileSelect(event) {
	selectedFile = event.target.files[0];
};

//Função para salvar os dados da chacara com a url da imagem selecionada e salvar a imagem no storege do firebase na pasta apropriada
function uploadFile() {
	//Criando uma referencia ao root
	var filename = selectedFile.name;
	var storageRef = firebase.storage().ref('/fotos-chacaras/' + filename);
	var uploadTask = storageRef.put(selectedFile);

	uploadTask.on('state_changed', function(snapshot){

	},function(error){
		//Em caso de der algum erro ao enviar os dados
	},function(){
		//Em caso de sucesso ao enviar os dados
		var postKey = firebase.database().ref('Chacaras/').push().key;
		var downloadURL = uploadTask.snapshot.downloadURL;
		var updates = {};
		var postData = {
			imageURL: downloadURL,
			Nome: $("#chacNome").val(),
			Dono: $("#chacDono").val(),
			Endereco: $("#chacEnd").val(),
			Numero: $("#chacNum").val(),
			Complemento: $("#chacComp").val(),
			CEP: $("#chacCEP").val(),
			Cidade: $("#chacCity").val(),
			Estado: $("#chacEstate").val(),
			Quartos: $("#chacQuartos").val(),
			Camas: $("#chacCamas").val(),
			Banheiros: $("#chacBanheiros").val(),
			Churrasqueiras: $("#chacChurrasqueiras").val(),
			Piscinas: $("#chacPiscinas").val(),
			Descricao: $("#chacDescricao").val(),
			userID: user.uid,
			userName: user.displayName,
			userFotoURL: user.photoURL
		};
		updates['/Chacaras/' + postKey] = postData;
		firebase.database().ref().update(updates);
		//Apos salvar os dados o formulario de preenchimento é ocultado e 
		//é exibida uma mensagem de confirmação
		alert("Dados salvos com sucesso!!!");
	});
}

//***********************Funções da Seção de Visualização de Chácaras Disponiveis**************************
//Função usada para pegar os dados do bd e mostra-los na tela
function queryDatabase(){
	firebase.database().ref('/Chacaras/').once('value').then(function(snapshot){
		var PostObject = snapshot.val();
		var keys = Object.keys(PostObject);
		var currentRow;
		for (var i = 0; i < keys.length; i++){
			var currentObject = PostObject[keys[i]];
			if(i % 1 == 0){
				currentRow = document.createElement("div");
				$(currentRow).addClass("row");
				$("#chacarasDisplay").append(currentRow);
			}
			//Criando colunas com a tag div e adicionando a classe col-md-4 (para a imagem) e col-md-8 (para texto).
			var col = document.createElement("div");
			$(col).addClass("col-md-4");
			var col2 = document.createElement("div");
			$(col2).addClass("col-md-8");
			var stars = document.createElement("div");
			$(stars).addClass("contentStars");
			
			//Criando o elemento da imagem e definindo seu src pelo url da imagem salva pelo usuario no banco de dados
			var chacImage = document.createElement("img");
			chacImage.src = currentObject.imageURL;
			$(chacImage).addClass("contentImage");
			
			//Criando paragrafos que contem as informações da chácara como nome cidade e endereço
			var chacNome = document.createElement("p");
			$(chacNome).addClass("contentInfo");
			$(chacNome).html(currentObject.Nome);

			var chacEnd = document.createElement("p");
			$(chacEnd).addClass("contentInfo");
			$(chacEnd).html(currentObject.Endereco);

			var chacCity = document.createElement("p");
			$(chacCity).addClass("contentInfo");
			$(chacCity).html(currentObject.Cidade);

			//Criando a visualização da avaliação da chácara (ainda não está funcional)
			var star1 = document.createElement("img");
			star1.src = 'imagens/star1.png';
			
			var star2 = document.createElement("img");
			star2.src = 'imagens/star1.png';
			
			var star3 = document.createElement("img");
			star3.src = 'imagens/star1.png';
			
			var star4 = document.createElement("img");
			star4.src = 'imagens/star1.png';
			
			var star5 = document.createElement("img");
			star5.src = 'imagens/star1.png';

			//Criando Botão para selecionar a chácara desejada e visualizar suas informações completas
			var chacBtn = document.createElement("button");
			chacBtn.innerHTML = 'Visualizar informações';
			$(chacBtn).addClass("btn btn-primary");
			$(chacBtn).on("click", function(event){
				alert("Teste do Botão");
			});
			
			$(col).append(chacImage);
			$(stars).append(star1, star2, star3, star4, star5);
			$(col2).append(chacNome, chacEnd, chacCity, stars, chacBtn);		
			$(currentRow).append(col, col2);
		}
	});
}

//****************Funções da Seção de Visualização de Informações da Chácara selecionada*****************