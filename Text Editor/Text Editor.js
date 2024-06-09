let textarea = document.querySelector("#textarea");
console.dir(textarea);
let p = document.querySelector("p");

textarea.addEventListener("input", function () {
    // console.log(textarea.value);
    p.innerText = textarea.value;
});