import styled, {css} from 'styled-components';

const Button = styled.button`
  width: 109px;
  height: 40px;
  border: none;
  background-color: ${({red}) => red ? "#eb5757" : "#2f80ed"};
  box-shadow: 0px 2px 6px rgba(127, 177, 243, .4);
  border-radius: 12px;
  color: #fff;
  font-weight; 600;
  transition: background .2s;
  cursor: pointer;
  ${({red}) => red && css`
    width: 124px;
    float: right;
    font-size: 12px;
    box-shadow: none;
    border-radius: 4px;
  `}
  &:hover {
    background-color: ${({red}) => red ? "#fa6767" : "#3c95fc"};
  }
  &:active {
    background-color: ${({red}) => red ? "#da4747" : "#1c75dc"};
  }
`;

export default Button;