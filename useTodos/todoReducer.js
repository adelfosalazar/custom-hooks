import React from 'react'

export const todoReducer = ( initialState = [], action) => {

    switch (action.type) {
        case "AddTodo":
            return [...initialState, action.payload];
        case 'DeleteTodo':
            return initialState.filter( todo => todo.id !== action.payload);
        case 'ToggleTodo':
            return initialState.map( todo => {

                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        default:
            return initialState;
    }
}