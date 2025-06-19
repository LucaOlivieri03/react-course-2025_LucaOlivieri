export function TodoItems(props: any) {

    return (
        <div className="items">
            {props.items.map( (each: any) => {
                return ( <div className="todo-item">
                            {each.description} <button onClick={() => props.onRemove(each.id)} >X</button>
                        </div>)
            })}
  </div>
    )
}