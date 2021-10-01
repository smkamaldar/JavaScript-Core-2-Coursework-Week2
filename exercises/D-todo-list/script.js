function todoList(todos) {
 const content=document.querySelector("#content");
 const ul = document.createElement("ul");
 todos.forEach(element => {
   const  li=document.createElement("li");
   li.innerText = element.todo ;
   ul.appendChild(li);
   content.appendChild(ul);
   li.addEventListener("click",()=>{
      if( li.style.textDecoration === "line-through"){
        li.style.removeProperty("text-decoration");
      }else{
        li.style.textDecoration = "line-through";
      }
   })
 });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);