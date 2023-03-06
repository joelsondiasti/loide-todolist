# Aula 03 - Javascript


## Revisando tipos de dados

**String**: é um conjunto de caracteres, incluindo letras, números, caracteres especiais e espaços. Geralmente aparecem entre aspas duplas.

```javascript
var texto = "Olá Mundo!"
```

**Number**: representa qualquer valor numérico, seja ele decimal ou inteiro.
Obs: Nos números decimais utilzamos ponto (.) no lugar da vírgula(,)

```javascript
var numero = 2
var decimal = 2.5
```

**Boolean**:representa valores VERDADEIRO / FALSO 

```javascript
var verdadeiro = true
var falso = false

var verdadeiro = 1
var falso = 0 
```

**Object**: é uma etrutura que armazena chaves e valores. 

```javascript
var objeto = {
    chave: "valor"
}

var pessoa = {
    nome: "Joelson Dias",
    idade: 27, 
    uf: "RJ", 
    profissao: "Desenvolvedor Frontend",
    linguagens: ["javascript", "html", "css", "typescript", "java", "python"] 
}
```

**Array**: é uma estrutura de dados que representa uma lista de dados, geralmente do mesmo tipo. 

```javascript
// Array de strings
var linguagens = ["javascript", "html", "css", "typescript", "java", "python"] 

// Array de números 
var numeros = [0,1,2,3,5,60,7.5]

//Array de objetos
var objetos = [
    {nome: "Joelson Dias", idade: 27},
    {nome: "Jobson da Silva", idade: 27},
    {nome: "Jonelson Dias", idade: 27},    
    {nome: "João Nelson Dias", idade: 27},    
]
//Array de arrays
var Arrays = [
    [0,1,22,4,6,67],
    ["segunda", "terça", "quarta"],
    [true, true, false],
]
```

## Persistência de Dados

**O que é?** O termo persistência de dados em si refere-se a qualquer forma de armazenamento de dados que for necessária em nosso sistema.

**Como persistir esses dados?** Utilizando a API localStorage disponível pelo navegador. 

**Segundo o ChatGPT:**
 O LocalStorage permite que você armazene dados no navegador do usuário em pares de chave-valor, e esses dados persistem mesmo após o usuário fechar o navegador.

Para este exemplo, vamos supor que você deseja armazenar o nome do usuário no LocalStorage. Você pode fazer isso da seguinte maneira:

````javascript

// Define o nome do usuário
const nome = "Maria";

// Armazena o nome no LocalStorage
localStorage.setItem("nome", nome);

// Recupera o nome do LocalStorage
const nomeArmazenado = localStorage.getItem("nome");

// Exibe o nome na página
console.log(`O nome armazenado é: ${nomeArmazenado}`);
````

Este código define o nome da variável nome como "Maria" e, em seguida, armazena esse valor no LocalStorage usando o método setItem. Ele também recupera o valor armazenado usando o método getItem e o armazena na variável nomeArmazenado. Por fim, ele exibe o valor armazenado na página usando o console.log.

Lembre-se de que os dados armazenados no LocalStorage são armazenados como strings, portanto, se você precisar armazenar outros tipos de dados, como números ou objetos, precisará converter esses valores em strings antes de armazená-los e, em seguida, convertê-los de volta em seu tipo original ao recuperá-los.







