// IMPORTS //

import React from 'react';

// TODO //

const Todo = props => {

  let className = props.data.completed ? 'active' : '';

  return (

    // TOGG_COMPLETED R -> DISPATCH

    <h4
      className={className}
      data-roll={props.data.completed}
      onClick={() =>
      props.dispatch({
        type: 'TOGGLE_COMPLETED',
        id: props.data.id
      })
    }
    >{props.data.item}</h4>
    

  );
};

export default Todo;