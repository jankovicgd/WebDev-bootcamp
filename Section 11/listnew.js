var todos = ["Buy new turtle"];

var input = prompt("What would you like to do");

while (input != "quit") {

  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  var input = prompt("What would you like to do");
}
console.log("You quit the app");

function listTodos(){
  console.log("**************");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  })
  console.log("**************");
}

function addTodo(){
  var newTodo = prompt("enter new todo");
  todos.push(newTodo);
  console.log("Added Todo")
}

function deleteTodo(){
  var inputIdx = prompt("Index of list element?");
  todos.splice(inputIdx, 1);
  console.log("Deleted Todo")
}
