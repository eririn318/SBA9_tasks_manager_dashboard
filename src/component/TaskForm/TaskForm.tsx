import { useState } from "react";
import type { Task, TaskStatus, TaskPriority } from "../../types";

interface TaskFormProps {
  onSubmit: (newTask: Task) => void;
}

const statusDropown: TaskStatus[] = ["pending", "in-progress", "completed"];
const priorityDropdown: TaskPriority[] = ["low", "medium", "high"];

function TaskForm({ onSubmit }: TaskFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending" as TaskStatus,
    priority: "medium" as TaskPriority,
    dueDate: new Date().toISOString().split("T")[0],
  });

  //to handle all input types(input,textarea,select)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //prevent empty tasks
    if (!formData.title.trim()) {
      console.log("Title is required!");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(), //simple unique ID
      title: formData.title, //Default title
      description: formData.description, //Default description
      status: formData.status, //Default status
      priority: formData.priority, //Default priority
      dueDate: formData.dueDate, //Default date
    };

    onSubmit(newTask);
    //reset form data to default values after submission
    setFormData({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form
      className="flex flex-col gap-4 mt-10 border-1 rounded-md text-center py-10"
      onSubmit={handleSubmit}
    >
      {/* title input */}
      <div>
        <input
          className="border-1 rounded-l-md border-white-500 text-black pl-2"
          type="text"
          placeholder="Add new task"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* Description Textarea */}
      <div>
        <textarea
          className="border-1 rounded-l-md border-white-500 text-black pl-2"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={2}
        />
      </div>

      {/* status Select */}
      <div>
        <select
          className="border-1 rounded-l-md border-white-500 text-black pl-2"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          {statusDropown.map((s) => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* priority select    */}
      <div>
        <select
          className="border-1 rounded-l-md border-white-500 text-black pl-2"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          {priorityDropdown.map((p) => (
            <option key={p} value={p}>
              {p.charAt(0).toUpperCase() + p.slice(1)}{" "}
            </option>
          ))}
        </select>
      </div>

      {/* Due Date Input */}
      <div>
        <input
          className="border-1 rounded-l-md border-white-500 text-black pl-2"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      <button
        className="border-1 rounded-md border-white-500 text-black px-2 w-50 ml-35"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}
export default TaskForm;
