// Existem 3 formas que eu conheço de declarar uma variável, são elas: var, let e const. Vejamos como é a sintaxe de declaração de variaveis no JavaScript

var nome = 'Tetta';
let sobrenome = "Tetinha";
const apelido = `Arthur`;
let idade = 22;
let genio = true;

/* 
  Como podemos ver, a sintaxe se dá da seguinte forma: 
  1º - A forma como a variável vai ser declarada, com var, let ou const.
  2º - O nome da variável, que deve seguir algumas regras especificas que não vou entrar em detalhes aqui.
  3º - O sinal de atribuição "=", que significa que a variável antes dele vai receber o valor que será declarado em seguida.
  4º - O valor que será atribuido à variável, veja que no caso de textos o valor é passado entre aspas simples, duplas ou crases, e no caso de valores numericos, ou logicos, somente o valor é necessário.
*/

// Tbm podemos realizar operações, verificações ou simplesmente acessar nossas variáveis utilizando seus nomes, veja abaixo:

console.log(nome + ' ' + sobrenome); //Imprime no console o conteudo da variável nome + o conteúdo da variável sobrenome separados por um espaço em branco.

let a = 2;
let b = 3;

console.log(a + b); // Imprime no console a soma de 2 + 3, ou seja, 5.
