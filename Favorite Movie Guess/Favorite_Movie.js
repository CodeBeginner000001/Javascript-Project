let favorite = "avator";
let guess = prompt("Guess the movie:");
while ((guess != favorite) && ((guess != "Quit")||(guess !="quit")))
{
    guess = prompt("Wrong! Try Again....");
    if ((guess == "Quit")||(guess=="quit")) {
        console.log("You quit the game......");
        break; 
    }
}   

if (guess == favorite)
{ 
    console.log("Congo! You guessed it right");
}