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
var y = "" + x;

function revertirNumero(numero){
var numeroAlrrevez= numero[numero.length-1];

    for (i=numero.length-2;i>=0;i--){

        numeroAlrrevez= numeroAlrrevez+ numero[i];

    }
    return numeroAlrrevez;
}

console.log("numero ordenado: "+y);
console.log("Numero al revez: " + revertirNumero(y));

/*JavaScript String Functions - Exercise 2*/
/*Write a JavaScript function that returns a string in alphabetical order.
For ex,if x='webmaster' then the output should be 'abeemrstw'.
Punctuation and numbers aren't passed in the string.*/

var java ="javascript";

function ordenAlfabetico (palabra){
    var orden = [];
    
    for (i=0;i<palabra.length;i++){
        orden.push(palabra[i]);
    }
    orden.sort();

    var palabraOrdenada="";

    for (i=0;i<orden.length;i++){
        palabraOrdenada=palabraOrdenada + orden [i];
    }
    return palabraOrdenada;
}

console.log(ordenAlfabetico(java));

/*JavaScript String Functions - Exercise 3*/
/*Write a JavaScript function that converts the first letter of every word to uppercase.
For ex, if x="prince of persia" then the output should be "Prince Of Persia".*/


var prince = "prince of persia";

function aMayuscula(frase){

    letras=[];
    
    for(i=0;i<frase.length;i++){

        if (frase[i]===" "){

            frase[i+1].toUpperCase();

        }

    }
    return frase;

}

console.log(aMayuscula(prince));