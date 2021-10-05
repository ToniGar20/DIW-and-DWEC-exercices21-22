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
    document.getElementById("result-tag").innerHTML = counter + " /a-letters/ found at the string!";
}
//4
//5
//6
//7
//8
//9
//10
//11
//12
//13


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