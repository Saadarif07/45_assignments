// Question 2 soltion:
var personName = "ERIC";
console.log("Hello ".concat(personName, ", Would you like to learn some Python today?"));
// Question 3 solution:
// Printing name in lower,upper and titlecases;
var personNames = "saad Arif";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Question 4 solution:
console.log('Cristiano Ronaldo once said,"Your love makes me strong,your hate makes me unstoppable."');
// Question 5 solution:
var famous_person = "Cristiano Ronaldo";
var message = 'once said, "Your love makes me strong,your hate makes me unstoppable"';
console.log(famous_person, message);
// Question 6 solution:
var whiteSpaceName = "\n\t Saad Arif \t\n";
console.log(whiteSpaceName);
var withoutWhiteSpace = whiteSpaceName.trim();
console.log(withoutWhiteSpace);
// Question 7&8 soulution:
console.log(6 + 2);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// Question 9 solution:
var favNumber = 7;
var messages = "My favorite number is : ";
console.log(messages, favNumber);
// Question 10 solution:
// Add comments to any program
console.log(6 + 2); // Addition
console.log(10 - 2); // Subtraction
console.log(2 * 4); // Multiplication
console.log(16 / 2); // Division
// Question 11 solution:
var friendsName = ["Ashar", "Hamza", "Daniyal"];
console.log(friendsName);
// Question 12 solution:
var friendsName1 = ["Ashar", "Hamza", "Daniyal"];
friendsName1.forEach(function (name) {
    console.log("Hello, ".concat(name, " How are you?"));
});
// Question 13 solution:
var transportationModes = ["Bike", "Car", "Bus"];
transportationModes.forEach(function (mode) {
    return console.log("I would like to own a ".concat(mode, " one day."));
});
//  Question 14 solution:
var guestList = ["Farhan", "Munnaza", "Faiq", "Bilal"];
guestList.forEach(function (guest) {
    return console.log("Salam ".concat(guest, ", I would like to invite you to dinner, it would be a great pleasure if you came."));
});
// Question 15 solution:
var guestList2 = ["Farhan", "Munnaza", "Faiq", "Bilal"];
var cantMakeIt = guestList2[2];
console.log(cantMakeIt, "cannot come");
guestList2.splice(2, 2, "Taha");
guestList2.forEach(function (guests) {
    return console.log("Salam ".concat(guests, ", I would like to invite you to dinner, it would be a great pleasure if you came."));
});
//  Question 16 solution:
console.log("\nGood News!,I found a bigger dinner table.");
guestList2.unshift("Hammad"); // Add to beggining
guestList2.push("Sajjad"); // Add to end
// Adding middle value
var middleIndex = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex, 0, "Burhan");
console.log("Updated list of guests");
guestList2.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", I would like to invite you to dinner, it would be a great pleasure if you came.")); });
