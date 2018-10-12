/* Codigo de validação da tela de login */
function validarLogin(){
	debugger;
	var usuario = document.getElementById("usuario").value;
	var senhaLogin = document.getElementById("senhaLogin").value;

	if(senhaLogin == ""){
		alert("Usuário ou Senha Incorretos!");
		return false;
	}

	if(usuario == "" || usuario ("@") == -1 || usuario == null){
		alert("Usuário em branco!");
		return false;
	}

	return true;	
}