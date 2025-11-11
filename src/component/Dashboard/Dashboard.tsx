// import TaskList from "../TaskList/TaskList";
// import type { Task } from "../../types";
// import TaskFilter from "../TaskFilter/TaskFilter";
// import TaskForm from "../TaskForm/TaskForm";
// import { useState, useMemo } from "react";


// interface DashBoardProps {
//     tasks: Task[];
// //   setTasks must be typed as React's state setter function (Dispatch).
//     setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
//   }

// function DashBoard({tasks, setTasks}: DashBoardProps) {
// //   const [tasks, setTasks] = useState<Task[]>([]);
//   const addTask = (newTask: Task) => {
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };
//   //for filters(status and priority)
//   const [activeFilters, setActiveFilters] = useState({
//     status: "",
//     priority: "",
//   });

// //state for search bar
// const[searchBar, setSearchBar] = useState('')

//   const filteredAndSortedTasks = useMemo(() => {
//     let currentTasks = [...tasks]; 
//     const normalizedSearchTerm = searchBar.toLowerCase().trim();

//     //filter by search(title)

//     if(normalizedSearchTerm) {
//       currentTasks = currentTasks.filter(task =>
//         task.title.toLowerCase().includes(normalizedSearchTerm)
//       )
//     }

//     //filter by status and priority
//     currentTasks = currentTasks.filter((task) => {
//       const statusMatch =
//         activeFilters.status === "" || task.status === activeFilters.status;
//       const priorityMatch =
//         activeFilters.priority === "" ||
//         task.priority === activeFilters.priority;
//       return statusMatch && priorityMatch;
//     });
    
//     // sort by priority
//     const priorityOrder = { high: 3, medium: 2, low: 1 };
//     currentTasks.sort((a, b) => {
//         const aPriorityValue = priorityOrder[a.priority as keyof typeof priorityOrder] || 0;
//         const bPriorityValue = priorityOrder[b.priority as keyof typeof priorityOrder] || 0;
        
//         return bPriorityValue - aPriorityValue;
//     //   return priorityOrder[b.priority] - priorityOrder[a.priority];
//     });

//     return currentTasks;
//   }, [tasks, activeFilters, searchBar]);


//   const handleFilterChange = (filters: {
//     status: string;
//     priority: "low" | "medium" | "high" | '';
//     searchBar:string
//   }) => {
//     console.log("Filtering tasks with:", filters);
//     setActiveFilters({status: filters.status, priority: filters.priority});
//     setSearchBar(filters.searchBar)
//   };

//   const handleDeleteTask = (id:string) => {
//     setTasks(tasks.filter((task) => task.id !==id))
//   }


//   return (
//     <div>
//       {/* <h2>DashBoard</h2> */}
//       {/* STATS */}
//       {/* <div className="flex gap-10 bg-[#FFBDBD]"></div>
//       <div>Stats</div>
//       <div>
//         <div>Completed Tasks 10</div>
//         <div>Pending Tasks 5</div>
//         <div>In Progress Tasks 0</div>
//       </div>

//       <div>Recently Created Tasks</div>
//       <div>
//         <div>Task 1</div>
//         <div>Task 2</div>
//         <div>Task 3</div>
//       </div> */}

//       {/* TASKLIST */}
//       <TaskForm onSubmit={addTask}/>
//       <TaskFilter
//        onFilterChange={handleFilterChange}
//        currentSearchBar={searchBar}
//        />
//       <TaskList
//         tasks={filteredAndSortedTasks}
//         onDelete={handleDeleteTask}
//       />
//     </div>
//   );
// }

// export default DashBoard;


import TaskList from "../TaskList/TaskList";
import type { Task } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskForm from "../TaskForm/TaskForm";
import { useState } from "react";
import { useMemo } from "react";

interface DashBoardProps {
    tasks: Task[];
//   setTasks must be typed as React's state setter function (Dispatch).
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }

function DashBoard({tasks, setTasks}: DashBoardProps) {

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  //for filters
  const [activeFilters, setActiveFilters] = useState({
    status: "",
    priority: "",
  });

  //state for search bar
  const [searchBar, setSearchBar] = useState('')

  const filteredAndSortedTasks = useMemo(() => {
    let currentTasks = [...tasks];
    const normalizedSearchTerm = searchBar.toLowerCase().trim();
    // console.log(normalizedSearchTerm)

    //filter by search(title)
    if(normalizedSearchTerm){
      currentTasks = currentTasks.filter(task =>
        task.title.toLowerCase().includes(normalizedSearchTerm),
      )
    }

    //filter by status and priority
    currentTasks = currentTasks.filter((task) => {
      const statusMatch =
        activeFilters.status === "" || task.status === activeFilters.status;
      const priorityMatch =
        activeFilters.priority === "" ||
        task.priority === activeFilters.priority;
      return statusMatch && priorityMatch;
    });
    
    // sort by priority
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    currentTasks.sort((a, b) => {
        const aPriorityValue = priorityOrder[a.priority as keyof typeof priorityOrder] || 0;
        const bPriorityValue = priorityOrder[b.priority as keyof typeof priorityOrder] || 0;
        
        return bPriorityValue - aPriorityValue;
    //   return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    return currentTasks;
  }, [tasks, activeFilters]);


  const handleFilterChange = (filters: {
    status: string;
    priority: "low" | "medium" | "high" | '';
    searchBar:string
  }) => {
    console.log("Filtering tasks with:", filters);
    setSearchBar(filters.searchBar)
    setActiveFilters({status: filters.status, priority: filters.priority});
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // const handleUpdateTask = (id: string, updates: Partial<Task>) => {
  //   setTasks(prevTasks => prevTasks.map(task =>task.id ===id ? {...task, ...updates}: task))
  // }
  return (
    <div>
      {/* <h2>DashBoard</h2> */}
      {/* STATS */}
      {/* <div className="flex gap-10 bg-[#FFBDBD]"></div>
      <div>Stats</div>
      <div>
        <div>Completed Tasks 10</div>
        <div>Pending Tasks 5</div>
        <div>In Progress Tasks 0</div>
      </div>

      <div>Recently Created Tasks</div>
      <div>
        <div>Task 1</div>
        <div>Task 2</div>
        <div>Task 3</div>
      </div> */}

      {/* TASKLIST */}
      <TaskForm onSubmit={addTask}/>
      <TaskFilter 
      onFilterChange={handleFilterChange} 
      currentSearchBar={searchBar}/>
      <TaskList
        tasks={filteredAndSortedTasks}
        // onFilterChange={handleFilterChange}
        onDelete={handleDeleteTask}
        // onUpdate={handleUpdateTask}
      />
    </div>
  );
}

export default DashBoard;