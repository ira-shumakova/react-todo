import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TodoForm = ({create, title}) => {
    const [todo, setTodo] = useState({title: "", body: ""});

    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo, id: Date.now()
        }
        create(newTodo)
        setTodo({title: "", body: ""})
      };

    return (
        <form>
            <h2>{title}</h2>
            <MyInput 
                value={todo.title}
                onChange={ e => setTodo({...todo, title: e.target.value})}
                id="todoTitle"
                type="text" 
                placeholder="Title" 
            />
            <MyInput 
                value={todo.body}
                onChange={ e => setTodo({...todo, body: e.target.value})}
                id="todoDescription"
                type="text" 
                placeholder="Description" 
            />
            <MyButton onClick={addNewTodo}>Create</MyButton>
        </form>   
    );
};

export default TodoForm;