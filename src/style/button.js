import styled from 'styled-components';

const Button = styled.button`
  width: 109px;
  height: 56px;
  border: none;
  background-color: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, .4);
  border-radius: 12px;
  color: #fff;
  font-weight; 600;
  transition: background .2s;

  &:hover {
    background-color: #3c95fc;
  }

  &:active {
    background-color: #1c75dc;
  }
`;

export default Button;