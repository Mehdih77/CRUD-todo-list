import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({deletedTodos: []})

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
        deleteTodo: todosAdapter.removeOne,
        clearTodos: todosAdapter.removeAll,
        updateTodo: todosAdapter.updateOne,
    }
});

export const {
    addTodo,
    addTodos,
    deleteTodo,
    clearTodos,
    updateTodo
} = todosSlice.actions;

export default todosSlice.reducer;