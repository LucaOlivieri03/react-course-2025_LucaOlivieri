
export function ItemButton(props: any) {

    let handleClick;

    if(props.typeButton === "remove"){
        handleClick = () => props.onRemove(props.item.id); 
    }else if(props.typeButton === "done"){
        handleClick = () => props.onChangeDone(props.item.id);
    }

   return(
    <button className={props.item.done?"button-done":""} onClick={handleClick}>{props.text}</button> 
   )
}
