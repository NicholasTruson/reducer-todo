// INITIAL STATE ARR //

export const initialState = [

    {
    item: 'Build Reducer ToDo',
    completed: false,
    id: 3892234589
  },

  {
    item: "Actually Know What I'm Doing",
    completed: false,
    id: 9872987581
  },

  {
    item: "Curse the code gods",
    completed: true,
    id: 8909487586
  },

 ];

// THE REDUCER //

export const toDoReducer = (state, action) => {

// SWITCH //

    switch (action.type) {

        // CASES //

        // MOD

        case 'MODIFY':
            return action.newArr;

            // CLICK COMPLETE

        case 'TOGGLE_COMPLETED':
            return state.map(item =>
                item.id === action.id
                ? { ...item, completed: !item.completed }
                : item
            );

            // CLEAR

        case 'CLEAR_COMPLETED':
            return state.filter(item => item.completed === false);

            // SUBMIT

        case 'HANDLE_SUBMIT':
            return [action.newValue, ...state];

            // RETURN STATE
            
        default:
            return state;

    }
}