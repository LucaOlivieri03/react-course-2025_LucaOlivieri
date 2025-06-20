import { useRef, useState, useEffect } from 'react'
import './App.css'
import { TodoItems } from './TodoItems';
import { NewTodoItem } from './NewTodoItem';
import type {TodoItem} from './interfaces'; 
import { ItemCount } from './ItemCount';

  const initialItems: TodoItem[] = [
    {id: 1, description: 'Carbon', done: false, creationDate: new Date(), completionDate: undefined },
    {id: 2, description: '3kg de Carne', done: false, creationDate: new Date(), completionDate: undefined },
    {id: 3, description: 'Pan', done: false, creationDate: new Date(), completionDate: undefined },
  ];

function App() {

  const lastId2 = useRef(4);
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    console.log("Items actualizados:", items);
  }, [items]);

  function addItem(description: string) {
    const newItem = {
      id: lastId2.current,
      done: false,
      description: description,
      creationDate: new Date(),
      completionDate: undefined      
    };
    lastId2.current++;
    setItems([...items, newItem ]);
  }

  function remove(id: number) {
    setItems(items.filter(each => each.id !== id));
  }

  function ChangeDone(id: number) {
    setItems(items.map(each=>{
      if (each.id === id) {
        return {...each, 
          done: !each.done, 
          completionDate: !each.done?new Date() : undefined};
      }
      return each;
    }))
  }

return (
<div className="main">
  <div className="todo-List">
    <NewTodoItem onAdd={addItem}/>   
    <TodoItems items={items} onRemove={remove} onChangeDone={ChangeDone}/>
  </div>
  <ItemCount items={items}/>
</div>
  )


}


export default App