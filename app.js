function cipher() {
  var userInput = document.getElementById('user-input');

  if (userInput === '' || userInput === Number){
    alert('Digite sua palavra! Use apenas letras!');
  } else {
    
      var lettersArray = userInput.split('');
      var lettersCodes = [];

      for (i = 0; i < lettersArray.length; i++){
        var code = userInput.charCodeAt([i]);
        lettersCodes.push(code);
      }

      
  }
}



function decipher(){

}