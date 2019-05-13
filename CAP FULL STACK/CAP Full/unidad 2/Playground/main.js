console.log ("Starting javascript...");
var minombre="gaston";
console.log (minombre);
var age=22;
console.log(age);
var ignasiAge=32;
var ageDiff= age-ignasiAge;
console.log(ageDiff);

if (age>21){
    console.log ("You are older than 21")
} else {
    console.log("You are not older than 21")
}

if (age>ignasiAge){
    console.log ("Ignasi is younger than you")
} else if (age<ignasiAge){
    console.log("Ignasi is older than you")
} else{
    console.log ("You have the same age as Ignasi")
}

/*JavaScript Array Functions - Exercise 1*/
var nombres = ["Fede","Seba","Eduart","Maxi","Fran","Gian", "Tomas","Clara", "Juan Manuel"];

nombres.sort();
console.log (nombres[0]);
console.log (nombres[nombres.length-1]);
for (i=0; i<nombres.length;i++){
    console.log (nombres [i]);
}

/*JavaScript Array Functions - Exercise 2 con while*/
var edades = [20, 35, 24, 25, 50, 32, 35, 41, 18, 19];
var i=0;
edades.sort();
while (i<edades.length){
    console.log(edades[i])
    i++;
}

/*JavaScript Array Functions - Exercise 2 con For*/
var edades = [20, 35, 24, 25, 50, 32, 35, 41, 18, 19];
edades.sort();

for (i=0; i<edades.length;i++){
    console.log(edades[i]);
}

/*JavaScript Array Functions - Exercise 3*/

var edades = [20, 35, 24, 25, 50, 32, 35, 41, 18, 19];

function menor (numeros){
    var min=numeros[0];
    for (i=1;i<numeros.length;i++){
        if(numeros[i]<min){
            min=numeros[i];
        }
    }
    return min;

}
console.log ("El menor numero es: " + menor(edades));

/*JavaScript Array Functions - Exercise 4*/
var edades = [20, 35, 24, 25, 50, 32, 35, 41, 18, 19];

function mayor (numeros){
    var max=numeros[0];
    for (i=1;i<numeros.length;i++){
        if(numeros[i]>max){
            max=numeros[i];
        }
    }
    return max;

}
console.log ("El mayor numero es: " + mayor(edades));

/*JavaScript Array Functions - Exercise 5*/
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 6;

function posicion (numeros, indice){
    console.log("El numero en la posicion "+indice+" es igual a: "+numeros[indice]);
}

posicion(array,index);

/*JavaScript Array Functions - Exercise 6*/
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repetidos(numeros){
    var repetidos= [];

    for (i=0;i<numeros.length-1;i++){
        for(j=i+1;j<numeros.length-1;j++){

            if(numeros[i]===numeros[j]){
                repetidos.push(numeros[j]);
            }
        }
    }
    return repetidos;
}

console.log("Los numeros repetidos en el arreglo son: "+repetidos(array));

/*JavaScript Array Functions - Exercise 7*/
myColor = ["Red", "Green", "White", "Black"];

function colores (misColores){
    var color=misColores[0];
    for (i=1;i<misColores.length;i++){
        color=color+","+misColores[i];
    }
    return color;
}

console.log(colores(myColor));

/*JavaScript String Functions - Exercise 1*/ 
/*Write a JavaScript function that reverses a number.
For example:if x=32443 then the output should be 34423.*/

var x = 367259203248;
var y = "" + x; /*convierte el numero en un string */

function revertirNumero(numero){
var numeroAlreves = numero[numero.length-1];/*le asigna a NumeroAlreves el ultimo numero del parametro numero en primer lugar */

    for (i=numero.length-2;i>=0;i--){

        numeroAlreves= numeroAlreves+ numero[i];

    }/*recorre el parametro "numero" en orden descendente y agrega cada numero a "numeroAlreves" */
    return numeroAlreves;
}

console.log("numero ordenado: "+y);
console.log("Numero al reves: " + revertirNumero(y));

/*JavaScript String Functions - Exercise 2*/
/*Write a JavaScript function that returns a string in alphabetical order.
For ex,if x='webmaster' then the output should be 'abeemrstw'.
Punctuation and numbers aren't passed in the string.*/

var java ="javascript";

function ordenAlfabetico (palabra){
    var orden = [];
    
    for (i=0;i<palabra.length;i++){
        orden.push(palabra[i]); /*mete cada letra de la palabra en un array*/
    }
    orden.sort(); /*ordena las letras dentro del array */

    var palabraOrdenada="";

    for (i=0;i<orden.length;i++){
        palabraOrdenada=palabraOrdenada + orden [i];
        
    }/*mete en palabraOrdenada cada letra del array ya odenado alfabeticamente*/

    return palabraOrdenada;
}

console.log(ordenAlfabetico(java));

/*JavaScript String Functions - Exercise 3*/
/*Write a JavaScript function that converts the first letter of every word to uppercase.
For ex, if x="prince of persia" then the output should be "Prince Of Persia".*/


var x = "prince of persia";
function mayusPrimeraLetra(x) {
    return x.toLowerCase() //convertimos todo el texto en minuscula
        .trim() //quitamos los espacios que puedan existir antes y despues del string
        .split(' ') //separamos el string en un array de substrings.
        .map(v => v[0].toUpperCase() + v.substr(1)) //creamos un nuevo array (v). Luego se le asigna mayuscula a la primera letra de cada elemento y se separan las demas letras dese la posición 1 con un .substr (sino, no aparecerían en el texto impreso.
        .join(' '); //unimos cada elemento del array v con un espacio.
}
console.log(mayusPrimeraLetra(x));


/*JavaScript String Functions - Exercise 4*/
/*Write a JavaScript function that finds the longest word in a phrase.
For example, if x = "Web Development Tutorial", then the output should be "Development".*/

var x="Web Development Tutorial";

function palabraLarga(x){

    var palabraMasLarga = "";
    var palabra = x.split(' ');

    palabra.forEach(function(palabra) {
    /*Recorre el array y compara la palabra segun el indice i con la actua "palabra mas larga"*/

        if(palabra.length>palabraMasLarga.length){
            palabraMasLarga=palabra; 
        };
        
    });
    return palabraMasLarga;
}

console.log(palabraLarga(x));
