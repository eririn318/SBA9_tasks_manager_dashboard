// import type {Task} from '../../types'
// import {useEffect, useState} from 'react'
// import type {TaskPriority} from '../../types';

// export interface TaskFilterProps {
//     onFilterChange: (filters: {
//         status: string;
//         priority:TaskPriority| 'low' | 'medium' | "high" | '';
//         searchBar: string;
//     }) => void;
//     currentSearchBar: string;//for search input field
// }

// function TaskFilter({onFilterChange, currentSearchBar}: TaskFilterProps) {
//     const [filters, setFilters] =useState({
//         status: '',
//         priority: '',
//     })
    
//     const [search, setSearch] = useState(currentSearchBar);

//     //syncronize local state when external state(currentSearchBar) changes
//     useEffect(()=> {
//         setSearch(currentSearchBar)
//     }, [currentSearchBar])

//     const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
//         const{name, value} = e.target;

//         const newFilters = {
//             ...filters,
//             [name]: value
//         }
//         setFilters(newFilters);
//         onFilterChange({...newFilters, seachBar: search} as {status:string, priority: TaskPriority | '', searchBar: string})
//     }

//         //handlechanges to the search input
//         const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//             const newSearch = e.target.value;
//             setSearch(newSearch)
//             //pass all filter values, including new seach, to Dashboard
//             onFilterChange({...filters, searchBar: newSearch} as {status: string, priority: TaskPriority | '', searchBar: string})
//         }

//     // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     //     const{name, value}= e.target;
//     //     setFilters(prev => ({...prev, [name]: value}));

//     //     const newFilter = {
//     //         ...filters,
//     //         [name]: value
//     //     }
//     //     setFilters(newFilter)
//     //     onFilterChange(newFilter as {status: string, priority: TaskPriority | ''})
//     // }

//     return(
//         <div className="my-10 border p-5 rounded flex gap-10">
//             {/* search bar */}
//             <div className="border1 border-black">
//                 <input
//                 type="text"
//                 placeholder="search tasks by title"
//                 value={search}
//                 onChange={handleSearchChange}
//                 />
//             </div>

//               {/* status dropdown */}
//             <select name='status' onChange={handleSearchChange} value={filters.status} className="bg-[#A3B087]">
//                 <option value=''>All</option>
//                 <option value='pending'>Pending</option>
//                 <option value='in-progress'>In progress</option>
//                 <option value='completed'>Completed</option>
//             </select>
//                 {/* priority dropdown */}
//             <select name="priority" onChange={handleSearchChange} value={filters.priority} className="bg-[#A3B087]">
//                 <option value=''>All</option>
//                 <option value='low'>low</option>
//                 <option value='medium'>medium</option>
//                 <option value='high'>high</option>
//             </select>

//             {/* {tasks.filter((item)=> {
//                 return search.toLowereCase()==='' ? item:item.title.toLowerCase().includes(search);

//             }).map((item)=> (
//                 <tr key={item.id}>
//                     <td>{item.title}</td>
//                     <td>{item.description}</td>
//                     <td>{item.status}</td>
//                     <td>{item.priority}</td>
//                     <td>{item.dueDate}</td>
//                 </tr>

//           ))} */}

//         </div>
//     )
// }

// export default TaskFilter


import {useState, useEffect} from 'react'
import type {TaskPriority} from '../../types';



export interface TaskFilterProps {
    onFilterChange: (filters: {
        status: string;
        priority:TaskPriority| 'low' | 'medium' | "high" | '';
        searchBar:string
    }) => void;
    //prop to control the search input value
    currentSearchBar:string
}

function TaskFilter({onFilterChange, currentSearchBar}: TaskFilterProps) {
    const [filters, setFilters] =useState({
        status: '',
        priority: '',
    })
    
    const [search, setSearch] =useState(currentSearchBar)
    //synchronized with the parent's state
    useEffect(()=> {
        setSearch(currentSearchBar)
    },[currentSearchBar])


    //handle changes to dropdowns(status and priority)
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const{name, value}= e.target;
        setFilters(prev => ({...prev, [name]: value}));

        const newFilter = {
            ...filters,
            [name]: value
        }
        setFilters(newFilter)
        onFilterChange({...newFilter, searchBar: search} as {status: string, priority: TaskPriority | '', searchBar: string})
    }

    //handle changes to the search input(title search)
    const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newSearch=e.target.value
        setSearch(newSearch)
        //pass all filter values, including the new search term, to Dashboard.tsx
        onFilterChange({...filters, searchBar: newSearch} as {status: string, priority:TaskPriority |'', searchBar: string})
    }
    return(
        <div className="my-10 border p-5 rounded flex gap-10">
            {/* search bar */}
            <div>
                <input className="bg-[#A3B087] text-center"
                type="text"
                placeholder='Search tasks by title'
                value={search}
                onChange={handleSearchChange} />
            </div>
            {/* status dropdown */}
            <select name='status' onChange={handleChange} value={filters.status} className="bg-[#A3B087]">
                <option value=''>All</option>
                <option value='pending'>Pending</option>
                <option value='in-progress'>In progress</option>
                <option value='completed'>Completed</option>
            </select>
            {/* priority dropdown */}
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