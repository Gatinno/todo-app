import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 11px 0;
  & > div {
    display: inherit;
  }
  & > .icon {
    color: #bdbdbd;
    cursor: pointer;
    transition: color .5s;
  }
  & > .icon:hover {
    color: #444
  }
`;

export default TaskContainer;