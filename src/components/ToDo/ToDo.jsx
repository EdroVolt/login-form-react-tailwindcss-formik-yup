import { useState } from "react";
import { idGenerator } from "../../utils/helper.util";
import CreateTodo from "./CreateTodo/CreateTodo";
import TodoList from "./TodoList/TodoList";

const generateId = idGenerator(0);

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    setTodoList([
      ...todoList,
      { id: generateId(), title: task, isCompleted: false },
    ]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList([...newTodoList]);
  };

  const toggelCompletedTask = (id) => {
    const newTodoList = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTodoList([...newTodoList]);
  };

  return (
    <div className="container max-w-lg mx-auto p-1 md:p-0 rounded-md mt-5">
      <CreateTodo addTask={addTask} />
      {todoList.map((task) => {
        return (
          <TodoList
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggelCompletedTask={toggelCompletedTask}
          />
        );
      })}
    </div>
  );
}
