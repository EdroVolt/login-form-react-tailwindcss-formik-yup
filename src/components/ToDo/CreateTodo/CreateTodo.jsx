import { useState } from "react";

export default function CreateTodo({ addTask }) {
  const [task, setTask] = useState("");
  return (
    <section className="bg-blue-500 border-l-4 border-l-red-400 text-2xl mb-5  text-white p-3 rounded-sm">
      <h1 className="tracking-widest">✒️ TO-DO App</h1>
      <div className="add-section mt-4">
        <label htmlFor="add-todo" className="text-xs">
          Add new To-Do
        </label>
        <input
          name="add-todo"
          id="add-todo"
          placeholder="Enter new Task ..."
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-1 rounded-sm text-sm placeholder:italic placeholder:text-slate-400 w-full text-yellow-600"
        />
      </div>

      <button
        onClick={() => addTask(task)}
        className="bg-red-400 py-1 px-5 rounded-sm  text-xs  hover:bg-red-500 hover:shadow-sm active:bg-red-600"
      >
        Add
      </button>
    </section>
  );
}
