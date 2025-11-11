import TaskItem from "./TaskItem";
import type { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  // Keep the signature that matches the handler defined in DashBoard
  // onFilterChange: (filters: {status: string; priority: 'low' | 'medium' | 'high' | ''}) => void;
  onDelete: (id: string) => void;
  // onUpdate:(id:string, updates: Partial<Task>) => void
}

function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-5">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div className="flex flex-col gap-5 text-xl border" key={task.id}>
              <TaskItem task={task} onDelete={onDelete} />
            </div>
          ))
        ) : (
          <p>No tasks found!</p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
