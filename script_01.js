"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */
// let arr;
// arr = new Array();   // Konstruktor
// arr = [];   // Literal
// arr = [2,7,11,4]; 
// arr = [true,false,true];
// arr = ["Ich","bin","Max","Mütze"];

// output(arr);
// output(arr.length) // Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Pos. im Array)
// output(arr[3]); // letzte Pos. / konkret
// output(arr[arr.length-1]); // letzte Pos. / allgemein

// () --> Parameter, Tests
// {} --> Codeblöcke
// [] --> Arrays, Index

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str = word1 + GAP + 
              word2 + GAP + 
              word3 + GAP + 
              word4 + GAP +
              word5 + GAP +
              word6 +
              PUNCT;

    return str; 
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/*** 01a. Funktionalität mit Array 1  */
// Kritik | Überlegung




// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = arr[0] + GAP + 
//               arr[1] + GAP + 
//               arr[2] + GAP + 
//               arr[3] + GAP +
//               arr[4] + GAP +
//               arr[5] +
//               PUNCT;

//     return str; 
// }


/*** 01b. Funktionalität mit Array 2  */
// Transponierung: untereinander ---> nebeneinander
// Helge Schneider: Anananderreihung...

// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
// output(getSentenceArr2(["Ich","bin","die","Maxine"]));
// output(getSentenceArr2(["Ich","bin"]));
// function getSentenceArr2(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";
//     let str = arr[0] + GAP + 
//               arr[1] + GAP + 
//               arr[2] + GAP + 
//               arr[3] + GAP +
//               arr[4] + GAP +
//               arr[5] +
//               PUNCT;

    // for (let i = 0; i < arr.length; i++) {
    //     str += arr[i] + GAP;
        

    // output(arr[i]);
    // output(str);
//     }
//     str = str + PUNCT;

//     return str; 
// }


/* 02a. Theorie: Schleifen (for-schleife) */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//    output("index i: " +i); 
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//     output("index i: " + i);
// }

// Inkrement (var. Schrittweite)

//eigenes Beispiel mit Multiplikation
// for (let i = 2; i <= 10000000; i**=2) {
//     output("index i: " + i);
// }

// for (let i = 0; i <= 100; i++) {
//     output("index i: " + i);
// }



// * 02b. For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output("index i:" + i + " " + arr[i]); // i als Index des Arrays
// }


/*********   Überlegungen - Transponierung **********/



/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
let a = 0; // Anfangswert

// for (let i = 0; i < 10; i++) {
//     output (i);
//     output("in der loop vor +:" + a);
//     a = a + 1;
//     output("in der loop nach +:" + a);
// }

 
// output("nach der loop: " + a);

/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

 

// let str = "";
// let gap = " ";
// let addStr = "Test";
// for (let i = 0; i <= 5; i++) {
//     output("in der loop: " + str);
//     // a = a + 1;  // Numerik
//     str = str + addStr + gap // Text
// }
// output("nach der loop: " + str);



// Lösung "Kein Leerzeichen zwischen letztem Wort"
const GAP = " ";
const PUNCT = ".";


output(getSentenceArr4(["Ich","bin","die","coole","Maxine","Mützerich"]));
// output(getSentenceArr4(["Ich","bin","die","Maxine"]));
// output(getSentenceArr4(["Ich","bin"]));
function getSentenceArr4(arr) {
    let str = "";
//     let str = arr[0] + GAP + 
//               arr[1] + GAP + 
//               arr[2] + GAP + 
//               arr[3] + GAP +
//               arr[4] + GAP +
//               arr[5] +
//               PUNCT;

    for (let i = 0; i < arr.length; i++) {

        if (i==arr.length -1)
        {
            str = str + arr[i] + PUNCT;
        }
        else
        {
            str = str + arr[i] + GAP;
        }
        // str += arr[i] + GAP;
        

    // output(arr[i]);
    // output(str);
    }
    // str = str + PUNCT;

    return str; 
}

function output(outputStr) {
    console.log(outputStr)
}

// Lösung Variante vom Dozenten:

output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
output(getSentenceArr2(["Ich","bin","die","Maxine"]));
output(getSentenceArr2(["Ich","bin"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + GAP;

       // 2. Variante IF-ELSE
        if (i != arr.length -1)
         {
             str += arr[i] + GAP;
         } else {
             str += arr[i] + PUNCT;
         }
    }

   // 1. Variante trim
    str = str.trimEnd();
    str = str + PUNCT;

   return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}
