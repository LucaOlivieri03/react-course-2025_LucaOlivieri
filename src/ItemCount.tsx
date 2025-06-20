export function ItemCount(props:any){

    const pendingCount = props.items.filter((each) => !each.done).length;
    const completedCount = props.items.filter((each) => each.done).length;

    return(
        <div className="item-count">
            <div className="item-count__text">Tareas Totales: {props.items.length}</div>
            <div className="item-count__text">Pendientes: {pendingCount}</div>
            <div className="item-count__text">Terminadas: {completedCount}</div>
        </div>
    )
}