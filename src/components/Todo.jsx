import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos)
    console.log(todos);

    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id)
        dispatch(deleteTodo(id))
    }

    const markDone = (id) => {
        console.log("mark as done ", id)
        dispatch(markAsDone(id))
    };

    let donStyle={
        textDecorationLine:"line-through"
    }


    return (
        <>
            <h3>Todo List App</h3>
            <AddForm />
            <ul>{todos.map((todo) =>
                (<li key={todo.id}>
                    {todo.isDone ? (<span style={donStyle}>{todo.task}</span>
                    ):(<span>{todo.task}</span>)}
                <button onClick={() => clickHandler(todo.id)}>delete</button>
                <button onClick={() => markDone(todo.id)}>Mark as done</button></li>))}
            </ul>
        </>
    )
}