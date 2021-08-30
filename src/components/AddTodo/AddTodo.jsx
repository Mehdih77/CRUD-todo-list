import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/todosSlice";

export default function AddTodo() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submit = () => {
        if (text.length > 0) {
            const items = text.split(','); // for separating text items
            dispatch(
                addTodos(
                    items.map(item => ({
                        id: nanoid(),
                        text: item,
                        complete: false
                    }) )
                )
            )

        }
        setText('')
    };

    return (
        <div className='add-todo'>
            <p>To add multiple items write them comma seprated</p>
            <p>
                <i>eg: Eggs, Bread, Ham, Cheese</i>
            </p>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={submit}>Add Todo</button>
        </div>
    )
}
