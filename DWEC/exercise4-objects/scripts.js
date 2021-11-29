import {equip_ciclista} from './objects.js';

document.addEventListener("click", (e) => {
    let buttonId = parseInt(e.target.id);
    let infoCiclistes = equip_ciclista["ciclistes"];

    let result;
    switch (buttonId) {

        case 1:
            result = "";
            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 2:
            result = "";
            // Sorting array alphabetically. "localeCompare" method just valid for strings
            infoCiclistes.sort((a,b) => a.nom.localeCompare(b.nom));
            console.log(infoCiclistes);

            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 3:
            result = "";
            // Sorting array with higher height
            infoCiclistes.sort((a,b) => { return b.height-a.height; });
            console.log(infoCiclistes);

            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 4:
            result = "";

            // Sorting array with higher number of tours won
            infoCiclistes.sort((a,b) => { return b.tours-a.tours; });
            console.log(infoCiclistes);

            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 5:
            //Function that returns the object with just 1 different value.
            function addTour(item) {
                return {
                    "nom": item.nom,
                    "born": item.born,
                    "height": item.height,
                    "tours": item.tours = item.tours + 1,
                    "wins": item.wins
                };
            }

            //Map with the previous function
            let allWinners = infoCiclistes.map(addTour);
            console.log(allWinners);

            result = "";
            for (let i = 0; i < parseInt(allWinners.length); i++) {
                result += allWinners[i]["nom"] + " - tours: " +  allWinners[i]["tours"];
                if (i === parseInt(allWinners.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;

            break;

        case 6:
            // Helper function to pass an object and get just items if their age is > 30 given a Date String value
        function oldCyclist(item){
                function getAge(dateString) {
                    let today = new Date();
                    let birthDate = new Date(dateString);
                    let age = today.getFullYear() - birthDate.getFullYear();
                    let m = today.getMonth() - birthDate.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    return age;
                }
                return getAge(item.born) > 30;
            }

            console.log(infoCiclistes);
            let noOldCyclist = infoCiclistes.filter(oldCyclist);
            console.log(noOldCyclist);

            result = "";
            for (let i = 0; i < parseInt(noOldCyclist.length); i++) {
                result += noOldCyclist[i]["nom"];
                if (i === parseInt(noOldCyclist.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 7:
            // Helper function to pass an object and get his age give a Date String
        function majorthan30(item){
            function getAge(dateString) {
                let today = new Date();
                let birthDate = new Date(dateString);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
            return getAge(item.born) > 30;
        }

            console.log(infoCiclistes);
            let firstMajorThan30 = infoCiclistes.find(majorthan30);
            console.log(firstMajorThan30);

            result = firstMajorThan30["nom"];
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 8:
            //New item
        let newCyclist = {
            "nom": "Josh Pantano",
            "born":  "30/11/1995",
            "height": 1.88,
            "tours": 2,
            "wins": 9
        };

        //Insertion with splice
        infoCiclistes.splice(1,0,newCyclist);
        console.log(infoCiclistes);

        result = "";
            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

        case 9:
            // Helper function to pass an object and get his age give a Date String
        function cyclistsAge(item){
            function getAge(dateString) {
                let today = new Date();
                let birthDate = new Date(dateString);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
            return getAge(item.born);
        }
            // Sorting array calling the method above to sort by age
            infoCiclistes.sort((a,b) => { return cyclistsAge(b)-cyclistsAge(a) });
            console.log(infoCiclistes);

            result = "";
            for (let i = 0; i < parseInt(infoCiclistes.length); i++) {
                result += infoCiclistes[i]["nom"];
                if (i === parseInt(infoCiclistes.length)-1) {
                    result += ".";
                } else {
                    result += ", "
                }
            }
            document.getElementById("result-tag").innerHTML = result;
            break;

    }
})
