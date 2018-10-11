var user;
var selectedFile;

document.getElementById("upload").addEventListener('change', handleFileSelect, false);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var token = firebase.auth().currentUser.uid;
    } else {
      // No user is signed in.
      window.location = "login.html";
    }
});

function handleFileSelect(event) {
    selectedFile = event.target.files[0];
};

//Função para salvar os dados do usuario com a url da imagem selecionada e salvar a imagem no storege do firebase na pasta apropriada
function saveUser() {
    //Criando uma referencia ao root
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('/fotos-usuarios/' + filename);
    var uploadTask = storageRef.put(selectedFile);

    uploadTask.on('state_changed', function(snapshot){

    },function(error){
        //Em caso de der algum erro ao enviar os dados
    },function(){
        //Em caso de sucesso ao enviar os dados
        var postKey = firebase.database().ref('Usuarios/').push().key;
        var downloadURL = uploadTask.snapshot.downloadURL;
        var updates = {};
        var postData = {
            imageURL: downloadURL,
            Nome: $("#nomeInput").val(),
            Idade: $("#idadeInput").val(),
            Profissao: $("#profissaoInput").val(),
            Cidade: $("#cidadeInput").val(),
            Estado: $("#estadoInput").val(),
            //userID: user.uid,
            //userName: user.displayName
        };
        updates['/Usuarios/' + postKey] = postData;
        firebase.database().ref().update(updates);
        //Apos salvar os dados é exibida uma mensagem de confirmação
        alert("Dados salvos com sucesso!!!");
    });
}