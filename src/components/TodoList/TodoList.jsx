import { useDispatch, useSelector } from "react-redux";
import { clearTodos, restoreTodo, selectTodosEntities, todosCount } from "../../redux/todosSlice";
import Todo from './Todo';

export default function TodoList() {

    const count = useSelector(todosCount);
    const allTodos = useSelector(selectTodosEntities);
    const deletedTodosItem = useSelector(state => state.todos.deletedTodos);
    const dispatch = useDispatch();

    // clear all todos
    const clearItems = () => {
        dispatch(clearTodos());
    }

    const todoList = allTodos.map(todo => (
        <Todo
        id={todo.id}
        complete={todo.complete}
        text={todo.text}
        key={todo.id} 
        />
    ));

    const restore = (todo) => {
        dispatch(restoreTodo(todo))
    }

    const deletedTodosList = deletedTodosItem.map(item => (
        <div className="deleted-todo" key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => restore(item)}>Restore</button>
        </div>
    ));


    return (
        <div className='todo-list'>
            <h3>Your Todos:</h3>
            <h4>Count: {count}</h4>
            <button onClick={clearItems} className='delete-btn'>Clear All Todos</button>
            <div>{todoList}</div>
            <h3>Deleted Todos</h3>
            <div>{deletedTodosList}</div>
        </div>
    )
}
