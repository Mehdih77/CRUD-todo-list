import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
    deletedTodos: []
})

export const {
    selectTotal : todosCount,
    selectAll : selectTodosEntities // select todos like Array
} = todosAdapter.getSelectors(state => state.todos);

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: todosAdapter.addOne,
        addTodos: todosAdapter.addMany,
        deleteTodo(state,action) {
            state.deletedTodos.push(state.entities[action.payload]); // for add it To Deleted Todos List
            todosAdapter.removeOne(state,action);
        },
        clearTodos: todosAdapter.removeAll,
        updateTodo: todosAdapter.updateOne,
        restoreTodo(state,action) {
            todosAdapter.addOne(state,action); // for add it again to Todos
            state.deletedTodos = state.deletedTodos.filter( (item) => 
                item.id !== action.payload.id) // for remove todo from Deleted Todos List
        }
    }
});

export const {
    addTodo,
    addTodos,
    deleteTodo,
    clearTodos,
    updateTodo,
    restoreTodo,
} = todosSlice.actions;

export default todosSlice.reducer;