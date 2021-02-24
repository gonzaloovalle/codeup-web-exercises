function greet() {
    return 'Haydo!';
}

let salutation = greet();

console.log(salutation);

function echo(input) {
    return input;
}

let result = echo('Greta');

let result2 = echo('CO2');

console.log(result);
console.log(result2);

function reverse_number(n) {
    n = n + ""
    return n.split("").reverse().join("");
}

console.log(reverse_number(2345));

function alphabetical(str) {
    return str.split("").sort().join("");
}

console.log(alphabetical("hello"));

function uppercase(str) {
    let arr = str.split(" ");
    let newarr = [];

    for(var x = 0; x < arr.length; x++) {
        newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1))
    }
    return newarr.join(" ");
}

console.log(uppercase("the quick brown fox"));