"use strict"

console.log("Hello from external JavaScript.");

alert("Welcome to my website!");
let userColor = prompt('What is your favorite color?');
alert("Great " + userColor + " is my favorite color too!");



//Question 3 Part 1
var bb = Number(prompt('How many days are you renting Brother Bear for?'));
var lm = Number(prompt('How many days are you renting Little Mermaid for?'));
var h = Number(prompt('How many days are you renting Hercules for?'));
var ppd = prompt('How much does it cost to rent a video per day?');

var cost

cost= (lm + bb + h) * ppd;

alert("The total cost rent the movies is $" + cost);



//Question 3 Part 2
var Gpay = Number(prompt('How much does Google pay per hour?'));
var Apay = Number(prompt('How much does Amazon pay per hour?'));
var Fpay = Number(prompt('How much does Facebook pay per hour?'));
var Ghr = Number(prompt('How many hours did you work for Google?'));
var Fhr = Number(prompt('How many hours did you work Facebook?'));
var Ahr = Number(prompt('How many hours did you work Amazon?'));

var pay;
pay = (Gpay * Ghr) + (Fpay * Fhr) + (Apay * Ahr);

alert("Your total pay is $" + pay);



//Question 3 Part 3
var classFull = confirm("Is the class full?");
var noConflicts = confirm("Does the class conflict with your current schedule?");

function classSchedule(){
    if (classFull && noConflicts === true){
        return alert("You can enroll in class.");
    }else{
        return alert("You cannot enroll in class.");
    }
}

classSchedule();



//Question 3 Part 4
var numOfItems = confirm("Do you have more than 2 items?");
var premCustomer = confirm("Are you a premium customer?");
var offerValid = confirm("Is the offer valid?");

function Offer(){
    if ((numOfItems || premCustomer) && offerValid === true){
        return alert("You are eligible for the discount.");
    }else{
        return alert("You are not eligible for the discount.");
    }
}

Offer();