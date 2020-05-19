
let character = {
  class: "Fighter",
  int: 0,
  hp: 0,
  hp_modifier: 2
};

let hpRoll = document.getElementById("max_hp_roll_button");
let intRoll = document.getElementById("int_roll_button");

hpRoll.addEventListener("click", () => {
  let val = rollHP();
  // I am just putting the value in a text box, but you could make a modal pop up here and they could see the actual dice.
  character.hp = val + character.hp_modifier;
  document.getElementById("max_hp").value = character.hp;
});

intRoll.addEventListener("click", () => {
  let val = rollAbility();
  character.int = val;
  document.getElementById("int").value = character.int;
});

// Algorithm for rolling HP
function rollHP() {
  // Check class to see which dice need to be rolled
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

// A different algorithm for rolling an ability.
function rollAbility() {
  let value = rollDice(6) + rollDice(6) + rollDice(6);
  displayDice(value, 6);
  displayDice(value, 6);
  displayDice(value, 6);

  return value;
}

// General function for rolling any dice.
function rollDice(numDie) {
  let value = Math.ceil(Math.random() * numDie);
  return value;
}

function displayDice(value, base) {
    var modalMax = document.getElementById("modalMax");

    if (character.class == "Fighter" || "Paladin") {
        var d10 = ["d10_up1.png", "d10_up2.png", "d10_up3.png", "d10_up4.png", "d10_up5.png", "d10_up6.png", "d10_up7.png", "d10_up8.png", "d10_up9.png", "d10_up10"];
        for (let i = 0; i < base; i++) {
            var hp10 = document.createElement("img");
            var die10 = Math.floor(Math.random() * 10);
            hp10.setAttribute("src", d10[die10]);
            modalMax.appendChild(hp10);

        } if (character.class == "Wizard") {

            var d6 = ["d6_up1.png", "d6_up2.png", "d6_up3.png", "d6_up4.png", "d6_up5.png", "d6_up6.png"];
            for (let i = 0; i < base; i++) {
                var hp6 = document.createElement("img");
                var die6 = Math.floor(Math.random() * 6);
                hp6.setAttribute("src", d6[die6]);
                modalMax.appendChold(hp6);
            }
        }
    }
}
