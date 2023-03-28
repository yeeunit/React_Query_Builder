import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  border: 1px solid black;
  padding: 20px;
  background-color: #f2cd5c;
  margin-bottom: 30px;
`;
export const Span = styled.span`
  line-height: 30px;
  text-decoration: ${(props) => (props.item ? "line-through" : "none")};
`;

export const Ul = styled.ul`
  li {
    list-style: none;
  }
`;
export const Input = styled.input`
  height: 26px;
  border-radius: 5px;
  border: 1px solid black;
  margin-right: 6px;
  text-indent: 6px;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 26px;
  background-color: #03a6a6;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  border-style: none;
  margin-right: 4px;
  cursor: pointer;
  border: 1px solid black;
`;

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #d94aa7;
  color: white;
  border-radius: 3px;
  border-style: none;
  cursor: pointer;
  border: 1px solid black;
  margin-left: 6px;
`;
