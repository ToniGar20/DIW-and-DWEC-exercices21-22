//1
function separator() {
    let newArray = document.getElementById("main-content").value.split(",");

    let separation = (item, index, array) => {
        array[index] = item + "$"
    }
        newArray.forEach(separation);
        document.getElementById("result-tag").innerHTML = newArray;
}

//2
function concatenation() {
    let newArray = document.getElementById("main-content").value.split(",");
    let chainWithTheArray = "";
    let concatenate = (item) => {
        chainWithTheArray += item;
    }
    newArray.forEach(concatenate);
    document.getElementById("result-tag").innerHTML = chainWithTheArray;

}

//3
function secondItemDeleted() {
    let newArray = document.getElementById("main-content").value.split(",");
    newArray.splice(1,1);
    document.getElementById("result-tag").innerHTML = newArray;
}

//4
function secondItemDeletedAndAddingNews() {
    let newArray = document.getElementById("main-content").value.split(",");
    newArray.splice(1,1, "Doe", 3.1415);
    document.getElementById("result-tag").innerHTML = newArray;
}

//5
function sortingArrayAlphabetically() {
    let newArray = document.getElementById("main-content").value.split(",").sort();
    document.getElementById("result-tag").innerHTML = newArray;
}

//6
function sortingArrayMinorToMajor(){
    let newArray = document.getElementById("main-content").value.split(",");
    let minorToMajorOrder = (a,b) => {
        return a-b;
    }
    newArray.sort(minorToMajorOrder)
    document.getElementById("result-tag").innerHTML = newArray;
}

//7
function sortingArrayMajorToMinor(){
    let newArray = document.getElementById("main-content").value.split(",");
    let minorToMajorOrder = (a, b) => {
        return b-a;
    }
    newArray.sort(minorToMajorOrder)
    document.getElementById("result-tag").innerHTML = newArray;
}

//8
function orderByMajorLength() {
    let newArray = document.getElementById("main-content").value.split(",");
    let majorLength = (a, b) => {
        return b.length - a.length;
        }
    newArray.sort(majorLength)
    document.getElementById("result-tag").innerHTML = newArray;
}

//9
function arrayOfLengths(){
    let newArray = document.getElementById("main-content").value.split(",");
    let newArrayLengths = newArray.map((item) => { return item.length; });
    document.getElementById("result-tag").innerHTML = newArrayLengths;
}

// 10 NOT WORKING! //
function separatedByMidDash() {
    let newArray = document.getElementById("main-content").value.split(",");
}

//11
function acronym() {
    let newArray = document.getElementById("main-content").value.split(",");
    let newArrayAcronym = newArray.map((item) => {
        return item.split("")[0].toUpperCase()
    });
    document.getElementById("result-tag").innerHTML = newArrayAcronym.toString().replaceAll(",", "");
}

//12
function deletingMinorOf5Length() {
    let newArray = document.getElementById("main-content").value.split(",");
    document.getElementById("result-tag").innerHTML = newArray.filter((item) => {
        return item.length >= 5;
    });
}

//13
function sumItemsForEach() {
    let newArray = document.getElementById("main-content").value.split(",");
    let total = 0;
    newArray.forEach( value => { total += parseInt(value); });
    document.getElementById("result-tag").innerHTML = total;
}

//14
function laInArray() {
    let newArray = document.getElementById("main-content").value.split(",");

}

//15
function sumItemsReduce() {
    let newArray = document.getElementById("main-content").value.split(",");
    document.getElementById("result-tag").innerHTML = newArray.reduce( (total, value ) => { return parseInt(total) + parseInt(value)});
}

//16
function maxNum() {
    let newArray = document.getElementById("main-content").value.split(",");
    let max = Number.MIN_SAFE_INTEGER;
    document.getElementById("result-tag").innerHTML = newArray.forEach( value => {
        if (parseInt(value) > max) {
            max = parseInt(value);
        }
    });
    document.getElementById("result-tag").innerHTML = max;
}

//17
function arrayRestructuring() {
    let newArray = document.getElementById("main-content").value.split(",");
    if (newArray.length < 3) {
        document.getElementById("result-tag").innerHTML = "Introducir al menos 3 valores";
    } else if (newArray.length %2 !== 0){
        document.getElementById("result-tag").innerHTML = "El total de valores a introducir ha de ser par (6,8,10,...)";
    } else {
        newArray.splice(newArray.length/2, 0, newArray[0], newArray[newArray.length-1]);
        newArray.splice(0,1);
        newArray.splice(newArray.length-1,1);
        document.getElementById("result-tag").innerHTML = newArray;
    }
}

//18
function capCuaArray(){
    let newArray = document.getElementById("main-content").value.split(",");
    if (newArray.length < 3) {
        document.getElementById("result-tag").innerHTML = "Debes enviar al menos 3 números para realizar la operación";
    } else {
        newArray.splice(newArray.length, 0, newArray[2], newArray[1], newArray[0]).splice(0, 3);
        document.getElementById("result-tag").innerHTML = newArray;
    }
}