// IMPORTS //

import React from 'react';
import Todo from './ToDo';

// TODO LIST //

const TodoList = props => {

// DATA MAP & DISPATCH FROM REDUCER //

  return (
    <div className="todo-list">
      {props.data.map(item => (
        <Todo 
        dispatch = {props.dispatch}
        key = {item.id}
        data = {item}
        id = {item.id}
         />
      ))}

    </div>
  );
};

export default TodoList;