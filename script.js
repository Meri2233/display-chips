let buttonEl = document.querySelector('.add');
var inputEl = document.getElementById("name");
let chipsEl = document.querySelector(".chips");

buttonEl.addEventListener("click",(e)=>{
    let div = document.createElement('div');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let img = document.createElement('img');
    div.classList.add(inputEl.value);
    div.classList.add("chip");
    p.innerText = inputEl.value;
    button.innerText = "x";
    img.src = "./avatar.png";

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);
    chipsEl.appendChild(div);
})