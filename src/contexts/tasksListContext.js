import React, { useState } from 'react';

const TasksListContext = React.createContext();


const ProviderTasksList = ({children}) => {
  const savedTasks = localStorage.getItem('tasksList') ?
    JSON.parse(localStorage.getItem('tasksList')) :
    [];
  const [tasksList, changeTasksList] = useState(savedTasks);
  return (
    <TasksListContext.Provider value={{tasksList, changeTasksList}} >
      {children}
    </TasksListContext.Provider>
  );
}

export {TasksListContext, ProviderTasksList};