/*
in populateTodoList function I loop over my todos list array and 
create my li elemets with all children elements(span i..) and
finally append them to ul. 
so we can see our todo on screen.next
I started working on creating new todo,my approach is
to add todo to my todos list and then refreshing my  populateTodoList function
inorder to rerender my list.in this case new item will be added to the screen.

*/
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // adding this line : beacuse I need to delete the previouse items
  // before adding new todos
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    li.innerText = todo.task;
    // if I set innerHTML equal to the rest, it will overwrite the text
    // so to prevent that I append it to text.
    li.innerHTML +=
      '<span class="badge bg-primary rounded-pill"><i class="fa fa-check" onclick="toggleCompleted(event)" aria-hidden="true"></i><i class="fa fa-trash" onclick="deleteTodo(event)" aria-hidden="true"></i> </span>';
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }
    list.appendChild(li);
  });
}

//this function will change the compeleted status for the correspondent todo.
// in order to make this function work first we need to find out which todo
// has been clicked. the simple way is finding the value of i through the event
// then finding that item in todos list as simple as checking task property
// when we found it we just needed to toggle value of completed property
function toggleCompleted(event) {
  const task = event.target.parentElement.parentElement.textContent.trim();
  todos = todos.map((todo) => {
    if (todo.task === task) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  populateTodoList(todos);
}

function deleteTodo(event) {
  const task = event.target.parentElement.parentElement.textContent.trim();
  todos = todos.filter((todo) => {
    if (todo.task === task) {
      // it means we dont need that item,when we  are returning false
      return false;
    } else {
      // it means we need this item,when we are returning true.
      return true;
    }
  });
  populateTodoList(todos);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const input = document.querySelector("form input");
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  // I need to get the value of my inputBox,then I have to make a new object
  // to add it to my todo list.
  const newTodo = { task: input.value, completed: false };
  todos.push(newTodo);
  // now I need to call populateTodoList beacuse
  // it needs to regenerate the list to show new todos which I have
  // recently added to todos list.
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  event.preventDefault();
  todos = todos.filter((todo) => {
    if (todo.completed) {
      return false;
    } else {
      return true;
    }
  });
  populateTodoList(todos);
}
