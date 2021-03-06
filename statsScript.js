function save() {
    window.localStorage['statCharName'] = document.getElementById("statCharName").value;

    window.localStorage['str'] = document.getElementById("str").value;

    window.localStorage['dex'] = document.getElementById("dex").value;

    window.localStorage['can'] = document.getElementById("con").value;

    window.localStorage['int'] = document.getElementById("int").value;

    window.localStorage['wis'] = document.getElementById("wis").value;

    window.localStorage['cha'] = document.getElementById("cha").value;
}

function load() {
    document.getElementById("statCharName").value = window.localStorage['statCharName'];

    document.getElementById("str").value = window.localStorage['str'];

    document.getElementById("dex").value = window.localStorage['dex'];

    document.getElementById("con").value = window.localStorage['con'];

    document.getElementById("int").value = window.localStorage['int'];

    document.getElementById("wis").value = window.localStorage['wis'];

    document.getElementById("cha").value = window.localStorage['cha'];
}

let character = {
    name: "",
    hp: 0,
    hp_modifier: 2,
    ac: 10,
    class: "Fighter",
};

character.name = document.getElementById("statCharName");

let hpRoll = document.getElementById("max_hp_roll_button");

hpRoll.addEventListener("click", () => {
    let val = rollHP();
    // I am just putting the value in a text box, but you could make a modal pop up here and they could see the actual dice.
    character.hp = val + character.hp_modifier;
    document.getElementById("max_hp").value = character.hp;
});

var modalMaximum = document.getElementById("modalMax");

var die = document.getElementById("max_hp_roll_button");

var close = document.getElementsByClassName("closeMax")[0];

die.onclick = function () {
    modalMaximum.style.display = "block";
}

close.onclick = function () {
    modalMaximum.style.display = "none";
}




function rollHP() {
    let value = 0;

    if (character.class == "Fighter" || "Paladin") {
        value = rollDice(10);
        displayDice(value, 10);
    } else if (character.class == "Wizard") {
        value = rollDice(6);
        displayDice(value, 6);
    }
    return value;
}


function rollDice(numDie) {
    let value = Math.ceil(Math.random() * numDie);
    return value;
}

function displayDice(value, base) {

    var diceDisplay = document.getElementById("maxDie");

    for (let i = diceDisplay.children.length - 1; i >= 0; i--) {
        var die = diceDisplay.children[i];
        die.remove();
    }

    if (character.class == "Fighter" || "Paladin") {

        let roll1 = document.createElement("img");
    roll1.src = "./dice/d10_up1.png";
    let roll2 = document.createElement("img");
    roll2.src = "./dice/d10_up2.png";
    let roll3 = document.createElement("img");
    roll3.src = "./dice/d10_up3.png";
    let roll4 = document.createElement("img");
    roll4.src = "./dice/d10_up4.png";
    let roll5 = document.createElement("img");
    roll5.src = "./dice/d10_up5.png";
    let roll6 = document.createElement("img");
    roll6.src = "./dice/d10_up6.png";
    let roll7 = document.createElement("img");
    roll7.src = "./dice/d10_up7.png";
    let roll8 = document.createElement("img");
    roll8.src = "./dice/d10_up8.png";
    let roll9 = document.createElement("img");
    roll9.src = "./dice/d10_up9.png";
    let rolld10 = document.createElement("img");
    rolld10.src = "./dice/d10_up10.png";

    var hp10 = [roll1, roll2, roll3, roll4, roll5, roll6, roll7, roll8, roll9, rolld10];


    for (let i = 0; i < 10; i++) {
        if (hp10[i] && hp10[i].style) {
            hp10[i].style.height = "90px";
            hp10[i].style.width = "155px";
        }
    }


        for (let i = 0; i < base; i++) {
            var die10 = Math.floor(Math.random() * 10);
            diceDisplay.appendChild(hp10[die10]);

        }
        if (character.class == "Wizard") {

            let roll1 = document.createElement("img");
            roll1.src = "./dice/d6_up1.png";
            let roll2 = document.createElement("img");
            roll2.src = "./dice/d6_up2.png";
            let roll3 = document.createElement("img");
            roll3.src = "./dice/d6_up3.png";
            let roll4 = document.createElement("img");
            roll4.src = "./dice/d6_up4.png";
            let roll5 = document.createElement("img");
            roll5.src = "./dice/d6_up5.png";
            let roll6 = document.createElement("img");
            roll6.src = "./dice/d6_up6.png";

            var hp6 = [roll1, roll2, roll3, roll4, roll5, roll6];

            for (let i = 0; i < 10; i++) {
        if (hp6[i] && hp6[i].style) {
            hp6[i].style.height = "90px";
            hp6[i].style.width = "90px";
        }
    }

            for (let i = 0; i < base; i++) {
                var die6 = Math.floor(Math.random() * 6);
                diceDisplay.appendChild(hp6[die6]);
            }
        }
    }
}
