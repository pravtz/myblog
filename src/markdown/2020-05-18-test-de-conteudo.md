---
date: 2020-05-16 16:20:23
title: Test de Conteudo
description: Este é um poste de exemplo para estilizar os marcadores do grande markdown
category: JS
nameImage: javascript
---

## Resumo de Arrays em JavaScript

### *Algo extremamente importante quando se inicia o aprendisado com a linguagem javascript é conhecer bem todos os métodos e propriedades de um array, parece brincadeira, mas quando se conhece bem tais métodos a linguagem se torna mais fácil. Dedique um tempo e faça exemplos de todos os metodos citados. Vai valer apena!*



## Conceito:
Array é um objeto destinado a armazenar uma coleção ordenada de dados indexados sequencialmente apartir do zero.

exemplo:

```javascript
//metodo construtor de um array
const arr = [1,2,"a","b",{ x:14 , y:16 }];

//atualizando valores
```
## Propriedades de um array:

### length
A propriedade length retorna a quantidade de  elementos de um array.

> *Lembre-se que **prototype** também e uma propriedade e se destina em criar novas propriedades e/ou metodos.*

exemplo:
```javascript
const arr = [1,2,3]
arr.length // retorna: 3
```

## Métodos de um Array

Os metodos mais utilizados, senão todos, são:
- **concat** ( *arg1, ...,arg[n]* ) // Array
- **every** ( *função( elem , ind , obj ) [,this]* ) // Boolean
- filter()
- forEach()
- indexOf()
- lastIndex()
- lastIndexOf()
- join()
- map()
- pop()
- push()
- reduce()
- reduceRigth()
- reverse()
- shift()
- unshift()
- slice()
- splice()
- some()
- sort()
- toString()
- toLocaleString()

### concat()

> *`concat(arg1, ...,arg[n]) //retorna: []`*

#### Argumentos do método:
- args  = elemento a ser adicionado, pelo menos um argumento é obrigatório

Adiciona um novos elementos a um array.


exemplo:
```javascript
const arr = [1,2,3]
arr.concat(4,5,6) // retorna: [1,2,3,4,5,6]
```
### every()

> *`every( função(elem,ind, obj)[,this] ) // retorna: boolean`*

#### Argumentos do método:
- elem  = elemento do array
- ind   = indice do array
- obj   = objeto do array
- [this] = um objeto a ser utilizado como this, mas quando omitido é utilizado o objeto global


Percorre todos os elementos de um array e executa uma função callback. Retorna true quando encontra o elemento que satisfaz a condição.

exemplo:

```javascript
var arr = [ 1,2,3,"a"];

arr.every( (elem)=>(
    typeof elem == "number"
)); // returna: false

//Obs: retorna false porquê existe um string e nen todos são números. Nessa função ele percorre todos os elementos verificando se é number. utilizei de arrow function da nova sintaxe do EcmaScript para exemplivicar.
```