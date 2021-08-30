import {useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todosSlice";

export default function Todo({ id, complete, text }) {
    const dispatch = useDispatch();

    // change todos complete
    const toggle = () => {
        dispatch(
            updateTodo({
                id,
                completeChanges: { complete: !complete}
            })
        )
    };

    // delete one single todo
    const deleteItem = () => {
       dispatch(deleteTodo(id))
    };

    return (
        <div className='todo'>
            <input type="checkbox" value={complete} onChange={toggle}/>
            <span>{text}</span>
            <button onClick={deleteItem}>x</button>
        </div>
    )
}
