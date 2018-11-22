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
var cancelarCad = document.getElementById('cancelarCad');
var cancelarCadVIP = document.getElementById('cancelarCadVIP');
var logOutButton = document.getElementById('logOutButton');

var btnFaq = document.getElementById('btnfaq');
var faqNome = $("#faqNome");
var faqEmail = $("#faqEmail");
var faqTelefone = $("#faqTelefone");
var faqAssunto = $("#faqAssunto");
var faqMenssagem = $("#faqMensagem");

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

btnFaq.addEventListener('click', function(){
	alert("Sua mensagem foi enviada com sucesso!!!");
	faqNome.val("");
	faqEmail.val("");
	faqTelefone.val("");
	faqAssunto.val("");
	faqMenssagem.val("");
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

//Função para quando o cadastro da Chácara for completo
function completeCadChac(){
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
}

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
			userTelCont: $("#chacTel").val(),
			Endereco: $("#chacEnd").val(),
			Numero: $("#chacNum").val(),
			Complemento: $("#chacComp").val(),
			CEP: $("#chacCEP").val(),
			Cidade: $("#chacCity").val(),
			Estado: $("#chacEstate").val(),
			valorAluguel: $("#chacValor").val(),
			Quartos: $("#chacQuartos").val(),
			Camas: $("#chacCamas").val(),
			Banheiros: $("#chacBanheiros").val(),
			Churrasqueiras: $("#chacChurrasqueiras").val(),
			Piscinas: $("#chacPiscinas").val(),
			Descricao: $("#chacDescricao").val(),
			Contrato: "no",
			totalEstrelas: 0,
			mediaEstrelas: 0,
			qtdVotos: 0,
			userID: user.uid,
			userName: user.displayName,
			userFotoURL: user.photoURL
		};
		updates['/Chacaras/' + postKey] = postData;
		firebase.database().ref().update(updates);
		//Apos salvar os dados o formulario de preenchimento é ocultado
		completeCadChac();
		displayChacNotification();
	});
}

//Função para salvar os dados da chacara com a url da imagem selecionada e salvar a imagem no storege do firebase na pasta apropriada
function uploadFileVIP() {
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
			userTelCont: $("#chacTel").val(),
			Endereco: $("#chacEnd").val(),
			Numero: $("#chacNum").val(),
			Complemento: $("#chacComp").val(),
			CEP: $("#chacCEP").val(),
			Cidade: $("#chacCity").val(),
			Estado: $("#chacEstate").val(),
			valorAluguel: $("#chacValor").val(),
			Quartos: $("#chacQuartos").val(),
			Camas: $("#chacCamas").val(),
			Banheiros: $("#chacBanheiros").val(),
			Churrasqueiras: $("#chacChurrasqueiras").val(),
			Piscinas: $("#chacPiscinas").val(),
			Descricao: $("#chacDescricao").val(),
			Contrato: "yes",
			totalEstrelas: 0,
			mediaEstrelas: 0,
			qtdVotos: 0,
			userID: user.uid,
			userName: user.displayName,
			userFotoURL: user.photoURL
		};
		updates['/Chacaras/' + postKey] = postData;
		firebase.database().ref().update(updates);
		//Apos salvar os dados o formulario de preenchimento é ocultado
		completeCadChac();
		displayChacNotification();
	});
}

//***********************Funções da Seção de Visualização de Chácaras Disponiveis**************************
//Função usada para pegar os dados do bd e mostra-los na tela
var db = firebase.database().ref();
var RefChac = db.child('Chacaras');
var chacList = document.getElementById("chacList");

function queryDatabase(){
	RefChac.once('value').then(function(snapshot){
		var PostObject = snapshot.val();
		var keys = Object.keys(PostObject);
		var currentRow;
		var li;
		for (var i = 0; i < keys.length; i++){
			var currentObject = PostObject[keys[i]];
			if(i % 1 == 0){
				currentRow = document.createElement("div");
				$(currentRow).addClass("row");
				li = document.createElement("li");
				$(li).addClass("chacLi");				
				$(li).append(currentRow);
			}
			//Criando colunas com a tag div e adicionando a classe col-md-4 (para a imagem) e col-md-8 (para texto).
			var col1 = document.createElement("div");
			$(col1).addClass("col-md-4");
			
			var col2 = document.createElement("div");
			$(col2).addClass("col-md-8");
			$(col2).addClass("chacDiv");
			
			//Criando div's para que possam ser colocados alguns itens dentro delas
			var stars = document.createElement("div");
			$(stars).addClass("contentStars");

			var starsDiv = document.createElement("div");
			$(starsDiv).addClass("divStars");

			var btnChac = document.createElement("div");
			$(btnChac).addClass("btnChac");
			
			var chacDiv1 = document.createElement("div");
			$(chacDiv1).addClass("chacDiv1");
			
			var chacDiv2 = document.createElement("div");
			$(chacDiv2).addClass("chacDiv2");
			$(chacDiv2).addClass("content");
			
			//Criando o elemento da imagem e definindo seu src pelo url da imagem salva pelo usuario no banco de dados
			var chacImage = document.createElement("img");
			chacImage.src = currentObject.imageURL;
			$(chacImage).addClass("contentImage");
			
			//Criando paragrafos que contem as informações da chácara como nome cidade e endereço
			var chacNome = document.createElement("p");
			$(chacNome).addClass("contentInfo");
			$(chacNome).html(currentObject.Nome);

			var chacNome2 = document.createElement("p");
			$(chacNome2).addClass("contentInfo");
			$(chacNome2).html('Nome: ' +  currentObject.Nome);

			var chacEnd = document.createElement("p");
			$(chacEnd).addClass("contentInfo");
			$(chacEnd).html(currentObject.Endereco);

			var chacEnd2 = document.createElement("p");
			$(chacEnd2).addClass("contentInfo");
			$(chacEnd2).html('Localidade: ' +  currentObject.Endereco);

			var chacNum = document.createElement("p");
			$(chacNum).addClass("contentInfo");
			$(chacNum).html('Número: ' + currentObject.Numero);

			var chacComp = document.createElement("p");
			$(chacComp).addClass("contentInfo");
			$(chacComp).html('Complemento: ' + currentObject.Complemento);

			var chacCEP = document.createElement("p");
			$(chacCEP).addClass("contentInfo");
			$(chacCEP).html('CEP: ' + currentObject.CEP);

			var chacCity = document.createElement("p");
			$(chacCity).addClass("contentInfo");
			$(chacCity).html(currentObject.Cidade);

			var chacCity2 = document.createElement("p");
			$(chacCity2).addClass("contentInfo");
			$(chacCity2).html('Cidade: ' + currentObject.Cidade);

			var chacEstado = document.createElement("p");
			$(chacEstado).addClass("contentInfo");
			$(chacEstado).html('Estado: ' + currentObject.Estado);

			var chacQtdQuartos = document.createElement("p");
			$(chacQtdQuartos).addClass("contentInfo2");
			$(chacQtdQuartos).html('Qtd Quartos: ' + currentObject.Quartos);

			var chacQtdCamas = document.createElement("p");
			$(chacQtdCamas).addClass("contentInfo2");
			$(chacQtdCamas).html('Qtd Camas: ' + currentObject.Camas);

			var chacQtdBanheiros = document.createElement("p");
			$(chacQtdBanheiros).addClass("contentInfo2");
			$(chacQtdBanheiros).html('Qtd Banheiros: ' + currentObject.Banheiros);

			var chacQtdChurrasqueiras = document.createElement("p");
			$(chacQtdChurrasqueiras).addClass("contentInfo2");
			$(chacQtdChurrasqueiras).html('Qtd Churrasqueiras: ' + currentObject.Churrasqueiras);

			var chacQtdPiscinas = document.createElement("p");
			$(chacQtdPiscinas).addClass("contentInfo2");
			$(chacQtdPiscinas).html('Qtd Piscinas: ' + currentObject.Piscinas);

			var chacDescricao = document.createElement("p");
			$(chacDescricao).addClass("contentInfo");
			$(chacDescricao).html('Descrição da Chácara: ' + currentObject.Descricao);

			var chacAvaliacao = document.createElement("p");
			$(chacAvaliacao).addClass("contentInfo");
			$(chacAvaliacao).html('Nota de Avaliação: ' + currentObject.mediaEstrelas);

			var precoAluguel = document.createElement("p");
			$(precoAluguel).addClass("contentInfo");
			$(precoAluguel).html('Valor do Aluguel: ' + currentObject.valorAluguel);

			var chacDono = document.createElement("p");
			$(chacDono).addClass("contentInfo");
			$(chacDono).html('Proprietário: ' + currentObject.Dono);

			var userFoto = document.createElement("img");
			userFoto.src = currentObject.userFotoURL;
			$(userFoto).addClass("userFotoChacPage");

			//Criando icones para a pagina com as informações das Chácaras
			var iconQuartos = document.createElement("img");
			iconQuartos.src = 'imagens/icon01.jpg';

			var iconCamas = document.createElement("img");
			iconCamas.src = 'imagens/icon02.jpg';

			var iconBanheiros = document.createElement("img");
			iconBanheiros.src = 'imagens/icon03.jpg';

			var iconChurrasqueiras = document.createElement("img");
			iconChurrasqueiras.src = 'imagens/icon04.jpg';

			var iconPiscinas = document.createElement("img");
			iconPiscinas.src = 'imagens/icon05.jpg';

			var chacContrato = currentObject.Contrato;
			if (chacContrato == 'yes') {
				var iconContrato = document.createElement("img");
				iconContrato.src = 'imagens/icon06.jpg';
				$(iconContrato).addClass("contratoIcon");
				//Criando Botão para selecionar a chácara desejada e requisitar seu aluguel (com contrato)
				var chacBtnContract = document.createElement("button");
				chacBtnContract.innerHTML = 'Tenho Interesse';
				$(chacBtnContract).addClass("btn btn-primary chacBtn");
				$(chacBtnContract).on("click", function(event){
					$("#chacAluguelModalContract").modal();
				});
			} else {
				//Criando Botão para selecionar a chácara desejada e requisitar seu aluguel(sem contrato)
				var chacBtn = document.createElement("button");
				chacBtn.innerHTML = 'Tenho Interesse';
				$(chacBtn).addClass("btn btn-primary chacBtn");
				$(chacBtn).on("click", function(event){
					$("#chacAluguelModal").modal();
				});
			}

			//Criando o campo para avaliação das chácaras
			var starsP = document.createElement("p");
			$(starsP).addClass("starsInfo");
			$(starsP).html('Avalie esta chácara: ');

			var starsUl = document.createElement("ul");
			$(starsUl).addClass("starUl");

			var starsBtn1 = document.createElement("button");
			starsBtn1.innerHTML = 'Votar';
			$(starsBtn1).addClass("btn btn-primary starBtn");
			$(starsBtn1).on("click", function(){
				$('.starLi').removeClass('active');
				$('.starLi').removeClass('secondary-active');
				alert('Sua votação foi realizada com Sucesso!');
			});

			var starsBtn2 = document.createElement("button");
			starsBtn2.innerHTML = 'Limpar';
			$(starsBtn2).addClass("btn btn-primary starBtn");
			$(starsBtn2).on("click", function(){
				$('.starLi').removeClass('active');
				$('.starLi').removeClass('secondary-active');
			});

			var starLi1 = document.createElement("li");
			$(starLi1).addClass("starLi");
			var starLabel1 = document.createElement("label");
			$(starLabel1).attr("for","st1");
			var starIcon1 = document.createElement("i");
			$(starIcon1).addClass("fa fa-star");
			$(starIcon1).attr("aria-hidden","");
			$(starLabel1).append(starIcon1);
			var starInput1 = document.createElement("input");
			$(starInput1).attr("type","radio");
			$(starInput1).attr("name","star");
			$(starInput1).attr("value","1");
			starInput1.id = 'st1';
			$(starLi1).append(starLabel1, starInput1);

			var starLi2 = document.createElement("li");
			$(starLi2).addClass("starLi");
			var starLabel2 = document.createElement("label");
			$(starLabel2).attr("for","st2");
			var starIcon2 = document.createElement("i");
			$(starIcon2).addClass("fa fa-star");
			$(starIcon2).attr("aria-hidden","");
			$(starLabel2).append(starIcon2);
			var starInput2 = document.createElement("input");
			$(starInput2).attr("type","radio");
			$(starInput2).attr("name","star");
			$(starInput2).attr("value","1");
			starInput2.id = 'st2';
			$(starLi2).append(starLabel2, starInput2);

			var starLi3 = document.createElement("li");
			$(starLi3).addClass("starLi");
			var starLabel3 = document.createElement("label");
			$(starLabel3).attr("for","st3");
			var starIcon3 = document.createElement("i");
			$(starIcon3).addClass("fa fa-star");
			$(starIcon3).attr("aria-hidden","");
			$(starLabel3).append(starIcon3);
			var starInput3 = document.createElement("input");
			$(starInput3).attr("type","radio");
			$(starInput3).attr("name","star");
			$(starInput3).attr("value","1");
			starInput3.id = 'st3';
			$(starLi3).append(starLabel3, starInput3);

			var starLi4 = document.createElement("li");
			$(starLi4).addClass("starLi");
			var starLabel4 = document.createElement("label");
			$(starLabel4).attr("for","st4");
			var starIcon4 = document.createElement("i");
			$(starIcon4).addClass("fa fa-star");
			$(starIcon4).attr("aria-hidden","");
			$(starLabel4).append(starIcon4);
			var starInput4 = document.createElement("input");
			$(starInput4).attr("type","radio");
			$(starInput4).attr("name","star");
			$(starInput4).attr("value","1");
			starInput4.id = 'st4';
			$(starLi4).append(starLabel4, starInput4);

			var starLi5 = document.createElement("li");
			$(starLi5).addClass("starLi");
			var starLabel5 = document.createElement("label");
			$(starLabel5).attr("for","st5");
			var starIcon5 = document.createElement("i");
			$(starIcon5).addClass("fa fa-star");
			$(starIcon5).attr("aria-hidden","");
			$(starLabel5).append(starIcon5);
			var starInput5 = document.createElement("input");
			$(starInput5).attr("type","radio");
			$(starInput5).attr("name","star");
			$(starInput5).attr("value","1");
			starInput5.id = 'st5';
			$(starLi5).append(starLabel5, starInput5);

			$(starsUl).append(starsP, starLi1, starLi2, starLi3, starLi4, starLi5);
			
			$('.starLi').on('click', function(){
				//$('.starLi').removeClass('active');
				//$('.starLi').removeClass('secondary-active');
				$(this).addClass('active');
				$(this).prevAll().addClass('secondary-active');
			})

			//Criando a visualização da avaliação da chácara (resultado)
			var avaliacao = currentObject.mediaEstrelas;
			if (avaliacao == 5) {
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
			}if (avaliacao == 4) {
				var star1 = document.createElement("img");
				star1.src = 'imagens/star1.png';				
				var star2 = document.createElement("img");
				star2.src = 'imagens/star1.png';				
				var star3 = document.createElement("img");
				star3.src = 'imagens/star1.png';				
				var star4 = document.createElement("img");
				star4.src = 'imagens/star1.png';				
				var star5 = document.createElement("img");
				star5.src = 'imagens/star0.png';
			}if (avaliacao == 3) {
				var star1 = document.createElement("img");
				star1.src = 'imagens/star1.png';				
				var star2 = document.createElement("img");
				star2.src = 'imagens/star1.png';				
				var star3 = document.createElement("img");
				star3.src = 'imagens/star1.png';				
				var star4 = document.createElement("img");
				star4.src = 'imagens/star0.png';				
				var star5 = document.createElement("img");
				star5.src = 'imagens/star0.png';
			}if (avaliacao == 2) {
				var star1 = document.createElement("img");
				star1.src = 'imagens/star1.png';				
				var star2 = document.createElement("img");
				star2.src = 'imagens/star1.png';				
				var star3 = document.createElement("img");
				star3.src = 'imagens/star0.png';				
				var star4 = document.createElement("img");
				star4.src = 'imagens/star0.png';				
				var star5 = document.createElement("img");
				star5.src = 'imagens/star0.png';
			}if (avaliacao == 1) {
				var star1 = document.createElement("img");
				star1.src = 'imagens/star1.png';				
				var star2 = document.createElement("img");
				star2.src = 'imagens/star0.png';				
				var star3 = document.createElement("img");
				star3.src = 'imagens/star0.png';				
				var star4 = document.createElement("img");
				star4.src = 'imagens/star0.png';				
				var star5 = document.createElement("img");
				star5.src = 'imagens/star0.png';
			}if(avaliacao == 0) {
				var star1 = document.createElement("img");
				star1.src = 'imagens/star0.png';				
				var star2 = document.createElement("img");
				star2.src = 'imagens/star0.png';				
				var star3 = document.createElement("img");
				star3.src = 'imagens/star0.png';				
				var star4 = document.createElement("img");
				star4.src = 'imagens/star0.png';				
				var star5 = document.createElement("img");
				star5.src = 'imagens/star0.png';
			}

			//Criando Botão para selecionar a chácara desejada e visualizar suas informações completas
			var chacInfoBtn = document.createElement("button");
			chacInfoBtn.innerHTML = 'Visualizar todas as informações';
			$(chacInfoBtn).addClass("btn btn-primary collapsible");
			$(chacInfoBtn).on("click", function(event){
				mostrarChac();
			});
			
			$('#chacList').append(li);
			$(stars).append(star1, star2, star3, star4, star5);
			$(starsDiv).append(starsUl, starsBtn1, starsBtn2);
			$(btnChac).append(chacBtn, chacBtnContract);
			$(col1).append(chacImage);
			$(chacDiv1).append(chacNome, chacEnd, chacCity, iconContrato);
			$(chacDiv2).append(chacNome2, chacEnd2, chacNum, chacComp, chacCEP, chacCity2, chacEstado, chacAvaliacao, 
				precoAluguel, iconQuartos, chacQtdQuartos, iconCamas, chacQtdCamas, iconBanheiros, chacQtdBanheiros, 
				iconChurrasqueiras, chacQtdChurrasqueiras, iconPiscinas,chacQtdPiscinas, chacDescricao, 
				chacDono, userFoto, starsDiv, btnChac);			
			$(col2).append(chacDiv1, stars, chacInfoBtn, chacDiv2);	
			$(currentRow).append(col1, col2);
		}
	});
}

//****************Função da Seção de Visualização de Informações da Chácara selecionada*****************
function mostrarChac(){
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    } 
	  });
	}
}

//*******************Função do Filtro de Pesquisa por nome, endereço ou cidade**************************
function buscarFiltro() {
    var input, filtro, ul, li, div, i;
        
    input = document.getElementById("buscaInput");
    filtro = input.value.toUpperCase();
    ul = document.getElementById("chacList");
    li = ul.getElementsByClassName("chacLi");
        
    for (i = 0; i < li.length; i++) {
        div = li[i].getElementsByTagName("div")[0];
        if (div.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//***********************Função para a Notificação de Nova Chácara cadastrada****************************
function displayChacNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: 'Uma nova Chácara foi cadastrada em nosso App! Venha Conferir!!!',
      icon: '/imagens/icons/app-icon-96x96.png',
      dir: 'ltr',
      lang: 'pt-BR',
      vibrate: [100, 50, 200],
      badge: '/imagens/icons/app-icon-96x96.png',
      tag: 'chac-notification',
      renotify: true,
      actions: [
        { action: 'open', title: 'Ver', icon: '/imagens/icons/app-icon-96x96.png' },
        { action: 'cancel', title: 'Fechar', icon: '/imagens/icons/app-icon-96x96.png' }
      ]
    };

    navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Novidades em nosso App!!!', options);
      });
  }
}

//**********************Função para a Notificação do Aluguel da Chácara escolhida***************************
function displayAluguelNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: 'Em instantes voçê receberá o contato do Proprietário para que possam resolver os detalhes da locação da chácara!',
      icon: '/imagens/icons/app-icon-96x96.png',
      dir: 'ltr',
      lang: 'pt-BR',
      vibrate: [100, 50, 200],
      badge: '/imagens/icons/app-icon-96x96.png',
      tag: 'alugChac-notification',
      renotify: true,
      actions: [
        { action: 'continue', title: 'Ir para a página', icon: '/imagens/icons/app-icon-96x96.png' },
        { action: 'cancel', title: 'Fechar', icon: '/imagens/icons/app-icon-96x96.png' }
      ]
    };

    navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Você alugou uma Chácara em nosso App!', options);
      });
  }

  console.log('Usuário escolheu a chácara!!!');
}

//*******************Função para a Notificação da Solicitação de contrato da chácara***********************
function displaySolicitarNotification() {
  if ('serviceWorker' in navigator) {
    var options = {
      body: 'Enviaremos sua solicitação ao proprietário da chácara! Você será notificado assim que o proprietário decidir por fazer o contrato.',
      icon: '/imagens/icons/app-icon-96x96.png',
      dir: 'ltr',
      lang: 'pt-BR',
      vibrate: [100, 50, 200],
      badge: '/imagens/icons/app-icon-96x96.png',
      tag: 'solicitarContract-notification',
      renotify: true,
      actions: [
        { action: 'confirm', title: 'Ok', icon: '/imagens/icons/app-icon-96x96.png' },
        { action: 'cancel', title: 'Fechar', icon: '/imagens/icons/app-icon-96x96.png' }
      ]
    };

    navigator.serviceWorker.ready
      .then(function(swreg) {
        swreg.showNotification('Seu pedido de contrato será encaminhado!', options);
      });
  }

  console.log('Usuário solicitou contrato!!!');
}

//**********************Função para mostrar o resultado da Avaliação do Usuario***************************
function criarStarsForUsers() {
	var numAleatorioHist = Math.floor(Math.random() * 3);
	var numAleatorio = Math.floor(Math.random() * 5);

	var st1 = document.createElement("img");
	st1.src = 'imagens/star0.png';
	var st2 = document.createElement("img");
	st2.src = 'imagens/star0.png';
	var st3 = document.createElement("img");
	st3.src = 'imagens/star0.png';
	var st4 = document.createElement("img");
	st4.src = 'imagens/star0.png';
	var st5 = document.createElement("img");
	st5.src = 'imagens/star0.png';
	
	if (numAleatorio == 5) {
		st1.src = 'imagen/star1.png';
		st2.src = 'imagens/star1.png';
		st3.src = 'imagens/star1.png';
		st4.src = 'imagens/star1.png';
		st5.src = 'imagens/star1.png';
	}	
	if (numAleatorio == 4) {
		st1.src = 'imagens/star1.png';
		st2.src = 'imagens/star1.png';
		st3.src = 'imagens/star1.png';
		st4.src = 'imagens/star1.png';
		st5.src = 'imagens/star0.png';
	}
	if (numAleatorio == 3) {
		st1.src = 'imagens/star1.png';
		st2.src = 'imagens/star1.png';
		st3.src = 'imagens/star1.png';
		st4.src = 'imagens/star0.png';
		st5.src = 'imagens/star0.png';
	}
	if (numAleatorio == 2) {
		st1.src = 'imagens/star1.png';
		st2.src = 'imagens/star1.png';
		st3.src = 'imagens/star0.png';
		st4.src = 'imagens/star0.png';
		st5.src = 'imagens/star0.png';
	}
	if (numAleatorio == 1) {
		st1.src = 'imagens/star1.png';
		st2.src = 'imagens/star0.png';
		st3.src = 'imagens/star0.png';
		st4.src = 'imagens/star0.png';
		st5.src = 'imagens/star0.png';
	}
	if (numAleatorio == 0) {
		st1.src = 'imagens/star0.png';
		st2.src = 'imagens/star0.png';
		st3.src = 'imagens/star0.png';
		st4.src = 'imagens/star0.png';
		st5.src = 'imagens/star0.png';
	}

	$('#userAvaliacao').append(st1, st2, st3, st4, st5);
	$('#userHistorico').html(numAleatorioHist + ' Chácaras Alugadas');
}

//********************************Botão Top Up*************************************************
// Quando o usuário rolar para baixo da parte superior do documento mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("topUpBtn").style.display = "block";
    } else {
        document.getElementById("topUpBtn").style.display = "none";
    }
}

// Quando o usuário clica no botão, volta até o topo do documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}