//Verificar se o usuario esta logado ou não
$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var token = firebase.auth().currentUser.uid;
	  } else {
	    // No user is signed in.
	  }
	});
});

//Trecho do codigo usado para pegar os dados do bd e mostra-los na pagina index
var rootRef = firebase.database().ref().child("Chacaras");

rootRef.on("child_added", snap =>{
	var nome = snap.child("Nome").val();
	var endereco = snap.child("Endereco").val();
	var numero = snap.child("Numero").val();
	var complemento = snap.child("Complemento").val();
	var cidade = snap.child("Cidade").val();
	var estado = snap.child("Estado").val();
	var dono = snap.child("Dono").val();
	var image = snap.child("imageURL").val(); 

	//Criando elementos na html no local designado
	$("#chacarasDisplay").append("<div><div><img>" + image + "</img></div><div> Chácara: " + nome +
		"</div><div> Endereço: " + endereco + "</div><div> Número: " + numero + "</div><div> Complemento: "
		+ complemento + "</div><div> Cidade:" + cidade + "</div><div> Estado:" + estado + 
		"</div><div> Proprietário:" + dono + "</div></div><br>");
});