function cipher() {
  var userInput = document.getElementById('user-input');

  if (userInput === '' || userInput === Number){
  	alert('Digite sua palavra! Use apenas letras!');
  } else {
    
      var lettersArray = userInput.split('');
      var lettersCodes = []; 

      for (i = 0; i < lettersArray.length; i++){ // fazendo loop nesse array para pegar os códigos ASCII
        var code = userInput.charCodeAt([i]);
        lettersCodes.push(code);
      }

      var cipherLettersCodes = [];

      // verificando se as letras são maiúsculas ou minúsculas
      // aplicando a fórmula com o valor correspondente 
      for (j = 0; j < lettersCodes.length; j++){ 
      	if (lettersCodes[j] >= 65 && lettersCodes[j] <= 90){
      	  cipherLettersCodes.push((lettersCodes[j] - 65 + 33) % 26 + 65);
      	} else if (lettersCodes[j] >= 97 && lettersCodes[j] <= 122){
      	  cipherLettersCodes.push((lettersCodes[j] - 97 + 33) % 26 + 97);
      	} 
      }

  }
}



function decipher(){

}