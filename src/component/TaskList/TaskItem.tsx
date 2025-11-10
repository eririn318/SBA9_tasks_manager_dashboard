import type {Task} from '../../types';

interface TaskItemProps{
    task:Task
    onDelete:(id:string)=>void;
}

function TaskItem ({task, onDelete}: TaskItemProps) {
    return(
        <>
         <div className="flex flex-col gap-5 text-xl border">
                   
                    <h3 className="font-bold">{task.title}</h3>
                    <p>Priority:{task.priority}</p>
                    <p>Status: {task.status}</p>
                    <p>Due Date: {task.dueDate}</p>
                </div>

         <button onClick={()=> onDelete(task.id)}>Delete</button>     
         </> 
    )
}

export default TaskItem