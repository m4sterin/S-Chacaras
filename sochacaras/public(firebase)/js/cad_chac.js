var user;
var selectedFile;

document.getElementById("upload").addEventListener('change', handleFileSelect, false); //dispara a função que mostra a area de cadastro de chacaras

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	  var token = firebase.auth().currentUser.uid;
	} else {
	  // No user is signed in.
	  window.location = "login.html";
	}
});

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
			Banheiros: $("#chacBanheiros").val(),
			Churrasqueiras: $("#chacChurrasqueiras").val(),
			Piscinas: $("#chacPiscinas").val(),
			Descricao: $("#chacDescricao").val(),
		};
		updates['/Chacaras/' + postKey] = postData;
		firebase.database().ref().update(updates);
		//Apos salvar os dados o formulario de preenchimento é ocultado e 
		//é exibida uma mensagem de confirmação
		alert("Dados salvos com sucesso!!!");
	});
}

function cancelar() {
	window.open("index.html", '_self');
}