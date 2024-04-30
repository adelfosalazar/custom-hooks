import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer';

const init = ()=> {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = ( initialState ) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    
    }, [todos])
    
    const handleOnNewTodo = ( todo ) => {
        console.log({todo});

        const action = {
            type: "AddTodo",
            payload: todo
        }
        
        dispatch(action);
    }

    const handleOnDeleteTodo = ( id ) => {
        console.log(id);

        dispatch({
            type: "DeleteTodo",
            payload: id
        });
    }

    const handleOnToggleTodo = ( id ) => {
        dispatch({
            type: "ToggleTodo",
            payload: id
        });
    }

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodos = () => {
        return todos.filter(todo => !todo.done).length;
    }

    return {
        todos,
        handleOnNewTodo,
        handleOnDeleteTodo,
        handleOnToggleTodo,
        // todosCount: todosCount(),
        // pendingTodos: pendingTodos()
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length
    }
}
