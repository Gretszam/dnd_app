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
