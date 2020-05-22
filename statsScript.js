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

        var d10 = ["d10_up1.png", "d10_up2.png", "d10_up3.png", "d10_up4.png", "d10_up5.png", "d10_up6.png", "d10_up7.png", "d10_up8.png", "d10_up9.png", "d10_up10"];

        for (let i = 0; i < base; i++) {
            var hp10 = document.createElement("img");
            var die10 = Math.floor(Math.random() * 10);
            hp10.setAttribute("src", d10[die10]);
            diceDisplay.appendChild(hp10);

        }
        if (character.class == "Wizard") {

            var d6 = ["d6_up1.png", "d6_up2.png", "d6_up3.png", "d6_up4.png", "d6_up5.png", "d6_up6.png"];
            for (let i = 0; i < base; i++) {
                var hp6 = document.createElement("img");
                var die6 = Math.floor(Math.random() * 6);
                hp6.setAttribute("src", d6[die6]);
                diceDisplay.appendChild(hp6);
            }
        }
    }
}
