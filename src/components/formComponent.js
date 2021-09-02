import React, { useContext, useState } from 'react';
import { TasksListContext } from '../contexts/tasksListContext';
import { Form, Input, Button} from '../style';

const FormComponent = () => {
  const [task, editTask] = useState("");
  const {tasksList, changeTasksList} = useContext(TasksListContext);

  const _handleSubmit = (e) => {
    e.preventDefault();
    changeTasksList([...tasksList, {task, completed: false}])
    editTask("");
  }

  return (
    <Form onSubmit={_handleSubmit}>
      <Input 
        type="text" 
        placeholder="add details"
        onChange={({target}) => editTask(target.value)}
        value={task}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default FormComponent;