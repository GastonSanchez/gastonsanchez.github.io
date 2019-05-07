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
var nombres = ["Fede","Seba","Eduart","Maxi","Fran"];

console.log (nombres[0]);
console.log (nombres[nombres.length-1]);
for (i=0; i<nombres.length;i++){
    console.log (nombres [i]);
}