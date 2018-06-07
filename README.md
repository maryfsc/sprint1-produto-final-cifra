# sprint1-produto-final-cifra
Um dos produtos finais do Sprint 1 da Laboratória SP 2018-1. Cifra de César.

No evento de clique no botão do formulário HTML, inicia a função JavaScript cipher().

Variável userInput é criada, obtendo o valor do input de texto do usuário no formulário HTML.

Na condicional, se userInput for uma string vazia, retorna o alerta 'Digite sua palavra!'. 

Caso contrário, verifica-se se essa string possui números através de um loop com o contador de 0 a 9, ou menos de 10. Se for encontrado um número maior que -1 usando indexOf, significa que a string possui números. Logo, exibe o alerta 'Digite somente letras!'. 

Dando prosseguimento à função, uma vez que contenha uma string somente com letras.

Uma array vazia lettersCodes é criada.

Por meio de um loop em userInput, cria-se uma variável code que recebe o código ASCII de cada elemento da string, usando charCodeAt(). Por meio do método push(), lettersCodes recebe code, se tornando uma array de códigos ASCII para cada letra de userInput.

Cria-se uma array vazia cipherLettersCodes, uma varíavel indefinida cipherCodeNumber, e ainda outra variável indefinida cipherCode.

Através de um loop em lettersCodes, verifica-se no controle de fluxo se o elemento contido no index atual de lettersCodes está dentro de um range de maior ou igual a 65 ou menor ou igual a 90, obtendo dessa forma a verificação se o código ASCII a ser tratado é de uma letra maiúscula. 

	Caso true, cipherCodeNumber recebe o resultado da fórmula (elemento do index atual de lettersCodes - 65 + 33) % 26 + 65, para verificar por qual ASCII de letra maiúscula o original será substituído.

	cipherCode recebe o resultado deste cálculo, e aplica-se String.fromCharCode() para descobrir qual letra corresponde ao código ASCII obtido.

	Por meio de um push(), cipherLettersCodes recebe a letra já encriptografada.

Na outra condição, se o elemento da posição atual de lettersCodes estiver no range definido de maior ou igual a 97 ou menor ou igual a 122, obtem-se a verificação se o código ASCII a ser tratado é de uma letra minúscula.

	Caso true, cipherCodeNumber recebe a fórmula (elemento do index atual de lettersCode - 97 + 33) % 26 + 97, para verificar por qual ASCII de letra minúscula o ASCII original será substituído.

	cipherCode recebe o resultado do cálculo, aplicando String.fromCharCode() para descobrir qual letra corresponde ao ASCII obtido.

	cipherLettersCodes recebe a letra encriptografada por meio de um push().

Cria-se a variável encryptedMessage, que recebe cipherLettersCodes, antes um array de letras encriptografadas, agora uma string unida por join(''). 

Cria-se a variável printMessage, que recebe o elemento HTML de id 'message'.

A função retorna printMessage com uma mensagem no HTML contendo 'Sua mensagem é ' mais a varíavel encryptedMessage, seguido de '!'.

Encerra-se a função.