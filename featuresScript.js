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


var select = document.getElementById("classDrop");

   var classes = ["Fighter", "Paladin", "Wizard"];

   for (var i = 0; i < classes.length; i++) {
       var opt = classes[i];
       var el = document.createElement("option");
       el.textContent = opt;
       el.value = opt;
       select.appendChild(el);
   }

   function getClass(eleme) {
       var e = document.getElementById("classDrop");
       var strUser = e.options[e.selectedIndex].value;
       if (strUser == 'Fighter') {
           document.getElementById("classFeats").innerHTML = "<strong>Saving Throws:</strong> Strength, Constitution.                         <p><strong>Skills:</strong> Choose two skills from - Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.</p> <p><strong>Equipment:</strong> You start with the following equipment, in addition to the equipment granted by your background: (a) chain mail or (b) leather, longbow, and 20 arrows (a) a martial weapon and a shield or (b) two martial weapons (a) a light crossbow and 20 bolts or (b) two handaxes (a) a dungeoneer's pack or (b) an explorer's pack</p>                  <p><strong>Fighting Style:</strong> You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.</p>  <p><em>Archery:</em> You gain a +2 bonus to attack rolls you make with ranged weapons</p>           <p><em>Defense:</em> While you are wearing armor, you gain a +1 bonus to AC.</p>   <p><em>Dueling:</em> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p>                            <p><em>Great Weapon Fighting:</em> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</p>  <p><em>Protection:</em> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>  <p><em>Two-Weapon Fighting:</em> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p>                 <p><strong>Second Wind:</strong> You have a limited well of stamina that you can draw onto protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d 10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.</p>";
           document.getElementById("profArmor").innerHTML = "All armor. Shields.";
           document.getElementById("profWeapons").innerHTML = "Simple weapons, martial weapons."
       } else if (strUser == 'Paladin') {
           document.getElementById("classFeats").innerHTML = "<strong>Saving Throws:</strong> Wisdom, Charisma.  <p><strong>Skills:</strong> Choose two from - Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion.</p>  <p><strong>Equipment:</strong> You start with the following equipment, in addition to the equipment granted by your background: (a) a martial weapon and a shield or (b) two martial weapons (a) five javelins or (b) any simple melee weapon (a) a priest's pack or (b) an explorer's pack (a) Chain mail and a holy symbol</p>  <p><strong>Divine Sense</strong> The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p>   <p><strong>Lay on Hands</strong> Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.";
           document.getElementById("profArmor").innerHTML = "All armor. Shields.";
           document.getElementById("profWeapons").innerHTML = "Simple weapons, martial weapons.";

       } else if (strUser == 'Wizard') {
           document.getElementById("classFeats").innerHTML = "<strong>Saving Throws:</strong> Intelligence, Wisdom.  <p><strong>Skills:</strong> Choose two from - Arcana, History, Insight, Investigation, Medicine, and Religion.</p>  <p><strong>Equipment:</strong> You start with the following equipment, in addition to the equipment granted by your background: (a) a quarterstaff or (b) a dagger (a) a component pouch or (b) an arcane focus (a) a scholar's pack or (b) an explorer's pack (a) A spellbook</p>                       <p><strong>Cantrips:</strong> At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels.</p>             <p><strong>Spellbook:</strong> At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice.</p>        <p><strong>Preparing and Casting Spells:</strong> To cast a these spell of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. You prepare the list of wizard spells that are available for you to cast. To do so. choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots. For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence o f 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells. You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.</p>        <p><strong>Spellcasting Ability:</strong> Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence m odifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p>  <p><em>Spell save DC</em> = 8 + your proficiency bonus + your Intelligence modifier</p>               <p><em>Spell attack modifier</em> = your proficiency bonus + your intelligence modifier</p>  <p><Strong>Ritual Casting:</strong> You can cast a w izard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p>                                     <p><strong>Spellcasting Focus:</strong> You can use an arcane focus (found in chapter 5) as a spellcasting focus for your wizard spells.</p>                                                      <p><strong>Learning Spells of 1st Level and Higher:</strong> Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots. On your adventures, you might find other spells that you can add to your spellbook.</p>             <p><strong>Arcane Recovery:</strong> You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>";
           document.getElementById("profArmor").innerHTML = "None.";
           document.getElementById("profWeapons").innerHTML = "Daggers, darts, slings, quarterstaffs, light crossbows.";
       }
   }

   var select = document.getElementById("selectBkgd");

   var bkgds = ["Acolyte", "Criminal"];

   for (var i = 0; i < bkgds.length; i++) {
       var opt = bkgds[i];
       var el = document.createElement("option");
       el.textContent = opt;
       el.value = opt;
       select.appendChild(el);
   }

   function getBkgd(eleme) {
       var e = document.getElementById("selectBkgd");
       var strUser = e.options[e.selectedIndex].value;
       if (strUser == 'Acolyte') {
           document.getElementById("bkgdFeats").innerHTML = "<strong>Skill Proficiencies:</strong> Insight, Religion.                       <p><strong>Equipment:</strong> A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp.</p>  <p><strong>Shelter of the Faithful:</strong> As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.</p>";
           document.getElementById("profTools").innerHTML = "None.";
           document.getElementById("profLang2").innerHTML = "Two of your choice.";
       } else if (strUser == 'Criminal') {
           document.getElementById("bkgdFeats").innerHTML = "<strong>Skill Proficiencies:</strong> Deception, Stealth.                      <p><strong>Equipment:</strong> A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp.</p>  <p><strong>Criminal Specialty:</strong> There are many kinds of criminals, and within a theives' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.</p>  <strong>d8 Specialty:</strong> 1 Blackmailer - 2 Burglar - 3 Enforcer - 4 Fence - 5 Highway Robber - 6 Hired Killer - 7 Pickpocket - 8 Smuggler. <p><strong>Criminal Contact:</strong> You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>";
           document.getElementById("profTools").innerHTML = "One type of gaming set, theives' tools.";
       }
   }

   var select = document.getElementById("raceDrop");

   var races = ["Human", "Variant Human"];

   for (var i = 0; i < races.length; i++) {
       var opt = races[i];
       var el = document.createElement("option");
       el.textContent = opt;
       el.value = opt;
       select.appendChild(el);
   }

   function getRaceTraits(eleme) {
       var e = document.getElementById("raceDrop");
       var strUser = e.options[e.selectedIndex].value;
       if (strUser == 'Human') {
           document.getElementById("raceFeats").innerHTML = "<strong>Ability Score Increase:</strong> Your ability scores each increase by 1.  <p><strong>Age:</strong> Humans reach adulthood in their late teens and live less than a century.</p>  <p><Strong>Alignment:</strong> Humans tend toward no particular alignment. The best and the worst are found among them.</p>  <p><strong>Size:</strong> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>  <p><strong>Languages:</strong> Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with w ords borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>";
           document.getElementById("profLang1").innerHTML = "You can speak, read, and write Common and one extra language of your choice.";

       } else if (strUser == 'Variant Human') {
           document.getElementById("raceFeats").innerHTML = "<strong>Ability Score Increase:</strong> Two different ability scores of your choice increase by 1.  <p><strong>Skills:</strong> You gain proficiency in one skill of your choice.</p>                     <p><Strong>Feats:</strong> You gain one feat of your choice.</p> <p><strong>Age:</strong> Humans reach adulthood in their late teens and live less than a century.</p>  <p><Strong>Alignment:</strong> Humans tend toward no particular alignment. The best and the worst are found among them.</p>  <p><strong>Size:</strong> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>  <p><strong>Languages:</strong> Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with w ords borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>";
           document.getElementById("profLang1").innerHTML = "You can speak, read, and write Common and one extra language of your choice.";
       }
   }
