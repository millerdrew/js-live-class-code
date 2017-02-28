let todos = [
  // your initial todos
  { title: 'Dishes', complete: false },
  { title: 'Laundry', complete: false },
  { title: 'Vacuuming', complete: false},
  { title: 'Making the bed', complete: false},
  { title: 'Budgeting', complete: false}
];

function createNewTodo ( title ) {
  todos.push({
    title,
    complete: false,
  });

  // The "state" changed, so re-draw the UI
  renderTheUi( todos );
}

function renderTheUi ( todos ) {
  // TODO: using the todos, draw out the UI
  const addTodoForm = document.getElementById( 'addTodoForm' );
  const todoList = document.getElementById( 'todoList' );
  const newTodoText = document.getElementById( 'newTodoText' );

  // <ul></ul>
  todoList.textContent = '';

  for (let x = 0; x < todos.length; x++){
    // add it to the list
    // create an li
    // <li>{title}</li>
    const newLi = document.createElement( 'li' );
    newLi.textContent = todos[x].title; // vs newLi.innerHTML

    newLi.addEventListener( 'click', () => {
      newLi.classList.toggle( 'todo--complete' );
    });
    todoList.appendChild( newLi );
  }
}

function onReady () {

  // Draw the UI the first time
  renderTheUi( todos );

  addTodoForm.addEventListener( 'submit', event => {
    event.preventDefault(); //keeps page from refreshing
    const title = newTodoText.value;

    createNewTodo(title);

    newTodoText.value = '';
  });
}

if ( document.readyState !== 'loading' ) {
  onReady();
} else {
  document.addEventListener( 'DOMContentLoaded', onReady );
}
