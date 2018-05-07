//CALLBACK

/*
let fs = require('fs'); // require é uma função especial do node para requisitar os módulos 
let myNumber = undefined; // não sabemos ainda qual valor esta armazenado no arquivo 

function addOne() {
  fs.readFile('./nummero.txt', function doneReading(err, fileContents) {
      console.log('Lendo arquivo...');
    myNumber = parseInt(fileContents);
    myNumber++;
    console.log(myNumber);
    console.log('Arquivo lido com sucesso...');
  })
}

addOne();

console.log(myNumber); // mostra na saida padrão `undefined`
 */



let fs = require('fs')
let myNumber = undefined

function addOne(callback) {
  fs.readFile('./numero.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
   }
  )};

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)


//Explicação:
//http://nodebr.com/callbacks-em-node/