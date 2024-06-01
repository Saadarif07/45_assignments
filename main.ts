// Question 2 soltion:
let personName: string= "ERIC";
console.log(`Hello ${personName}, Would you like to learn some Python today?`);

// Question 3 solution:
// Printing name in lower,upper and titlecases;
let personNames = "saad Arif";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()))

// Question 4 solution:
console.log("Cristiano Ronaldo once said,\"Your love makes me strong,your hate makes me unstoppable.\"")

// Question 5 solution:
let famous_person = "Cristiano Ronaldo";

let message = "once said, \"Your love makes me strong,your hate makes me unstoppable\""

console.log(famous_person, message)

// Question 6 solution:
let whiteSpaceName = "\n\t Saad Arif \t\n";
console.log(whiteSpaceName);

let withoutWhiteSpace = whiteSpaceName.trim();
console.log(withoutWhiteSpace);

// Question 7&8 soulution:
console.log(6+2);

console.log(10-2);

console.log(2*4);

console.log(16/2);

// Question 9 solution:
let favNumber = 7;
let messages = "My favorite number is : ";
console.log(messages, favNumber);

// Question 10 solution:
// Add comments to any program
console.log(6+2); // Addition 

console.log(10-2); // Subtraction

console.log(2*4); // Multiplication

console.log(16/2); // Division

// Question 11 solution:
let friendsName = ["Ashar", "Hamza", "Daniyal"];
console.log(friendsName);

// Question 12 solution:
let friendsName1 = ["Ashar", "Hamza", "Daniyal"];
friendsName1.forEach(name => {
    console.log(`Hello, ${name} How are you?`);
});

// Question 13 solution:
let transportationModes = ["Bike", "Car", "Bus"];
transportationModes.forEach(mode => console.log(`I would like to own a ${mode} one day.`));

//  Question 14 solution:
let guestList = ["Farhan", "Munnaza", "Faiq"];
guestList.forEach(guest => console.log(`Salam ${guest}, I would like to invite you to dinner, it would be a great pleasure if you came.`));
