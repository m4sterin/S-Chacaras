/*Codigo de validação dos dados da tela de Alteração de Cadastro do Usuario*/
function alterarCadastro(){
	debugger;
	var novoNome = document.getElementById("novoNome").value;
	var novoCPF = document.getElementById("novoCPF").value;
	var novoEmail1 = document.getElementById("novoEmail1").value;
	var novoEmail2 = document.getElementById("novoEmail2").value;
	var novaProfissao = document.getElementById("novaProfissao").value;
	var senhaAtual = document.getElementById("senha1").value;
	var novaSenha1 = document.getElementById("novaSenha1").value;
	var novaSenha2 = document.getElementById("novaSenha2").value;

	if(novoNome == "" || novoNome.length < 3){
		alert("Preencha o campo 'Nome' Corretamente!");
		return false;
	}

	if(novoCPF == "" || novoCPF.length != 11){
		alert("Preencha o campo 'CPF' Corretamente!");
		return false;
	}

	if (novoEmail1 == "" || novoEmail1 ('@') == -1){
		alert("Preencha o campo 'E-mail' Corretamente!");
		return false;
	}

	if (novoEmail2 == "" || novoEmail2 ('@') == -1){
		alert("Preencha a 'Confirmação do E-mail' Corretamente!");
		return false;
	}

	if(novoEmail1 != novoEmail2){
		alert("Os E-mail's informados são diferentes!");
		return false;
	}

	if(novaProfissao == ""){
		alert("Preencha o campo 'Profissão' Corretamente!");
		return false;
	}

	if(novaSenha1 != novaSenha2){
		alert("As senhas são diferentes!");
		return false;
	}

	return true;
}
