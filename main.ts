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
let guestList = ["Farhan", "Munnaza", "Faiq", "Bilal"];
guestList.forEach((guest) =>
  console.log(
    `Salam ${guest}, I would like to invite you to dinner, it would be a great pleasure if you came.`
  )
);

// Question 15 solution:
let guestList2 = ["Farhan", "Munnaza", "Faiq", "Bilal"];
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
guestList2.unshift("Hammad"); // Add to beggining
guestList2.push("Sajjad"); // Add to end
// Adding middle value
let middleIndex: number = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex, 0, "Burhan");

console.log("Updated list of guests");

guestList2.forEach((oneguest) =>
  console.log(
    `Salam ${oneguest}, I would like to invite you to dinner, it would be a great pleasure if you came.`
  )
);

// Question 17 solution:
console.log(
  "\nJust found out that the new dinner table won't arrive in time, so i could only invite two people for dinnner"
);
// using while loop
while (guestList2.length > 2) {
  let removedGuest = guestList2.pop();
  console.log(`So Sorry, ${removedGuest} i cant invite you to dinner`);
}
console.log("\nInvititaions to the last 2 guests");

guestList2.forEach((lasttwo) =>
  console.log(`Luckily ${lasttwo}, you two are still invited`)
);

// Removing last two guest from the list
guestList2.pop();
guestList2.pop();

console.log("Empty List:", guestList2);

// Question 18 solution:
// Making an array pf places to visit and printing it in its original order
let placesToVist: string[] = [
  "England",
  "Portugal",
  "Germany",
  "Sweden",
  "France",
];
console.log("Original Order:", placesToVist);

// printing the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVist].sort());

// showing that its stiil in original order
console.log("Still in original order:", placesToVist);

// printing the arrray in reverse alphabetical order without changing the orighinal order
console.log("Reverse alphabetical order:", [...placesToVist].sort().reverse());

// showing that its still in original order
console.log("Still in original order:", placesToVist);

// reverse the order of the list and print it
console.log("Reverse Order:", placesToVist);

// reverse the order of your list agin
console.log("Back to the original order of array:", placesToVist);

// sort the array in alphabetical order
console.log("Sorted in alphabetical order:", placesToVist);

// original order reversed agin
console.log("Original array reversed again:", placesToVist.reverse());

// Question 19 solution:
let guestList3 = ["Farhan", "Munnaza", "Faiq", "Bilal"];
let guestLength: number = guestList3.length;
console.log(guestLength);

//  Question 20 solution:
let speakingLanguages: string[] = ["Urdu", "English", "Pashto", "French"];

console.log("List of programming:");

speakingLanguages.forEach((languages) => console.log(languages));

// Question 21 solution:
interface car {
  brand: string;
  colour: string;
  model: number;
}

let car = {
  brand: "Audi",
  colour: "Black",
  model: 2021,
};
console.log("Car details:", car);

// Question 22 solution:
let intentionalErrror: string[] = ["A", "B", "C", "D"];

// producing intentional error
//console.log(intentionalErrror[4]);
console.log(intentionalErrror[2]);

// Question 23 solution:
// making a variable
let num1 = 5;
let num2 = 10;

// Test 1
console.log("\nTest 1: Five is equal to 5?");
console.log(num1 == 5);

// Test 2
console.log("\nTest 2: Ten is equal to 10?");
console.log(num2 == 10);

// Test 3
console.log("\nTest 3: Five is not equal to 10?");
console.log(num1 != num2);

// Test 4
console.log("\nTest 4: Ten is greater than 5?");
console.log(num2 > 5);

// Test 5
console.log("\nTest 5: 5 is smaller than 10?");
console.log(num1 < num2);

// Test 6
console.log("\nTest 5: 5 is greater than 10?");
console.log(num1 > num2);

// Test 7
console.log("\nTest 4: Ten is smaller than 5?");
console.log(num2 < 5);

// Test 8
console.log("\nTest 3: Five is equal to 10?");
console.log(num1 == num2);

// Test 9
console.log("\nTest 1: Five is not equal to 5?");
console.log(num1 != 5);

// Test 10
console.log("\nTest 2: Ten is not equal to 10?");
console.log(num2 != 10);

// Question 24 solution
// Tests for equality and inequality with strings
let fruit = "mango";
console.log("Is the fruit equal to Mango?");
console.log(fruit == "mango");

console.log("\nIs the fruit not equal to Mango?");
console.log(fruit != "mango");

// Tests using Lowercase functions
let upperCaseFruit = "MANGO";
console.log("\n Is MANGO equal to mango after converting into lowercase?");
console.log(upperCaseFruit.toLowerCase() == "mango");

console.log("\n Is MANGO not equal to mango after converting into lowercase?");
console.log(upperCaseFruit.toLowerCase() != "mango");

// Numerical test
let number1 = 30;
let number2 = 15;
let number3 = 30;
console.log("\nIs 30 equal to 30?");
console.log(number1 == number3);

console.log("\nIs 30 not equal to 15?");
console.log(number1 != number2);

console.log("\nIs 30 greater than 15?");
console.log(number1 > number2);

console.log("\nIs 15 smaller than 30?");
console.log(number2 < number1);

console.log("\nIs 30 greater than or equal to 30?");
console.log(number1 >= number3);

console.log("\nIs 15 less than or equal to 30?");
console.log(number2 <= number1);

console.log("\nIs 30 equal to 15?");
console.log(number1 == number2);

console.log("\nIs 15 greater than 30?");
console.log(number2 > number1);

console.log("\nIs 30 smaller than 15?");
console.log(number1 < number2);

console.log("\nIs 15 gretaer than or equal to 30?");
console.log(number2 >= number1);

console.log("\nIs 30 less than or equal to 15?");
console.log(number1 <= number2);

// Tests using "And" & "or" operators
console.log("\n 30 is greater than 15 and 30 is not equal to 15");
console.log(number1 > number2 && number1 != number2);

console.log("\n 30 is smaller than 15 and 30 is equal to 15");
console.log(number1 < number2 && number1 == number2);

console.log("\n 30 is greater than 15 or 30 is not equal to 15");
console.log(number1 > number2 || number1 != number2);

console.log("\n 30 is smaller than 15 or 30 is equal to 15");
console.log(number1 < number2 || number1 == number2);

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));

console.log(arr.includes(6));

// Question 25 solution:
let alein_colour = "Red";

if (alein_colour === "Red") {
  console.log("The player just earned 5 points");
}

if (alein_colour === "Blue") {
  console.log("The player just earned 10 points");
}

// Question 26 solution:
// version that runs if block
if (alein_colour === "Red") {
  console.log("The player just earned 5 points for shooting the alien");
} else {
  ("The player just earned 10 points");
}

// version that runs else block

if (alein_colour === "blue") {
  console.log("The player just earned 10 points");
} else {
  console.log("The player just earned 10 points");
}
// Question 27 solution
// Version 1
if (alein_colour === "Red") {
  console.log("You shot down the red alien and earned 5 points");
} else if (alein_colour === "Yellow") {
  console.log("You shot down the yellow alien and earned 10 points");
} else if (alein_colour === "Green") {
  console.log("You shot down the green alien and earned 15 points");
}

// Version 2
let alienColour = "Yellow";
if (alienColour === "Red") {
  console.log("You shot down the red alien and earned 5 points");
} else if (alienColour === "Yellow") {
  console.log("You shot down the yellow alien and earned 10 points");
} else if (alienColour === "Green") {
  console.log("You shot down the green alien and earned 15 points");
}

// Version 3

let alienColour2 = "Green";
if (alienColour2 === "Red") {
  console.log("You shot down the red alien and earned 5 points");
} else if (alienColour2 === "Yellow") {
  console.log("You shot down the yellow alien and earned 10 points");
} else if (alienColour2 === "Green") {
  console.log("You shot down the green alien and earned 15 points");
}

// Question 28 solution
let personAge = 19;

if (personAge < 2){
  console.log("The person is a baby")
}
else if(personAge <= 2 && personAge < 4){
  console.log("The person is a toddler")
}
else if(personAge <= 4 && personAge < 13){
  console.log("The person is a kid")
}
else if(personAge <= 13 && personAge < 20){
  console.log("The person is a teenager")
}
else if(personAge <= 20 && personAge < 65){
  console.log("The person is an adult")
}
else if(personAge >= 65){
  console.log("The person is an elder")
}