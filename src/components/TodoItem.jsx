import React from "react";
import MyButton from "./UI/button/MyButton";

const TodoItem = (props) => {
    return (
        <div className="todo">
            <div className="todo__name">
                <strong>{props.number}. {props.todo.title} </strong>
                <div>
                    {props.todo.body}
                </div>
            </div>
            <div className="todo__btns">
                <MyButton onClick={() => props.remove(props.todo) }>Delete</MyButton>
            </div>
        </div>
    );
};

export default TodoItem;