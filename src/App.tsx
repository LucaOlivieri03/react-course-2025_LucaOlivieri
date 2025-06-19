import { useRef, useState } from 'react'
import './App.css'
import { TodoItems } from './TodoItems';
import { NewTodoItem } from './NewTodoItem';

  const initialItems = [
    {id: 1, description: 'Carbon', done: false },
    {id: 2, description: '3kg de Carne', done: false },
    {id: 3, description: 'Pan', done: false },
  ];

function App() {

  const lastId2 = useRef(100);
  const [items, setItems] = useState(initialItems);
  const [lastId, setLastId] = useState(100);
  function addItem(description: string) {
    const newItem = {
      id: lastId2.current,
      done: false,
      description: description
    };
    lastId2.current++;
    setItems([...items, newItem ]);
    console.log(items);
  }

  function remove(id: number) {
    setItems(items.filter(each => each.id !== id));
  }

return (
<div className="main">
      <NewTodoItem onAdd={addItem}/>   
       <TodoItems items={items} onRemove={remove}/>

</div>
  )
}


export default App