// initial render to screen
TodoListStore.render();

// event handler for #todo-input
function addNewTodo(event) {
  if (event.key === 'Enter') {
    let newTodo = {
      id: null,
      content: event.target.value,
      isDone: false,
      mode: 'view',
    };

    // clear textbox
    event.target.value = "";
    TodoListStore.add(newTodo);
  }
}