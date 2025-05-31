import { useState } from "react";
 import { v4 as uuidv4 } from "uuid";
 function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const addTodo = () => {
        if (!task.trim()) return;
        setTodos([...todos, { id: uuidv4(), text: task, completed: false }]);
        setTask("");
    };
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo×id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo×id !== id));
    };
    return (
        <div>
            <h2>To-Do List</h2>
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => toggleComplete(todo.id)}> </button>
                        <button onClick={() => removeTodo(todo.id)}> </button>
                    </li>
                ))}
            </ul>
        </div>
    );
 }
 export default TodoList;
