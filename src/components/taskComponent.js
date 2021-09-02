import React, { useContext } from 'react';
import { TasksListContext } from '../contexts/tasksListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, TaskContainer, TaskTitle } from '../style';

const TaskComponent = ({id, task, completed, completedPage = false}) => {
  const {tasksList, changeTasksList} = useContext(TasksListContext);
  
  const _onChange = (id, completed) => {
    changeTasksList(tasksList.map((task, index) => {
      if (index === id) {
        return {...task, completed: !completed};
      }
      return task;
    }))
  }

  const _handlerClick = (id) => {
    changeTasksList(tasksList.filter((task, index) => index !== id))
  }

  return (
    <TaskContainer>
      <div>
        <Checkbox type="checkbox" onChange={() => _onChange(id, completed)} checked={completed} />
        <TaskTitle completed={completed} >{task}</TaskTitle>
      </div>
      {completedPage ?
        <FontAwesomeIcon className="icon" onClick={() => _handlerClick(id)} icon={faTrashAlt} />
        :
        null
      }
    </TaskContainer>
  );
}

export default TaskComponent;