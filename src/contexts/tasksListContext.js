import React, { useState } from 'react';

const TasksListContext = React.createContext();


const ProviderTasksList = ({children}) => {
  const savedTasks = localStorage.getItem('tasks') ?
    JSON.parse(localStorage.getItem('tasks')) :
    [];
  const [tasksList, changeTasksList] = useState(savedTasks);
  return (
    <TasksListContext.Provider value={{tasksList, changeTasksList}} >
      {children}
    </TasksListContext.Provider>
  );
}

export {TasksListContext, ProviderTasksList};