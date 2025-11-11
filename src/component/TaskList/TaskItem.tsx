// import type {Task} from '../../types';

// interface TaskItemProps{
//     task:Task
//     onDelete:(id:string)=>void;
// }

// function TaskItem ({task, onDelete}: TaskItemProps) {
//     return(
//         <>
//          <div className="flex flex-col gap-5 text-xl border">
                   
//                     <h3 className="font-bold">{task.title}</h3>
//                     <p>Priority:{task.priority}</p>
//                     <p>Status: {task.status}</p>
//                     <p>Due Date: {task.dueDate}</p>
//                 </div>

//          <button onClick={()=> onDelete(task.id)}>Delete</button>     
//          </> 
//     )
// }

// export default TaskItem

import type {Task, TaskStatus} from '../../types';

interface TaskItemProps{
    task:Task
    onDelete:(id:string)=>void;
    // onUpdate:(id:string, updates:Partial<Task>)=>void
}

// const statusDropown: TaskStatus[]= ["pending", "in-progress", "completed"];

function TaskItem ({task, onDelete}: TaskItemProps) {
    // const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    //     const newStatus= e.target.value as TaskStatus
    //     onUpdate(task.id, {status: newStatus})
    
    
    return(
        <>
         <div className="flex flex-col gap-5 text-xl border">
                   
                    <h3 className="font-bold">{task.title}</h3>
                    <p>Priority:{task.priority}</p>
                    <p>Status: {task.status}</p>
                    <p>Due Date: {task.dueDate}</p>
                </div>
            {/* status seleter
         <select
         value={task.status}
         onChange={(handleStatusChange)}   
         >
            {statusDropown.map(s => (
                <option>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
                
            ))}
            </select> */}
         <button onClick={()=> onDelete(task.id)}>Delete</button>     
         </> 
    )
}

export default TaskItem