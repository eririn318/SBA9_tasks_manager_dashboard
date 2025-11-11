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

function DashBoard({ tasks, setTasks }: DashBoardProps) {
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  //for filters
  const [activeFilters, setActiveFilters] = useState({
    status: "",
    priority: "",
  });

  //state for search bar
  const [searchBar, setSearchBar] = useState("");

  const filteredAndSortedTasks = useMemo(() => {
    let currentTasks = [...tasks];
    const normalizedSearchTerm = searchBar.toLowerCase().trim();

    //filter by search(title)
    if (normalizedSearchTerm) {
      currentTasks = currentTasks.filter((task) =>
        task.title.toLowerCase().includes(normalizedSearchTerm)
      );
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
      const aPriorityValue =
        priorityOrder[a.priority as keyof typeof priorityOrder] || 0;
      const bPriorityValue =
        priorityOrder[b.priority as keyof typeof priorityOrder] || 0;

      return bPriorityValue - aPriorityValue;
    });

    return currentTasks;
  }, [tasks, activeFilters]);

  const handleFilterChange = (filters: {
    status: string;
    priority: "low" | "medium" | "high" | "";
    searchBar: string;
  }) => {
    console.log("Filtering tasks with:", filters);
    setSearchBar(filters.searchBar);
    setActiveFilters({ status: filters.status, priority: filters.priority });
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {/* TASKLIST */}
      <TaskForm onSubmit={addTask} />

      <TaskFilter
        onFilterChange={handleFilterChange}
        currentSearchBar={searchBar}
      />

      <TaskList tasks={filteredAndSortedTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default DashBoard;
