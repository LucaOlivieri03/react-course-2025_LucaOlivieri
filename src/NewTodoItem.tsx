import { useState } from "react";

export function NewTodoItem(props: any) {

    const [description, setDescription] = useState('');
    return (
    <div className="header">
        <label htmlFor="todoInput">Todo: </label>
        <input 
            type="text" 
            id="todoInput"
            onChange={(anEvent) => setDescription(anEvent.target.value)}
            value={description}
            />
        <button onClick={() => props.onAdd(description)}>+</button>
  </div>
    )
}