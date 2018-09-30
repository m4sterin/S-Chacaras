/*Codigo de validação da tela de cadastro de usuario*/
function validarCadastro(){
	debugger;
	var nome = document.getElementById("nome").value;
	var cpf = document.getElementById("cpf").value;
	var email1 = document.getElementById("email1").value;
	var email2 = document.getElementById("email2").value;
	var profissao = document.getElementById("profissao").value;
	var senha1 = document.getElementById("senha1").value;
	var senha2 = document.getElementById("senha2").value;

	if(nome == "" || nome.length < 3){
		alert("Preencha o campo 'Nome' Corretamente!");
		return false;
	}

	if(cpf == "" || cpf.length != 11){
		alert("Preeencha o campo 'CPF' Corretamente!");
		return false;
	}

	if (email1 == "" || email1 ('@') == -1 || email1 == null){
		alert("Preencha o campo 'E-mail' Corretamente!");
		return false;
	}

	if (email2 == "" || email2 ('@') == -1 email2 == null){
		alert("Preencha a 'Confirmação de E-mail' Corretamente!");
		return false;
	}
	
	if(email1 != email2){
		alert("Os E-mail's informados são diferentes!");
		return false;
	}

	if(profissao == ""){
		alert("Preencha o campo 'Profissão' Corretamente!");
		return false;
	}

	if (senha1 == ""){
		alert("Informe uma Senha!");
		return false;
	}

	if (senha2 == ""){
		alert("Informe uma Senha!");
		return false;
	}

	if(senha1 != senha2){
		alert("As senhas são diferentes!");
		return false;
	}

	return true;
}