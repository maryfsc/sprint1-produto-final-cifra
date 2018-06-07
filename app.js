function cipher() {
  var userInput = document.getElementById('user-input').value;
  
  if (userInput === ''){
    alert('Digite sua palavra!');
  } else { 
    for (a = 0; a < 10; a++){
      if (userInput.indexOf(a) > -1){
        alert('Digite somente ĺetras!');
        return false;
      }
    }

    var lettersCodes = []; 

    for (i = 0; i < userInput.length; i++){ 
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

function decipher(userWord){

  if (userWord === ''){
    alert('Digite sua palavra!');
  } else {
  for (a = 0; a < 10; a++){
    if (userWord.indexOf(a) > -1){
      alert('Digite somente ĺetras!');
      return false;
    }
  }

  var decipherLettersCodes = []; 

  for (i = 0; i < userWord.length; i++){ 
    var decipherCode = userWord.charCodeAt([i]);
    decipherLettersCodes.push(decipherCode);
  }

  var arrDecipherCodes = [];
  var decipherCodeNumber;
  var decipherCode;

  for (j = 0; j < decipherLettersCodes.length; j++){ 
    if (decipherLettersCodes[j] >= 65 && decipherLettersCodes[j] <= 90){
      decipherCodeNumber = (decipherLettersCodes[j] - 7);
      if (decipherCodeNumber < 65){
        decipherCodeNumber += 26;
      }
      decipherCode = String.fromCharCode(decipherCodeNumber);
      arrDecipherCodes.push(decipherCode);
    } else if (decipherLettersCodes[j] >= 97 && decipherLettersCodes[j] <= 122){
        decipherCodeNumber = (decipherLettersCodes[j] - 7);
        if (decipherCodeNumber < 97){
          decipherCodeNumber += 26;
        }
        decipherCode = String.fromCharCode(decipherCodeNumber);
        arrDecipherCodes.push(decipherCode);
      } 
    }
  } 
  
  var decipheredMessage = arrDecipherCodes.join('');
  return decipheredMessage;
}