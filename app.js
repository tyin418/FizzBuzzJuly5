$(document).ready(function () {

    var userInput;

    userInput = prompt("Enter a number!");
    while (isNaN(userInput) === true) {
        userInput = prompt("The input is not a number")
    }
    console.log(userInput);

    var FBApp = function (limit) {
        for (var i = 1; i <= limit; i++) {
            if (i % 15 === 0) {
                console.log("fizzbuzz");
                $(".display").append("<p>" + "FizzBuzz" + "</p>");
            } else if (i % 3 === 0) {
                console.log("fizz");
                $(".display").append("<p>" + "Fizz" + "</p>");
            } else if (i % 5 === 0) {
                console.log("buzz");
                $(".display").append("<p>" + "Buzz" + "</p>");
            } else {
                console.log(i)
                $(".display").append("<p>" + i + "</p>");
            }

        }
    }

    FBApp(userInput);

});
