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
    document.getElementById("result-tag").innerHTML = a.split("").reverse().join("");
}

//3
function howManyA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let counter = 0;
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/)){
            counter++;
        }
    }
    document.getElementById("result-tag").innerHTML = counter + " 'a' found at the string!";
}

//4
function stringBeforeA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    let newString = [];
    let newStringResult = '';
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/)){
            newStringResult = newString.join("");
            break;
        } else {
            newString.push(aPieces[i]);
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
            positions.push(i+1);
        }
    }
    if (positions.length < 1) {
        document.getElementById("result-tag").innerHTML = "The are no 'a' at the string!"
    } else if (positions.length == 1){
        document.getElementById("result-tag").innerHTML = "The position of the 'a' is " + positions[0];
    } else if (positions.length > 1) {
        document.getElementById("result-tag").innerHTML = "The position of the first 'a' is " + positions[0] + " and the position of the last 'a' is " + positions[(positions.length)-1];
    }
}

//6
function deletingLA(){
    let a = document.getElementById("main-content").value;
    let aPieces = a.split("");
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i].match(/[aàáAÀÁ]/) && aPieces[i-1].match(/[lL]/)){
            delete aPieces[i];
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
    let aModified =  a.replace(" ", "");
    if (aModified != a) {
        document.getElementById("result-tag").innerHTML = aModified;
    } else {
        document.getElementById("result-tag").innerHTML = "Input and result are the same..."
    }
}

//10
function spaceForMiddleDash(){
    let a = document.getElementById("main-content").value;
    let aModified =  a.replace(" ", "-");
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
    acronymWord.push(aPieces[0]);
    let finalAcronym = '';
    for (let i = 0; i < aPieces.length; i++) {
        if(aPieces[i] == " "){
            acronymWord.push(aPieces[i+1]);
        }
    }
    finalAcronym = acronymWord.join("").toUpperCase();
    document.getElementById("result-tag").innerHTML = finalAcronym;
}

//12
function emailValidation(){

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

//16 NOT WORKING
function doubleDecimals(){
    let a = document.getElementById("main-content").value;
    a.replace(",", ".");
    document.getElementById("result-tag").innerHTML = "." + a.split(".")[1];
}

//17
function div19And3Decimals() {
    let a = parseInt(document.getElementById("main-content").value);
    document.getElementById("result-tag").innerHTML = Math.round((a / 19) * 1000) / 1000;
}