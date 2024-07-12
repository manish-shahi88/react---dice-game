import styled from "styled-components";
export const Button = styled.div`
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: white;
  display: inline-block;
  min-width: 220px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s ease;
  }
`;
export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
