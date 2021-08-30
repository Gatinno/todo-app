import React from 'react';
import { Form, Input, Button} from '../style';

const FormComponent = () => {
  const _handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={_handleSubmit}>
      <Input type="text" placeholder="add details" />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default FormComponent;