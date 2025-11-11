// import TaskItem from "./TaskItem";
// import TaskFilter from "../TaskFilter/TaskFilter";
// import type {Task} from "../../types"
 
// // type TaskFilters = {
// //   status: Task;
// //   priority: "low" | "medium" | "high"
// // }

// // interface TaskListProps{
// //     tasks:Task[]
// //     onFilterChange: (filter: TaskFilters) => void
// // }

// interface TaskListProps {
//   tasks: Task[]; 
//   // Keep the signature that matches the handler defined in DashBoard
//   onFilterChange: (filters: {status: string; priority: 'low' | 'medium' | 'high' | ''}) => void; 
//   onDelete: (id: string) => void
// }

// function TaskList({tasks, onDelete}: TaskListProps) {
//     return (
//       <div className="my-5">
//         {/* <h2 className="text-3xl my-5">Task List</h2> */}
//         <div className="flex flex-col gap-5">
    

//    {tasks.length > 0 ? (
//             tasks.map(task => (
//                 <div className="flex flex-col gap-5 text-xl border" key={task.id} >
//                    <TaskItem task={task} key={task.id} onDelete={onDelete} />
//                     {/* <h3 className="font-bold">{task.title}</h3>
//                     <p>{task.description}</p>
//                     <p>Status: {task.status}</p>
//                     <p>Due Date: {task.dueDate}</p> */}
//                 </div>
//             ))
//           ):(
//             <p>No tasks found!</p>
//           )}
         
//         </div>
//       </div>
//     );
//   }

//   export default TaskList;

import TaskItem from "./TaskItem";
import type {Task} from "../../types"
 
// type TaskFilters = {
//   status: Task;
//   priority: "low" | "medium" | "high"
// }

// interface TaskListProps{
//     tasks:Task[]
//     onFilterChange: (filter: TaskFilters) => void
// }

interface TaskListProps {
  tasks: Task[]; 
  // Keep the signature that matches the handler defined in DashBoard
  // onFilterChange: (filters: {status: string; priority: 'low' | 'medium' | 'high' | ''}) => void; 
  onDelete: (id: string) => void
  // onUpdate:(id:string, updates: Partial<Task>) => void
}

function TaskList({tasks, onDelete}: TaskListProps) {
    return (
      <div className="my-5">
        <div className="flex flex-col gap-5">
        {/* <TaskFilter onFilterChange={onFilterChange} /> */}

   {tasks.length > 0 ? (
            tasks.map(task => (
                <div className="flex flex-col gap-5 text-xl border" key={task.id} >
                   <TaskItem task={task} onDelete={onDelete} />
                    {/* <h3 className="font-bold">{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <p>Due Date: {task.dueDate}</p> */}
                </div>
            ))
          ):(
            <p>No tasks found!</p>
          )}
         
        </div>
      </div>
    );
  }

  export default TaskList;