let favorite = ["avator","Avator","Iron Man","iron man","Meg","meg","HarryPotter","Harry Potter","harrypotter","harry potter"];
let guess = prompt("Guess the movie:");
h1=document.querySelector("h1");
if ((guess == "Quit")||(guess=="quit")) {
    h1.innerText=`You quit the game.....`;
    console.log("You quit the game......");
    
}else{
while (((!favorite.includes(guess))) && ((guess != "Quit")||(guess !="quit")))
{
    guess = prompt("Wrong! Try Again.... or use Quit to quit");
    if ((guess == "Quit")||(guess=="quit")) {
        h1.innerText=`You quit the game...`;
        console.log("You quit the game......");
        break; 
    }
}   
if (favorite.includes(guess))
{ 
    h1.innerText=`You guessed it! The favorite movie is indeed ${guess}`;
    console.log("Congo! You guessed it right");
}
}