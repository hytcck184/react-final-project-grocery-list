import React, { useState } from 'react';
import Forms from './Forms';
import Grocery from './Grocery';

function Lists() {
  const [lists, setLists] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...lists];

    setLists(newTodos);
    console.log(...lists);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setLists(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...lists].filter(todo => todo.id !== id);

    setLists(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = lists.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setLists(updatedTodos);
  };

  return (
    <div className='box'>
      <h1>What do you need to get?</h1>
      <Forms onSubmit={addTodo} />
      <Grocery
        lists={lists}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Lists;
// Setting Id incrementally, zero to infinite instead of having random number in a range:

//     const [id, setId] = useState(0);
//     const giveId=()=>{
//         setId(id + 1)
//         return id;
//     }

//     const handleSubmit = (e)=> {
//         e.preventDefault();

//         props.onSubmit({
//             id: giveId(),
//             text:input
//         });
//          setInput("");

//     };