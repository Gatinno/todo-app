import React, {useContext, useEffect} from 'react';
import { FormComponent } from '../components';
import { Main } from '../style';
import { TasksListContext } from '../contexts/tasksListContext'
import { TaskComponent } from '../components';
import { Button } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CompletedPage = () => {
  const {tasksList, changeTasksList} = useContext(TasksListContext);
  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
  }, [tasksList]);
  const filteredTasksList = tasksList.filter((task) => task.completed)
  const _handlerClick = () => {
    changeTasksList(tasksList.filter((task) => !task.completed))
  }
  return (
    <Main>
      <FormComponent />
      <div>
        {
          filteredTasksList.map(({task, completed}, index) => <TaskComponent key={index} task={task} completed={completed} id={index} completedPage={true} /> )
        }
      </div>
      <Button onClick={_handlerClick} red ><FontAwesomeIcon icon={faTrashAlt} /> delete all</Button>
    </Main>
  );
}

export default CompletedPage;