const Ballet = document.querySelector("#Ballet");
Ballet.onclick = function () {
    alert("You selected Ballet!")
    }

const Modern = document.querySelector("#Modern");
Modern.onclick = function () {
    alert("You selected Modern!")
    }

const Jazz = document.querySelector("#Jazz");
Jazz.onclick = function () {
    alert("You selected Jazz!")
    }

const Lyrical = document.querySelector("#Lyrical");
Lyrical.onclick = function () {
    alert("You selected Lyrical!")
    }

const Contemporary = document.querySelector("#Contemporary");
Contemporary.onclick = function () {
    alert("You selected Contemporary!")
    }

const Tap = document.querySelector("#Tap");
Tap.onclick = function () {
    alert("You selected Tap!")
    }

const Hiphop = document.querySelector("#Hiphop");
Hiphop.onclick = function () {
    alert("You selected Hiphop!")
    }

const Acro = document.querySelector("#Acro");
Acro.onclick = function () {
    alert("You selected Acro!")
    }

    fullname.oninput = function(){
        heading.innerText = "Welcome to GDS " + fullname.value;
    };