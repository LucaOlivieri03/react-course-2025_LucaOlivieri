import { ToDoSingleItem } from "./ToDoSingleItem";

export function TodoItems(props: any) {

    return (
        <div className="items">
            {props.items.map((each:any) => (
                <ToDoSingleItem item={each} onRemove={props.onRemove} onChangeDone={props.onChangeDone} key={each.id}/>
            ))}
        </div>
    );
}