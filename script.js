   function addItem() {
       var ul = document.getElementById("dynamic-list");
       var inventory = document.getElementById("inventory");
       var li = document.createElement("li");
       li.setAttribute('id', inventory.value);
       li.appendChild(document.createTextNode(inventory.value));
       ul.appendChild(li);
   }

   function removeItem() {
       var ul = document.getElementById("dynamic-list");
       var inventory = document.getElementById("inventory");
       var item = document.getElementById(inventory.value);
       ul.removeChild(item);
   }

   let character = {
       class: "Fighter",
       maxHP: 0,
       hp_modifier: 2;
   };

   let hpRoll = document.getElementById("max_hp_roll");

   hpRoll.addEventListener("click", () => {
       let val = rollMaxHP();

       character.maxHP = val + character.hp_modifier;
       document.getElementById("maxHP").value = character.maxHP;
   });

   function rollMaxHP() {
       let value = 0;

       if (character.class == "Fighter || Paladin") {
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
       if (character.class == "Fighter" || "Paladin") {
           var d10 = ["d10_up1.png", "d10_up2.png", "d10_up3.png", "d10_up4.png", "d10_up5.png", "d10_up6.png", "d10_up7.png", "d10_up8.png", "d10_up9.png", "d10_up10"];
           for (let i = 0; i < base; i++) {
               var hpDie = document.createElement("img");
               var die = Math.floor(Math.random() * 10);
               hpDie.setAttribute("src", d10[die]);
               //whatever the div id is.appendChild(hpDie);

           } else if (character.class == "Wizard") {
               var d6 = ["d6_up1.png", "d6_up2.png", "d6_up3.png", "d6_up4.png", "d6_up5.png", "d6_up6.png"];
               for (let 1 = 0; i < base; i++) {
                   var hpDie = document.createElement("img");
                   var die = Math.floor(Math.random() * 6);
                   hpDie.setAttribute("src", d6[die]);
                   //whatever-the-div-id-is.appendChold(hpDie);
               }
           }
       }
