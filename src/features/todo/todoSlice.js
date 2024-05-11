import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "abc", task: "demoTask", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), //provide by redux to genrate id automaically itself
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo); //state ke andar todos ko acces kiya or todos me push kr diya newTodo ko
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                return todo.id === action.payload ? {...todo,isDone : true} : todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer; //issse hmare individul rducres hai vo export hoke aa jaate hai taaki hmm baad me compennets ke andr individual reducers ko use kr sken
