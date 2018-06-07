function cipher() {
  var userInput = document.getElementById('user-input').value;

  if (userInput === ''){
    alert('Digite sua palavra!');
  } else { 
      // tratando o input de números
      for (a = 0; a < 10; a++){
        if (userInput.indexOf(a) > -1){
          alert('Digite somente ĺetras!');
          return false;
        }
      }

      var lettersArray = userInput.split('');
      var lettersCodes = []; 
      
      // obtendo os códigos ASCII
      for (i = 0; i < lettersArray.length; i++){ 
        var code = userInput.charCodeAt([i]);
        lettersCodes.push(code);
      }

      var cipherLettersCodes = [];
      var cipherCodeNumber;
      var cipherCode;

      // verificando se as letras são maiúsculas ou minúsculas
      // aplicando a fórmula com o valor correspondente à tabela ASCII
      for (j = 0; j < lettersCodes.length; j++){ 
        if (lettersCodes[j] >= 65 && lettersCodes[j] <= 90){
          cipherCodeNumber = (lettersCodes[j] - 65 + 33) % 26 + 65;
          cipherCode = String.fromCharCode(cipherCodeNumber);
          cipherLettersCodes.push(cipherCode);
        } else if (lettersCodes[j] >= 97 && lettersCodes[j] <= 122){
          cipherCodeNumber = (lettersCodes[j] - 97 + 33) % 26 + 97;
          cipherCode = String.fromCharCode(cipherCodeNumber);
          cipherLettersCodes.push(cipherCode);
        } 
      }

      var encryptedMessage = cipherLettersCodes.join('');
      var printMessage = document.getElementById('message');

      return printMessage.innerHTML = 'Sua mensagem é ' + encryptedMessage + '!';
    }

}



function decipher(){

}