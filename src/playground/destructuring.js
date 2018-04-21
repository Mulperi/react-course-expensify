const person = {
    age: 33,
    location: {
        city: "Jyväskylä",
        temp: 20
    }
};

// Object destructuring
// Default values
const { name = "Anonymous", age } = person;
// console.log(`${name} is ${age}.`);

// Renaming variable
const { city, temp: temperature } = person.location;
if ( city && temperature ) {
    // console.log(`it's ${temperature} celsius in ${city}.`);
}




// Array destructuring
const address = ['Sinkilätie 20', 'Jyväskylä', '40530'];

// Skipping index 1
const [katu, , zip, extra = "extra default tietoa"] = address;

console.log(`You are in ${katu}`);