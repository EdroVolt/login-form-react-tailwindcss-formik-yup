import "./todoList.css";

export default function TodoList({ task, deleteTask, toggelCompletedTask }) {
  const { id, title, isCompleted } = task;

  return (
    <div className="slide-in-elliptic-top-fwd bg-green-500 border-l-4 border-l-red-400 text-white mt-2 p-3 rounded-sm grid grid-cols-12 gap-2">
      <div className="col-span-10">
        <p className={isCompleted ? "line-through" : ""}>{title}</p>
      </div>

      <div className="col-span-1 delete-icon">
        <img
          src="./icons/trash-can.png"
          style={{
            width: "1.5rem",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => deleteTask(id)}
          className="shadow-lg bg-white hover:bg-slate-200 active:bg-slate-100 hover:cursor-pointer"
          alt=""
        />
      </div>

      <div className="col-span-1">
        <img
          src={isCompleted ? "./icons/undo.png" : "./icons/accept.png"}
          style={{
            width: "1.5rem",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={() => toggelCompletedTask(id)}
          className="shadow-lg bg-white hover:bg-slate-200 active:bg-slate-100 hover:cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}
