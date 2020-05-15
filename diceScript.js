//d4
rollD4.addEventListener("click", () => {
    rollDice(document.getElementById("textbox").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice4");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

   var d4_1 = document.createElement("img");
d4_1.src = "d4_up1.png";
  var d4_2 = document.createElement("img");
  d4_2.src = "d4_up2.png";
  var d4_3 = document.createElement("img");
d4_3.src = "d4_up3.png";
  var d4_4 = document.createElement("img");
d4_4.src = "d4_up4.png";
    var imgs = ["d4_1", "d4_2", "d4_3", "d4_4"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 4);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD4.addEventListener("click", () => {
    rollDice(document.getElementById("textbox").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice4");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

var d4_1 = document.createElement("img");
d4_1.src = "d4_up1.png";
  var d4_2 = document.createElement("img");
  d4_2.src = "d4_up2.png";
  var d4_3 = document.createElement("img");
d4_3.src = "d4_up3.png";
  var d4_4 = document.createElement("img");
d4_4.src = "d4_up4.png";
    var imgs = ["d4_1", "d4_2", "d4_3", "d4_4"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 4);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal4");

var d4 = document.getElementById("rollD4");

var close = document.getElementsByClassName("close")[0];

d4.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//d6
rollD6.addEventListener("click", () => {
    rollDice(document.getElementById("textbox2").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice6");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD6.addEventListener("click", () => {
    rollDice(document.getElementById("textbox2").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice6");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal6");

var d6 = document.getElementById("rollD6");

var close = document.getElementsByClassName("close2")[0];

d6.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//d8
rollD8.addEventListener("click", () => {
    rollDice(document.getElementById("textbox3").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice8");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD8.addEventListener("click", () => {
    rollDice(document.getElementById("textbox3").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice8");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal8");

var d8 = document.getElementById("rollD8");

var close = document.getElementsByClassName("close3")[0];

d8.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//d10
rollD10.addEventListener("click", () => {
    rollDice(document.getElementById("textbox4").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice10");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD10.addEventListener("click", () => {
    rollDice(document.getElementById("textbox4").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice10");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal10");

var d10 = document.getElementById("rollD10");

var close = document.getElementsByClassName("close4")[0];

d10.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//d12
rollD12.addEventListener("click", () => {
    rollDice(document.getElementById("textbox5").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice12");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD12.addEventListener("click", () => {
    rollDice(document.getElementById("textbox5").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice12");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal12");

var d12 = document.getElementById("rollD12");

var close = document.getElementsByClassName("close5")[0];

d12.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//d20
rollD20.addEventListener("click", () => {
    rollDice(document.getElementById("textbox6").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice20");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD20.addEventListener("click", () => {
    rollDice(document.getElementById("textbox6").value)
})

function rollDice(number) {

    var dice = document.getElementById("dice20");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

var modal = document.getElementById("modal20");

var d20 = document.getElementById("rollD20");

var close = document.getElementsByClassName("close6")[0];

d20.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}



//Percentile Die
rollPercent.addEventListener("click", () => {
    rollDice(document.getElementById("textbox7").value)
})

function rollDice(number) {

    var dice = document.getElementById("dicePercent");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }
}

executePercent.addEventListener("click", () => {
    rollDice(document.getElementById("textbox7").value)
})

function rollDice(number) {

    var dice = document.getElementById("dicePercent");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }
}

var modal = document.getElementById("modalPercent");

var percentileDie = document.getElementById("rollPercent");

var close = document.getElementsByClassName("close7")[0];

percentileDie.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}
