    function addItem() {
        var ul = document.getElementById("dynamic-list");
        var inventory = document.getElementById("inventory");
        var li = document.createElement("li");
        li.setAttribute('id', inventory.value);
        li.appendChild(document.createTextNode(inventory.value));
        ul.appendChild(li);
    };

    function removeItem() {
        var ul = document.getElementById("dynamic-list");
        var inventory = document.getElementById("inventory");
        var item = document.getElementById(inventory.value);
        ul.removeChild(item);
    };

    let character = {
        name: "",
        ac: 10,
        int: 0,
        speed: 30,
    };

    character.name = "Blob";
    character.ac = 12;
    character.int = 2;

    $(document).ready(() => {
        $output = $("#output");
        $output.append(
            $("<p></p>").text(character.name),
            $("<p></p>").text("AC: " + character.ac),
            $("<p></p>").text("Initiative: " + character.int),
            $("<p></p>") text.("Speed: " + character.speed),
        );
    });
