function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? "未完了" : "完了"}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>タスク削除</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
