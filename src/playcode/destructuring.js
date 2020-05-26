/* ========= Object Destructuring ========= */

// const person = {
//   name: "Martin",
//   age: 35,
//   location: {
//     city: "Aarhus",
//     temp: 18,
//   },
// };
// //const city = "London";
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`Its ${temperature} celcius in ${city}`);

// const book = {
//   book: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: { name: "Penguin" },
// };

// const { name: publisherName = "self-published" } = book.publisher;
// console.log(`${publisherName}`);

/* ========= Array Destructuring ========= */
// const address = ["1299 Juniper Street", "Philadelphia", "Pensylvania", "1974"];

// const [street, city = "Chicago", state, zip] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ["coffee", "2.00", "2.50", "2.75"];
const [coff, , medium] = item;

console.log(`Medium ${coff} costs ${medium}`);
