const max = prompt("Enter the max number you want to guess:");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter the number to guess:");
h1=document.querySelector("h1");
while (true) {
    if (guess == "Quit" || guess == "quit")
    {
        console.log("Quitting game.....");
        break;
    }
    if (guess == random) {
        h1.innerText=`Congo! You guess the right number : ${guess}`;
        console.log("Congo! You guess the right number...");
        break;
    } 
    guess = prompt("Wrong answer! Enter Again...");
}