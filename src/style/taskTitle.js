import styled from 'styled-components';

const TaskTitle = styled.p`
  margin-left: 7px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: ${ ({completed}) => completed ? "line-through" : "none" }; 
`;

export default TaskTitle;