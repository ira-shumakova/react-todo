import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({todos, title, remove}) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            {todos.map((todo, index) => 
                <TodoItem remove={remove} number={index + 1} todo={todo} key={todo.id} />)}
        </div>
    )
}

export default TodosList;