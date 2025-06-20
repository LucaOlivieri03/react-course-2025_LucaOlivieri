import { useState } from "react";

export function NewTodoItem(props: any) {

    const [description, setDescription] = useState('');
    return (
    <div className="header">
        <label htmlFor="todoInput">Todo: </label>
        <input 
            className="header-input"
            placeholder="Agrega un item"
            type="text" 
            id="todoInput"
            onChange={(anEvent) => setDescription(anEvent.target.value)}
            value={description}
            />
        <button onClick={() => {
            props.onAdd(description);
            setDescription('');}}>+</button>
  </div>
    )
}