// IMPORTS //

import React, { useReducer } from 'react';
import TodoForm from './Components/ToDoForm';
import  TodoList from './Components/ToDoList';
import {initialState, toDoReducer } from './reducers/reducer';
import './App.css';

// APP FUNCTION //

function App() {

  const [state, dispatch] = useReducer(toDoReducer, initialState)

  return (

// DISPATCH DATA FROM REDUCER

    <div className="App"> 

      <header className="App-header">
        

        <TodoList dispatch={dispatch} data={state} />
        <TodoForm dispatch={dispatch} />

      </header>

    </div>
  );
}


export default App;