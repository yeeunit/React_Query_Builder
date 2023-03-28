import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  border: 1px solid black;
  padding: 20px;
  background-color: #95b3bf;
  margin-bottom: 30px;
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  background: #2d4b73;
  border: 1px solid black;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 50px;
`;

export const DivWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 26px;
  background-color: #d9b70d;
  /* color: white; */
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
  background-color: #bf8d30;
  color: white;
  border-radius: 3px;
  border-style: none;
  cursor: pointer;
  border: 1px solid black;
  margin-left: 6px;
`;
