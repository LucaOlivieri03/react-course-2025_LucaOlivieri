import { ItemButton } from "./ItemButton";


export function ToDoSingleItem(props: any) {

    
    function formattedDate(date:Date):string{
        const d: string = String(date.getDate()).padStart(2, '0');
        const m: string = String(date.getMonth() + 1).padStart(2, '0');
        const y: number = date.getFullYear();
        const formattedDate = `${d}/${m}/${y}`;
        return formattedDate;
    }

    return (
        <div className="todo-item">
            <div className="todo-item-description">
            <p className={props.item.done?"done":""}>{props.item.description}</p> 
            <div className="todo-item-buttons">
            <ItemButton text="x" item={props.item} typeButton="remove" onChangeDone={props.onChangeDone} onRemove={props.onRemove}/>
            <ItemButton text={props.item.done?"undone":"done"} item={props.item} typeButton="done" onChangeDone={props.onChangeDone} onRemove={props.onRemove}/>
            </div>
            </div>
            <div className= "todo-item-date">
                <span className="date">Fecha creación:{formattedDate(props.item.creationDate)}</span>
                {props.item.done && <span className="date"> Fecha finalización: {formattedDate(props.item.completionDate)}</span>}
            </div>
        </div>
    );
}
