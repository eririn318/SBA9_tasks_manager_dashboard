# Setup instructions
**App.tsx-The root**
  -Passes the tasks state and the setTasks function down to the main container, Dashboard.
**Dashboard.tsx-The controkker**
  -AddTask, handleDeleteTask, and handleUpdateTask (for status changes).
**TaskForm.tsx-The creator**
  -Form where users input a new task's title, description, priority, and due date.
**TaskFilter.tsx-The search tool**
  -Search input, Status dropdown, and Priority dropdown.
**TaskList.tsx-The renderer**
  -Loop through the tasks array and render a TaskItem for each task.
**TaskItem.tsx-The indicvidual item**
  -It displays all the task details and contains the interactive elements (the Status Selector and the Delete Button).