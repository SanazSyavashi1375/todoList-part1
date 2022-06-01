import styled from "styled-components";

const Button = styled.button `
  color: gray;
  background-color: #f1f1f1;
  border : 1px solid #c7c7c7;
  border-radius: 4px;
  box-Shadow :2px 2px gray;
  width:200px;
  &:hover{
    background-color: #f5f5f5;
    box-Shadow :3px 3px gray;

  }
  
`;
export default Button;