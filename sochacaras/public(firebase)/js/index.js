<<<<<<< HEAD
//Verificar se o usuario esta logado ou não
$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var token = firebase.auth().currentUser.uid;
	    queryDatabase();
	  } else {
	    // No user is signed in.
	    window.location = "index.html";
	  }
	});
});

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
			var image = document.createElement("img");
			image.src = currentObject.imageURL;
			$(image).addClass("contentImage");
			
			//Criando paragrafos que contem as informações da chácara como nome cidade e endereço
			var p1 = document.createElement("p");
			$(p1).addClass("contentInfo");
			$(p1).html(currentObject.Nome);

			var p2 = document.createElement("p");
			$(p2).addClass("contentInfo");
			$(p2).html(currentObject.Endereco);

			var p3 = document.createElement("p");
			$(p3).addClass("contentInfo");
			$(p3).html(currentObject.Cidade);

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
			var btn = document.createElement("button");
			btn.innerHTML = 'Visualizar informações';
			$(btn).addClass("btn btn-primary");
			$(btn).on("click", function(event){

			});
			
			$(col).append(image);
			$(stars).append(star1, star2, star3, star4, star5);
			$(col2).append(p1, p2, p3, stars, btn);		
			$(currentRow).append(col, col2);
		}
	});
}




//Trecho do codigo antigo usado para pegar os dados do bd e mostra-los na pagina index (nao esta mais em uso)
//var rootRef = firebase.database().ref().child("Chacaras");
//
//rootRef.on("child_added", snap =>{
//	var nome = snap.child("Nome").val();
//	var endereco = snap.child("Endereco").val();
//	var numero = snap.child("Numero").val();
//	var complemento = snap.child("Complemento").val();
//	var cidade = snap.child("Cidade").val();
//	var estado = snap.child("Estado").val();
//	var dono = snap.child("Dono").val();
//	var image = snap.child("imageURL").val(); 
//
//	//Criando elementos na html no local designado
//	$("#chacarasDisplay").append("<div><div><img>" + image + "</img></div><div> Chácara: " + nome +
//		"</div><div> Endereço: " + endereco + "</div><div> Número: " + numero + "</div><div> Complemento: "
//		+ complemento + "</div><div> Cidade:" + cidade + "</div><div> Estado:" + estado + 
//		"</div><div> Proprietário:" + dono + "</div></div><br>");
=======
//Verificar se o usuario esta logado ou não
$(document).ready(function(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var token = firebase.auth().currentUser.uid;
	    queryDatabase();
	  } else {
	    // No user is signed in.
	    window.location = "index.html";
	  }
	});
});

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
			var image = document.createElement("img");
			image.src = currentObject.imageURL;
			$(image).addClass("contentImage");
			
			//Criando paragrafos que contem as informações da chácara como nome cidade e endereço
			var p1 = document.createElement("p");
			$(p1).addClass("contentInfo");
			$(p1).html(currentObject.Nome);

			var p2 = document.createElement("p");
			$(p2).addClass("contentInfo");
			$(p2).html(currentObject.Endereco);

			var p3 = document.createElement("p");
			$(p3).addClass("contentInfo");
			$(p3).html(currentObject.Cidade);

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
			var btn = document.createElement("button");
			btn.innerHTML = 'Visualizar informações';
			$(btn).addClass("btn btn-primary");
			$(btn).on("click", function(event){

			});
			
			$(col).append(image);
			$(stars).append(star1, star2, star3, star4, star5);
			$(col2).append(p1, p2, p3, stars, btn);		
			$(currentRow).append(col, col2);
		}
	});
}

//Trecho do codigo antigo usado para pegar os dados do bd e mostra-los na pagina index (nao esta mais em uso)
//var rootRef = firebase.database().ref().child("Chacaras");
//
//rootRef.on("child_added", snap =>{
//	var nome = snap.child("Nome").val();
//	var endereco = snap.child("Endereco").val();
//	var numero = snap.child("Numero").val();
//	var complemento = snap.child("Complemento").val();
//	var cidade = snap.child("Cidade").val();
//	var estado = snap.child("Estado").val();
//	var dono = snap.child("Dono").val();
//	var image = snap.child("imageURL").val(); 
//
//	//Criando elementos na html no local designado
//	$("#chacarasDisplay").append("<div><div><img>" + image + "</img></div><div> Chácara: " + nome +
//		"</div><div> Endereço: " + endereco + "</div><div> Número: " + numero + "</div><div> Complemento: "
//		+ complemento + "</div><div> Cidade:" + cidade + "</div><div> Estado:" + estado + 
//		"</div><div> Proprietário:" + dono + "</div></div><br>");
>>>>>>> master
//});