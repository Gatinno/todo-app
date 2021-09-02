import React, {useContext, useEffect} from 'react';
import { FormComponent } from '../components';
import { Main } from '../style';
import { TasksListContext } from '../contexts/tasksListContext'
import { TaskComponent } from '../components';

const AllPage = () => {
  const {tasksList} = useContext(TasksListContext);
  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
  }, [tasksList]);
  return (
    <Main>
      <FormComponent />
      <div>
        {
          tasksList.map(({task, completed}, index) => <TaskComponent key={index} task={task} completed={completed} id={index} /> )
        }
      </div>
    </Main>
  );
}

export default AllPage;