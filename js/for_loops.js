(function(){
    "use strict"


    // function showMultiplicationTable(x){
    //     for (var i = 1; i <= 10; i++){
    //
    //     }
    // }




    for (var i = 0; i < 10; i++){
        var randomNumber= Math.floor((Math.random() * (200 - 20 + 1)) + 20);
        if (randomNumber % 2 === 0){
            console.log(randomNumber + " is even");
        } else {
            console.log(randomNumber + " is odd");
        }
    }




    for (var b = 1; b < 10; b++){
        console.log(b.toString().repeat(b));
    }



    for (var a = 100; a >= 5; a-= 5){
        console.log(a);
    }



})();
