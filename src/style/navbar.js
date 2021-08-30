import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  
  & > a {
    text-decoration: none;
    color: #333;
    weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-aling: center;
    padding: 0 15px;
    padding-bottom: 8px;
  }
  
  & > .active {
    border-bottom: 3px solid #2f80ed;
  }
`;

export default Navbar;