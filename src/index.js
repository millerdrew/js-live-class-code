/**
* Put your JavaScript here
*/

function onReady () {
  const addTodoForm = document.getElementById( 'addTodoForm');
  const todoList = document.getElementById( 'todoList');
  const newTodoText = document.getElementById( 'newTodoText');

  todoList.textContent = '';

  addTodoForm.addEventListener ( 'submit', () => {
    event.preventDefault();
    //TODO: get the input value
    const title = newTodoText.value;

    // TODO: drop it into the ul
    const newLi = document.createElement( 'li' );
    newLi.textContent = title;

    newLi.addEventListener( 'click', () => {
      newLi.classList.toggle( 'todo--complete' );
    });

    todoList.appendChild( newLi );

    newTodoText.value = '';
  });
}

if ( document.readyState !== 'loading' ) {
  onReady();
} else {
  document.addEventListener( 'DOMContentLoaded', onReady );
}
/*
document.body.onload = makeList;

let state = {
  todos: [
    { title: 'TODO ITEM', complete: false },
  ]
}

function makeList() {

  // create a new li elemment
  let newLi = document.createElement("li");
  newLi.textContent = state.todos[0].title;
  document.body.appendChild(newLi);

}

console.log( 'Open the dev console to see me. :-)' );

*/
