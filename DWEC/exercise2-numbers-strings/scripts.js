/**
 * Main comment ->
 * Each function starts "a" variable to store information form html input
 * Each functions ends with the .innerHTMl method
 * In both cases, hard code re-use
 */

//1
function emptyString(){
    let a = document.getElementById("main-content").value;
    if(a.length == 0){
        document.getElementById("result-tag").innerHTML = "EMPTY string";
    } else {
        document.getElementById("result-tag").innerHTML = "GOOD string";
    }
}

//2
function reversedString(){
    let a = document.getElementById("main-content").value;
    document.getElementById("result-tag").innerHTML = a.split("").reverse().join(""); // Reading the array from right to left
}

//3
function howManyA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let counter = 0; // Starting variable to use it on the function scope
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/)){ //Regex
            counter++;
        }
    }
    document.getElementById("result-tag").innerHTML = counter + " 'a' found at the string!";
}

//4
function stringBeforeA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let newString = []; // Starting variable to use it on the function scope
    let newStringResult = ''; // Starting variable to use it on the function scope
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/)){
            newStringResult = newString.join(""); // Building the string if and "a" (or variation) is found
            break;
        } else {
            newString.push(aPieces[i]); //If not "a" found, storing letters at the array
        }
    }
    document.getElementById("result-tag").innerHTML = newStringResult;
}

//5
function firstAndLastAPositions(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let positions = [];
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/)){
            positions.push(i+1); // Storing "a" positions into an array
        }
    }
    if (positions.length < 1) { //If no "a" on the string
        document.getElementById("result-tag").innerHTML = "The are no 'a' at the string!"
    } else if (positions.length == 1){ // If just just "a" on the string
        document.getElementById("result-tag").innerHTML = "The position of the 'a' is " + positions[0];
    } else if (positions.length > 1) { //If more than 1 "a on the string"
    }
    document.getElementById("result-tag").innerHTML = "The position of the first 'a' is " + positions[0] + " and the position of the last 'a' is " + positions[(positions.length)-1];
}

//6
function deletingLA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/) && aPieces[i-1].match(/[lL]/)){
            delete aPieces[i]; // deleting the "a"
            delete aPieces[i-1]; // deleting the "l"
        }
    }
    let aModified = aPieces.join("");
    if (aModified != a) { // Different output if string has changed
        document.getElementById("result-tag").innerHTML = aModified;
    } else {
        document.getElementById("result-tag").innerHTML = "Input and result are the same..."
    }
}

//7
function changingLA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/) && aPieces[i-1].match(/[lL]/)){
            aPieces[i] = "*";
            delete aPieces[i-1];
        }
    }
    let aModified = aPieces.join("");
    if (aModified != a) {
        document.getElementById("result-tag").innerHTML = aModified;
    } else {
        document.getElementById("result-tag").innerHTML = "Input and result are the same..."
    }
}

//8
function firstAndLastLetter(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    document.getElementById("result-tag").innerHTML = 'The first letter is "' + aPieces[0] + '" and the last letter is " ' + aPieces[aPieces.length - 1] + '".';
}

//9
function noSpaces(){
    let a = document.getElementById("main-content").value;
    let aModified =  a.replace(" ", ""); //replace space for nothing :D
    if (aModified != a) {
        document.getElementById("result-tag").innerHTML = aModified;
    } else {
        document.getElementById("result-tag").innerHTML = "Input and result are the same..."
    }
}

//10
function spaceForMiddleDash(){
    let a = document.getElementById("main-content").value;
    let aModified =  a.replace(" ", "-"); //replace space for mid dash
    if (aModified != a) {
        document.getElementById("result-tag").innerHTML = aModified;
    } else {
        document.getElementById("result-tag").innerHTML = "Input and result are the same..."
    }
}

//11
function acronym(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let acronymWord = [];
    acronymWord.push(aPieces[0]); // Storing first letter
    let finalAcronym = ''; // Variable to print the final result
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i] == " "){
            acronymWord.push(aPieces[i+1]); // If space is found, the next letter is grabbed (even it is a space too...)
        }
    }
    finalAcronym = acronymWord.join("").toUpperCase(); // Building it as acronym
    document.getElementById("result-tag").innerHTML = finalAcronym;
}

//12
function emailValidation(){
    let a = document.getElementById("main-content").value;
    if(a.match(/@[A-Za-z]{3,}.*\.(org|net|com)/)){ // Regex
        document.getElementById("result-tag").innerHTML = "The email is correct";
    } else {
        document.getElementById("result-tag").innerHTML = "Not valid email. Enter a correct domain with @ and .org, .net or .com ending";
    }
}


//13
function numberSign() {
    let a = parseFloat(document.getElementById("main-content").value);
    if (a == 0) {
        document.getElementById("result-tag").innerHTML = "Number is zero!";
    } else if (a >= 1) {
        document.getElementById("result-tag").innerHTML = "Number is POSITIVE!";
    } else if (a <= -1) {
        document.getElementById("result-tag").innerHTML = "Number is NEGATIVE!";
    } else {
        document.getElementById("result-tag").innerHTML = "This is not a number!";
    }
}

//14
function isANumber(){
    let a = document.getElementById("main-content").value;
    document.getElementById("result-tag").innerHTML = typeof(a);
}

//15
function roundADouble(){
    let a = parseInt(document.getElementById("main-content").value);
    document.getElementById("result-tag").innerHTML = Math.round(a);
}

//16
function doubleDecimals(){
    let a = document.getElementById("main-content").value;
    a = parseFloat(a.replace(",", ".")); // Work to identify the two kind of doubles
    document.getElementById("result-tag").innerHTML = "." + a.toString().split(".")[1]; // Casting the number to string to be able to split it again an just display the decimals
}

//17
function div19And3Decimals() {
    let a = parseInt(document.getElementById("main-content").value);
    document.getElementById("result-tag").innerHTML = Math.round((a / 19) * 1000) / 1000; // Smoking some maths, don't know what I just did here
}