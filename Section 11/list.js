var todos = ["Buy new turtle"];

var input = prompt("What would you like to do");

while (input != "quit") {

  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("enter new todo");
    todos.push(newTodo);
  }
  var input = prompt("What would you like to do");
}
console.log("You quit the app");
