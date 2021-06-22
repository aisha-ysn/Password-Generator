var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = '!"#@$%&,()*+;:{}[]=<>-_/\|~'

number = '123456789'
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function(x) {
    return x.toUpperCase();
};

capital = lower.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {

    enter = parseInt(prompt("What is your desired password length? (must be between 8 - 128)"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {

        confirmNumber = confirm("Would you like  your password to contain numbers?");
        confirmCharacter = confirm("Would you like  your password to contain special characters?");
        confirmUppercase = confirm("Would you like  your password to contain capital letters?");
        confirmLowercase = confirm("Would you like  your password to contain Lowercase letters?");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Criteria selection required in order to proceed!");

    } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, lower, capital);
    } else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, capital);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lower);
    } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lower, capital);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lower, capital);
    } else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lower);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(capital);
    } else if (confirmLowercase && confirmNumber) {
        choices = lower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lower.concat(capital);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(capital);
    } else if (confirmCharacter) {
        choices = character;
    } else if (confirmNumber) {
        choices = number;
    } else if (confirmLowercase) {
        choices = lower;
    } else if (confirmUppercase) {
        choices = space.concat(capital);
    };


    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}