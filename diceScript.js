//d4
rollD4.addEventListener("click", () => {
    roll4(document.getElementById("textbox").value)
})

function roll4(number) {

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
    roll4Again(document.getElementById("textbox").value)
})

function roll4Again(number) {

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
    roll6(document.getElementById("textbox2").value)
})

function roll6(number) {

    var dice = document.getElementById("dice6");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll1 = document.createElement("img");
    roll1.src = "d6_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d6_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d6_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d6_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d6_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d6_up6.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 6);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }


}

executeD6.addEventListener("click", () => {
    roll6Again(document.getElementById("textbox2").value)
})

function roll6Again(number) {

    var dice = document.getElementById("dice6");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll1 = document.createElement("img");
    roll1.src = "d6_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d6_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d6_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d6_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d6_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d6_up6.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6"];

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
    roll8(document.getElementById("textbox3").value)
})

function roll8(number) {

    var dice = document.getElementById("dice8");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll1 = document.createElement("img");
    roll1.src = "d8_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d8_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d8_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d8_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d8_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d8_up6.png";
    var roll7 = document.createElement("img");
    roll7.src = "d8_up7.png";
    var roll8 = document.createElement("img");
    roll8.src = "d8_up8.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6", "roll7", "roll8"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 8);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }
}

executeD8.addEventListener("click", () => {
    roll8Again(document.getElementById("textbox3").value)
})

function roll8Again(number) {

    var dice = document.getElementById("dice8");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll1 = document.createElement("img");
    roll1.src = "d8_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d8_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d8_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d8_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d8_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d8_up6.png";
    var roll7 = document.createElement("img");
    roll7.src = "d8_up7.png";
    var roll8 = document.createElement("img");
    roll8.src = "d8_up8.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6", "roll7", "roll8"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 8);
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
    roll10(document.getElementById("textbox4").value)
})

function roll10(number) {

    var dice = document.getElementById("dice10");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll1 = document.createElement("img");
    roll1.src = "d10_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d10_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d10_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d10_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d10_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d10_up6.png";
    var roll7 = document.createElement("img");
    roll7.src = "d10_up7.png";
    var roll8 = document.createElement("img");
    roll8.src = "d10_up8.png";
    var rolld10 = document.createElement("img");
    rolld10.src = "d10_up10.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6", "roll7", "roll8", "roll9", "rolld10"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 10);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }
}

executeD10.addEventListener("click", () => {
    roll10Again(document.getElementById("textbox4").value)
})

function roll10Again(number) {

    var dice = document.getElementById("dice10");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }


    var roll1 = document.createElement("img");
    roll1.src = "d10_up1.png";
    var roll2 = document.createElement("img");
    roll2.src = "d10_up2.png";
    var roll3 = document.createElement("img");
    roll3.src = "d10_up3.png";
    var roll4 = document.createElement("img");
    roll4.src = "d10_up4.png";
    var roll5 = document.createElement("img");
    roll5.src = "d10_up5.png";
    var roll6 = document.createElement("img");
    roll6.src = "d10_up6.png";
    var roll7 = document.createElement("img");
    roll7.src = "d10_up7.png";
    var roll8 = document.createElement("img");
    roll8.src = "d10_up8.png";
    var rolld10 = document.createElement("img");
    rolld10.src = "d10_up10.png";

    var imgs = ["roll1", "roll2", "roll3", "roll4", "roll5", "roll6", "roll7", "roll8", "roll9", "rolld10"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 10);
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
    roll12(document.getElementById("textbox5").value)
})

function roll12(number) {

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
    roll12Again(document.getElementById("textbox5").value)
})

function roll12Again(number) {

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
    roll20(document.getElementById("textbox6").value)
})

function roll20(number) {

    var dice = document.getElementById("dice20");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 20);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }

}

executeD20.addEventListener("click", () => {
    roll20Again(document.getElementById("textbox6").value)
})

function roll20Again(number) {

    var dice = document.getElementById("dice20");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var imgs = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png", "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png", "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 20);
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
    rollPercentile(document.getElementById("textbox7").value)
})

function rollPercentile(number) {

    var dice = document.getElementById("dicePercent");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll00 = document.createElement("img");
    roll00.src = "Percentile_Die_up00.png";
    var roll10 = document.createElement("img");
    roll10.src = "Percentile_Die_up10.png";
    var roll20 = document.createElement("img");
    roll20.src = "Percentile_Die_up20.png";
    var roll30 = document.createElement("img");
    roll30.src = "Percentile_Die_up30.png";
    var roll40 = document.createElement("img");
    roll40.src = "Percentile_Die_up40.png";
    var roll50 = document.createElement("img");
    roll50.src = "Percentile_Die_up50.png";
    var roll60 = document.createElement("img");
    roll60.src = "Percentile_Die_up60.png";
    var roll70 = document.createElement("img");
    roll70.src = "Percentile_Die_up70.png";
    var roll80 = document.createElement("img");
    roll80.src = "Percentile_Die_up80.png";
    var roll90 = document.createElement("img");
    roll90.src = "Percentile_Die_up90.png";


    var imgs = ["roll10", "roll20", "roll30", "roll40", "roll50", "roll60", "roll70", "roll80", "roll90", "roll00"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 10);
        img1.setAttribute("src", imgs[x]);
        dice.appendChild(img1);
    }
}

executePercent.addEventListener("click", () => {
    rollPercentAgain(document.getElementById("textbox7").value)
})

function rollPercentAgain(number) {

    var dice = document.getElementById("dicePercent");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    var roll00 = document.createElement("img");
    roll00.src = "Percentile_Die_up00.png";
    var roll10 = document.createElement("img");
    roll10.src = "Percentile_Die_up10.png";
    var roll20 = document.createElement("img");
    roll20.src = "Percentile_Die_up20.png";
    var roll30 = document.createElement("img");
    roll30.src = "Percentile_Die_up30.png";
    var roll40 = document.createElement("img");
    roll40.src = "Percentile_Die_up40.png";
    var roll50 = document.createElement("img");
    roll50.src = "Percentile_Die_up50.png";
    var roll60 = document.createElement("img");
    roll60.src = "Percentile_Die_up60.png";
    var roll70 = document.createElement("img");
    roll70.src = "Percentile_Die_up70.png";
    var roll80 = document.createElement("img");
    roll80.src = "Percentile_Die_up80.png";
    var roll90 = document.createElement("img");
    roll90.src = "Percentile_Die_up90.png";


    var imgs = ["roll10", "roll20", "roll30", "roll40", "roll50", "roll60", "roll70", "roll80", "roll90", "roll00"];

    for (let i = 0; i < number; i++) {
        var img1 = document.createElement("img");
        var x = Math.floor(Math.random() * 10);
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
