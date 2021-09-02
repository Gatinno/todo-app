import React, {useContext, useEffect} from 'react';
import { FormComponent } from '../components';
import { Main } from '../style';
import { TasksListContext } from '../contexts/tasksListContext'
import { TaskComponent } from '../components';

const ActivePage = () => {
  const {tasksList} = useContext(TasksListContext);
  const filteredTasksList = tasksList.filter((task) => !task.completed)
  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
  }, [tasksList]);
  return (
    <Main>
      <FormComponent />
      <div>
        {
          filteredTasksList.map(({task, completed}, index) => <TaskComponent key={index} task={task} completed={completed} id={index} /> )
        }
      </div>
    </Main>
  );
}

export default ActivePage;