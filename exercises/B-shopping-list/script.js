function shoppingList(arrayOfItems) {
  const content=document.querySelector("#content");
  const ul=document.createElement("ul");
  shopping.forEach(item=>{
    const li=document.createElement("li");
    li.innerText= item;
    ul.appendChild(li);
  })
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
