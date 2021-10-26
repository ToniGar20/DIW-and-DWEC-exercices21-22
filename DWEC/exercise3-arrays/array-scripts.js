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
function sortingArray() {
    let newArray = document.getElementById("main-content").value.split(",").sort();
    document.getElementById("result-tag").innerHTML = newArray;
}


//10 NOT WORKING!
function separatedByMidDash() {
    let newArray = document.getElementById("main-content").value.split(",");
    let chainWithTheArray = "";
    let concatenate = (item, index, array) => {
        chainWithTheArray += item;
        array[index].trim(); // I want to clean the spaces but this is not working
        if(index !== array.length-1) {
            chainWithTheArray += "-";
        }
    }
    newArray.forEach(concatenate);
    document.getElementById("result-tag").innerHTML = chainWithTheArray;
}
