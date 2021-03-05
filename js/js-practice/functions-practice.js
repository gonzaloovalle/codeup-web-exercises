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

function factors(n)
{
    let num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0)
        {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function(x, y)
    {
        return x - y;});
    return num_factors;
}
console.log(factors(15));
console.log(factors(16));
console.log(factors(17));

function Longest_Country_Name(country_name)
{
    return country_name.reduce(function(lname, country)
        {
            return lname.length > country.length ? lname : country;
        },
        "");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));