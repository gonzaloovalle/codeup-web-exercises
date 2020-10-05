(function(){
    "use strict"

    do{
        var userNum = parseInt(prompt("Pick an odd number between 1 and 50"))
        if(userNum < 1 || userNum > 50){
            alert("Number is invalid. Please try again.");
        } else if(userNum % 2 === 0){
            alert(userNum + " is not odd, please try again.");
        } else if(isNaN(userNum)){
            alert(userNum + " is not a number, please try again.")
        } else {
            alert("Number is valid. Thank you!")
            break;
        }
    }while(true)

    for (var i = 1; i <= 50; i++){
        if(i % 2 === 0){
            continue;
        }

        if(i === userNum){
            console.log("Yikes! Skipping number " + i);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }


})();