function randomizeDiceImages(dice, imgs, numFaces, numberRolls) {

    for (let i = 0; i < numberRolls; i++) {
        var x = Math.floor(Math.random() * numFaces);
        dice.appendChild(imgs[x]);
    }
}


//d4
rollD4.addEventListener("click", () => {
    roll4(document.getElementById("textbox").value)
})

executeD4.addEventListener("click", () => {
    roll4(document.getElementById("textbox").value)
})

function roll4(numberRolls) {

    var dice = document.getElementById("dice4");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let d4_1 = document.createElement("img");
    d4_1.src = "d4_up1.png";
    let d4_2 = document.createElement("img");
    d4_2.src = "d4_up2.png";
    let d4_3 = document.createElement("img");
    d4_3.src = "d4_up3.png";
    let d4_4 = document.createElement("img");
    d4_4.src = "d4_up4.png";

    var imgs = [d4_1, d4_2, d4_3, d4_4];

    var numFaces = 4;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);

}

var modal4 = document.getElementById("modal4");

var d4 = document.getElementById("rollD4");

var close = document.getElementsByClassName("close")[0];

d4.onclick = function () {
    modal4.style.display = "block";
}

close.onclick = function () {
    modal4.style.display = "none";
}



//d6
rollD6.addEventListener("click", () => {
    roll6(document.getElementById("textbox2").value)
})

executeD6.addEventListener("click", () => {
    roll6(document.getElementById("textbox2").value)
})

function roll6(numberRolls) {

    var dice = document.getElementById("dice6");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll1 = document.createElement("img");
    roll1.src = "d6_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "d6_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "d6_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "d6_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "d6_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "d6_up6.png";

    var imgs = [roll1, roll2, roll3, roll4, roll5, roll6];

    var numFaces = 6;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);

}

var modal6 = document.getElementById("modal6");

var d6 = document.getElementById("rollD6");

var close = document.getElementsByClassName("close2")[0];

d6.onclick = function () {
    modal6.style.display = "block";
}

close.onclick = function () {
    modal6.style.display = "none";
}



//d8
rollD8.addEventListener("click", () => {
    roll8(document.getElementById("textbox3").value)
})

executeD8.addEventListener("click", () => {
    roll8(document.getElementById("textbox3").value)
})

function roll8(numberRolls) {

    var dice = document.getElementById("dice8");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll1 = document.createElement("img");
    roll1.src = "d8_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "d8_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "d8_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "d8_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "d8_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "d8_up6.png";
    let roll7 = document.createElement("img");
    roll7.src = "d8_up7.png";
    let roll8 = document.createElement("img");
    roll8.src = "d8_up8.png";

    var imgs = [roll1, roll2, roll3, roll4, roll5, roll6, roll7, roll8];

    var numFaces = 8;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);
}

var modal8 = document.getElementById("modal8");

var d8 = document.getElementById("rollD8");

var close = document.getElementsByClassName("close3")[0];

d8.onclick = function () {
    modal8.style.display = "block";
}

close.onclick = function () {
    modal8.style.display = "none";
}



//d10
rollD10.addEventListener("click", () => {
    roll10(document.getElementById("textbox4").value)
})

executeD10.addEventListener("click", () => {
    roll10(document.getElementById("textbox4").value)
})

function roll10(numberRolls) {

    var dice = document.getElementById("dice10");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll1 = document.createElement("img");
    roll1.src = "d10_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "d10_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "d10_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "d10_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "d10_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "d10_up6.png";
    let roll7 = document.createElement("img");
    roll7.src = "d10_up7.png";
    let roll8 = document.createElement("img");
    roll8.src = "d10_up8.png";
    let roll9 = document.createElement("img");
    roll9.src = "d10_up9.png";
    let rolld10 = document.createElement("img");
    rolld10.src = "d10_up10.png";

    var imgs = [roll1, roll2, roll3, roll4, roll5, roll6, roll7, roll8, roll9, rolld10];

    var numFaces = 10;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);
}

var modal10 = document.getElementById("modal10");

var d10 = document.getElementById("rollD10");

var close = document.getElementsByClassName("close4")[0];

d10.onclick = function () {
    modal10.style.display = "block";
}

close.onclick = function () {
    modal10.style.display = "none";
}



//d12
rollD12.addEventListener("click", () => {
    roll12(document.getElementById("textbox5").value)
})

executeD12.addEventListener("click", () => {
    roll12(document.getElementById("textbox5").value)
})

function roll12(numberRolls) {

    var dice = document.getElementById("dice12");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll1 = document.createElement("img");
    roll1.src = "d12_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "d12_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "d12_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "d12_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "d12_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "d12_up6.png";
    let roll7 = document.createElement("img");
    roll7.src = "d12_up7.png";
    let roll8 = document.createElement("img");
    roll8.src = "d12_up8.png";
    let roll9 = document.createElement("img");
    roll9.src = "d12_up9.png";
    let roll10 = document.createElement("img");
    roll10.src = "d12_up10.png";
    let roll11 = document.createElement("img");
    roll11.src = "d12_up11.png";
    let roll12 = document.createElement("img");
    roll12.src = "d12_up12.png";

    var imgs = [roll1, roll2, roll3, roll4, roll5, roll6, roll7, roll8, roll9, roll10, roll11, roll12];

    var numFaces = 12;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);

}

var modal12 = document.getElementById("modal12");

var d12 = document.getElementById("rollD12");

var close = document.getElementsByClassName("close5")[0];

d12.onclick = function () {
    modal12.style.display = "block";
}

close.onclick = function () {
    modal12.style.display = "none";
}



//d20
rollD20.addEventListener("click", () => {
    roll20(document.getElementById("textbox6").value)
})

executeD20.addEventListener("click", () => {
    roll20(document.getElementById("textbox6").value)
})

function roll20(numberRolls) {

    var dice = document.getElementById("dice20");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll1 = document.createElement("img");
    roll1.src = "d20_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "d20_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "d20_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "d20_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "d20_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "d20_up6.png";
    let roll7 = document.createElement("img");
    roll7.src = "d20_up7.png";
    let roll8 = document.createElement("img");
    roll8.src = "d20_up8.png";
    let roll9 = document.createElement("img");
    roll9.src = "d20_up9.png";
    let roll10 = document.createElement("img");
    roll10.src = "d20_up10.png";
    let roll11 = document.createElement("img");
    roll11.src = "d20_up11.png";
    let roll12 = document.createElement("img");
    roll12.src = "d20_up12.png";
    let roll13 = document.createElement("img");
    roll13.src = "d20_up13.png";
    let roll14 = document.createElement("img");
    roll14.src = "d20_up14.png";
    let roll15 = document.createElement("img");
    roll15.src = "d20_up15.png";
    let roll16 = document.createElement("img");
    roll16.src = "d20_up16.png";
    let roll17 = document.createElement("img");
    roll17.src = "d20_up17.png";
    let roll18 = document.createElement("img");
    roll18.src = "d20_up18.png";
    let roll19 = document.createElement("img");
    roll19.src = "d20_up19.png";
    let roll20 = document.createElement("img");
    roll20.src = "d20_up20.png";

    var imgs = [roll1, roll2, roll3, roll4, roll5, roll6, roll7, roll8, roll9, roll10, roll11, roll12, roll13, roll14, roll1, roll1, roll17, roll18, roll19, roll20];

    var numFaces = 20;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);

}

var modal20 = document.getElementById("modal20");

var d20 = document.getElementById("rollD20");

var close = document.getElementsByClassName("close6")[0];

d20.onclick = function () {
    modal20.style.display = "block";
}

close.onclick = function () {
    modal20.style.display = "none";
}



//Percentile Die
rollPercent.addEventListener("click", () => {
    rollPercentile(document.getElementById("textbox7").value)
})

executePercent.addEventListener("click", () => {
    rollPercentile(document.getElementById("textbox7").value)
})


function rollPercentile(numberRolls) {

    var dice = document.getElementById("dicePercent");

    for (let i = dice.children.length - 1; i >= 0; i--) {
        var die = dice.children[i];
        die.remove();
    }

    let roll10 = document.createElement("img");
    roll10.src = "Percentile_Die_up10.png";
    let roll20 = document.createElement("img");
    roll20.src = "Percentile_Die_up20.png";
    let roll30 = document.createElement("img");
    roll30.src = "Percentile_Die_up30.png";
    let roll40 = document.createElement("img");
    roll40.src = "Percentile_Die_up40.png";
    let roll50 = document.createElement("img");
    roll50.src = "Percentile_Die_up50.png";
    let roll60 = document.createElement("img");
    roll60.src = "Percentile_Die_up60.png";
    let roll70 = document.createElement("img");
    roll70.src = "Percentile_Die_up70.png";
    let roll80 = document.createElement("img");
    roll80.src = "Percentile_Die_up80.png";
    let roll90 = document.createElement("img");
    roll90.src = "Percentile_Die_up90.png";
    let roll00 = document.createElement("img");
    roll00.src = "Percentile_Die_up00.png";


    var imgs = [roll10, roll20, roll30, roll40, roll50, roll60, roll70, roll80, roll90, roll00];

    var numFaces = 10;

    randomizeDiceImages(dice, imgs, numFaces, numberRolls);
}

var modalPercent = document.getElementById("modalPercent");

var percentileDie = document.getElementById("rollPercent");

var close = document.getElementsByClassName("close7")[0];

percentileDie.onclick = function () {
    modalPercent.style.display = "block";
}

close.onclick = function () {
    modalPercent.style.display = "none";
}
