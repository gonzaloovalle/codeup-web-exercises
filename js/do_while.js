(function(){
    "use strict"

    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        console.log("There is a total of " + allCones + " cones.");
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if(conesSold < allCones){
            console.log(conesSold + " cones sold.");
            allCones -= conesSold;
        }else if(conesSold > allCones){
            console.log("I cannot sell you " + conesSold + ", I only have " + allCones + " left.");
            allCones -= conesSold;
        }else if(conesSold === allCones){
            console.log("Yay! I sold the last " + conesSold + "! I can go home now!");
            break;
        }

    }while(allCones > 0);






})();