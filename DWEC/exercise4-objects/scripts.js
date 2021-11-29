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
            // Sorting array with higher height
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
            function addTour(item) {
                return {
                    "nom": item.nom,
                    "born": item.born,
                    "height": item.height,
                    "tours": item.tours = item.tours+1,
                    "wins": item.wins
                };
            }

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
            alert("helo");
            break;

        case 7:
            alert("helo");
            break;

        case 8:
            alert("helo");
            break;

        case 9:

            break;

    }
})
