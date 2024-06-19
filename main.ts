// Question 2 soltion:
let personName: string = "ERIC";
console.log(`Hello ${personName}, Would you like to learn some Python today?`);

// Question 3 solution:
// Printing name in lower,upper and titlecases;
let personNames = "saad Arif";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));

// Question 4 solution:
console.log(
  'Cristiano Ronaldo once said,"Your love makes me strong,your hate makes me unstoppable."'
);

// Question 5 solution:
let famous_person = "Cristiano Ronaldo";

let message =
  'once said, "Your love makes me strong,your hate makes me unstoppable"';

console.log(famous_person, message);

// Question 6 solution:
let whiteSpaceName = "\n\t Saad Arif \t\n";
console.log(whiteSpaceName);

let withoutWhiteSpace = whiteSpaceName.trim();
console.log(withoutWhiteSpace);

// Question 7&8 soulution:
console.log(6 + 2);

console.log(10 - 2);

console.log(2 * 4);

console.log(16 / 2);

// Question 9 solution:
let favNumber = 7;
let messages = "My favorite number is : ";
console.log(messages, favNumber);

// Question 10 solution:
// Add comments to any program
console.log(6 + 2); // Addition

console.log(10 - 2); // Subtraction

console.log(2 * 4); // Multiplication

console.log(16 / 2); // Division

// Question 11 solution:
let friendsName = ["Ashar", "Hamza", "Daniyal"];
console.log(friendsName);

// Question 12 solution:
let friendsName1 = ["Ashar", "Hamza", "Daniyal"];
friendsName1.forEach((name) => {
  console.log(`Hello, ${name} How are you?`);
});

// Question 13 solution:
let transportationModes = ["Bike", "Car", "Bus"];
transportationModes.forEach((mode) =>
  console.log(`I would like to own a ${mode} one day.`)
);

//  Question 14 solution:
let guestList = ["Farhan", "Munnaza", "Faiq","Bilal"];
guestList.forEach((guest) =>
  console.log(
    `Salam ${guest}, I would like to invite you to dinner, it would be a great pleasure if you came.`
  )
);

// Question 15 solution:
let guestList2 = ["Farhan", "Munnaza", "Faiq","Bilal"];
let cantMakeIt = guestList2[2];
console.log(cantMakeIt, "cannot come");

guestList2.splice(2, 2, "Taha");

guestList2.forEach((guests) =>
  console.log(
    `Salam ${guests}, I would like to invite you to dinner, it would be a great pleasure if you came.`
  )
);
//  Question 16 solution:
console.log("\nGood News!,I found a bigger dinner table.");
guestList2.unshift("Hammad");// Add to beggining
guestList2.push("Sajjad");// Add to end
// Adding middle value
let middleIndex: number = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex,0, "Burhan");

console.log("Updated list of guests");

guestList2.forEach(oneguest => console.log(`Salam ${oneguest}, I would like to invite you to dinner, it would be a great pleasure if you came.`));
