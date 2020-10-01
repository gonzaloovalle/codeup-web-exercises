(function(){
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */


    // function analyzeColor(colorName){
    //     if (colorName === "blue"){
    //         return "blue is the color of the sky";
    //     } else if (colorName === "red"){
    //         return "Strawberries are red";
    //     } else if (colorName === "orange"){
    //         return "Orange is the color of an orange";
    //     } else if (colorName === "yellow"){
    //         return "Yellow is the color of the sun";
    //     } else if (colorName === "green"){
    //         return "Green is the color of grass";
    //     } else if (colorName === "indigo"){
    //         return "The night sky is indigo";
    //     } else if (colorName === "violet"){
    //         return "Violets are violet";
    //     } else {
    //         return "I don't know anything about that color";
    //     }
    // }

    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("green"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    // console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function analyzeColor(colorName){
        switch (colorName) {
            case "blue":
                return "blue is the color of the sky";
                break;
            case "red":
                return "Strawberries are red";
                break;
            case "orange":
                return "Orange is the color of an orange";
                break;
            case "yellow":
                return "Yellow is the color of the sun";
                break;
            case "green":
                return "Green is the color of grass";
                break;
            case "indigo":
                return "The night sky is indigo";
                break;
            case "violet":
                return "Violets are violet";
                break;
            default:
                return "I don't know anything about that color";
                break;
        }
    }
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var userPrompt = analyzeColor(prompt("Type in a color"))

    alert(userPrompt);


    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber,totalPrice){
        if (luckyNumber === 0){
            return totalPrice - 0;
        } else if (luckyNumber === 1){
            return totalPrice - (.10 * totalPrice);
        } else if (luckyNumber === 2){
            return totalPrice - (.25 * totalPrice);
        } else if (luckyNumber === 3){
            return totalPrice - (.35 * totalPrice);
        } else if (luckyNumber === 4){
            return totalPrice - (.50 * totalPrice);
        } else if (luckyNumber === 5){
            return totalPrice - totalPrice;
        } else {
            return "Sorry, that is not a lucky number";
        }
    }


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var totalPrice = prompt("What is your total bill?");

    alert("Your lucky number is : " + luckyNumber);
    alert("Your price before discount is : " + totalPrice);
    alert("Your price after discount is : " + calculateTotal(luckyNumber,totalPrice));


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


    confirm ("Would you like to enter a number?");
    var userNumber = parseFloat(prompt("Enter a number"));
    if (confirm === true){
        return userNumber;
    }

    if (userNumber % 2 === 0){
        alert("This number is even");
    } else {
        alert("This number is odd");
    }

    alert("Your number plus 100 is : " + (userNumber + 100));

    if (userNumber >= 0){
        alert("This number is positive")
    } else {
        alert("This number is odd");
    }

    if (typeof userNumber != 'number'){
        alert("That is not a number!");
    }

})();