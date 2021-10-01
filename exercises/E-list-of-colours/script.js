function listOfColours(colours) {
const content=document.querySelector("#content");
const select = document.createElement("select");

colours.forEach(colour =>{
  const option=document.createElement("option");
  option.innerText=colour;
  select.appendChild(option);
})

select.addEventListener("change",()=>{
  const p= document.createElement("p");
  p.innerText = "You have selected:"+ select.value ;
  p.style.backgroundColor = select.value;
  // inorder to remove the current p and replace it with new one, instead of adding new p tag under one another.
  //  i know that getElementByTagName give me an htmlcollection.so I have an array
  // to check whether there is any item in my array or not then do proper job.
    let existingP= content.getElementsByTagName("p");
  if(existingP.length){
    content.removeChild(existingP[0]);
  }
  content.appendChild(p);
})
content.appendChild(select)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
