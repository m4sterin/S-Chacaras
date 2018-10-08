/*Codigo de validação dos dados da tela de Alteração de Cadastro do Usuario*/
function validar_cadchac(){
	debugger;
	var nome_chacara = document.getElementById("nome_chacara").value;
	var endereco = document.getElementById("endereco").value;
	var cep = document.getElementById("cep").value;
	var qtdquartos = document.getElementById("qtdquartos").value;
	var qtdbanheiros = document.getElementById("qtdbanheiros").value;
	var qtdchurrasqueira = document.getElementById("qtdchurrasqueira").value;
	var qtdpiscina = document.getElementById("qtdpiscina").value;
	var descricao = document.getElementById("descricao").value;

	if(nome_chacara == "" || nome_chacara.lenght < 3){
		alert("Preencha o campo 'Nome da Chácara' corretamente!");
		return false;
	}
	if(endereco == "" || endereco.lenght < 3){
		alert("Preencha o campo 'Endereço' corretamente!");
		return false;
	}
	if(cep == "" || cep.lenght < 8){
		alert("Preencha o campo 'CEP' corretamente!");
		return false;
	}
	if(qtdquartos == ""){
		alert("Preencha o campo 'Quantidade de Quartos' corretamente!");
		return false;
	}
	if(qtdbanheiros == ""){
		alert("Preencha o campo 'Quantidade de Banheiros' corretamente!");
		return false;
	}
	if(qtdchurrasqueira == ""){
		alert("Preencha o campo 'Quantidade de Churrasqueiras' corretamente!");
		return false;
	}
	if(qtdpiscina == ""){
		alert("Preencha o campo 'Quantidade de Piscinas' corretamente!");
		return false;
	}

	return true;
}