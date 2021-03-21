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

function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]])
        {
            str += curr_char;
            hash[chars[i]] = {index:i};
        }
        else
        {
            if(longest_string.length <= str.length)
            {
                longest_string = str;
            }
            var prev_dupeIndex = hash[curr_char].index;
            var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (var j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com"));

console.log(longest_substring_without_repeating_characters("example.com"));