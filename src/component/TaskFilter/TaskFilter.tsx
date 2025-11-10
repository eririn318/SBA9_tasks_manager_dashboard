import type {Task} from '../../types'
import {useState} from 'react'
import type {TaskPriority} from '../../types';
import TaskList from '../TaskList/TaskList';


export interface TaskFilterProps {
    onFilterChange: (filters: {
        status: string;
        priority:TaskPriority| 'low' | 'medium' | "high" | '';
    }) => void;
}

function TaskFilter({onFilterChange}: TaskFilterProps) {
    const [filters, setFilters] =useState({
        status: '',
        priority: '',
    })
    

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const{name, value}= e.target;
        setFilters(prev => ({...prev, [name]: value}));

        const newFilter = {
            ...filters,
            [name]: value
        }
        setFilters(newFilter)
        onFilterChange(newFilter as {status: string, priority: TaskPriority | ''})
    }

    return(
        <div className="my-10 border p-5 rounded flex gap-10">
            <select name='status' onChange={handleChange} value={filters.status} className="bg-[#A3B087]">
                <option value=''>All</option>
                <option value='pending'>Pending</option>
                <option value='in-progress'>In progress</option>
                <option value='completed'>Completed</option>
            </select>

            <select name="priority" onChange={handleChange} value={filters.priority} className="bg-[#A3B087]">
                <option value=''>All</option>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>

            {/* {tasks.filter((item)=> {
                return search.toLowereCase()==='' ? item:item.title.toLowerCase().includes(search);

            }).map((item)=> (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td>{item.priority}</td>
                    <td>{item.dueDate}</td>
                </tr>

          ))} */}

        </div>
    )
}

export default TaskFilter