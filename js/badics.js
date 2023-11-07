// Ausgabe in der Browser-Konsole
console.log(document.querySelector('h1'));

// Kommentare Schreiben (einzeilig)

/* 
Mehrzeilige
Kommentare
*/

// Variablen
var a = 10; // Veraltete Schreibweise
let b = 20; // Veränderbarer Wert, Let = Variable wird Deklariert 
b = 21; // Neuer Wert

const c = 30; // Konstante, kann nicht geändert werden

// Datentypen
const vorname = "Lukas"; //String mit ""
const nachname = 'Meier'; //String mit ''
const alter = 12;

// Template String
console.log (`Ich bin ${vorname} ${nachname} und ${alter} Jahre alt.`); //String mit ``

console.log(`In ${a} Jahren bin ich ${b} Jahre alt.`);

// Boulean
const happy = true;

// Truthy & Falsy
"1" = 1 // = wahr, weil selber Wert
"1" === 1 // = falsch, weil unterschiedlicher Datentyp

// Number
const luckyNumber = 13;
const temperature = -15;
