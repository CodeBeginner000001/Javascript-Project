let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    h1.innerText = GetrandomColor();
    
    let div = document.querySelector("div");
    div.style.backgroundColor = GetrandomColor();
    console.log("Color Updated");
    let div_h3 = document.querySelector("h3");
    div_h3.style.color = "white";
});
function GetrandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}