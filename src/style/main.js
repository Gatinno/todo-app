import styled from 'styled-components';

const Main = styled.div`
  width: 608px;
  height: 77%;
  margin: 0 auto;
  & > div {
    max-height: 75%;
    overflow: auto;
    scroll-behavior: smooth;
    margin: 10px 0;
  }
  & > div::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  & > div::-webkit-scrollbar:vertical {
    width: 9px;
  }
  & > div::-webkit-scrollbar-button:increment,div::-webkit-scrollbar-button {
    display: none;
  } 
  & > div::-webkit-scrollbar:horizontal {
    height: 5px;
  }
  & > div::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  & > div::-webkit-scrollbar-track {
    border-radius: 10px;  
  }
`;

export default Main;