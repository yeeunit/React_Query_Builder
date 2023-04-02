import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px dotted gray;
  padding: 10px;
`;

export const QueryBuilderWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9c2ad;
  border-radius: 10px;
  padding: 18px;
  border: 1px solid black;
`;

// Buttons
export const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
export const AddBtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid black;
  width: 80px;
  height: 30px;
  background: ${(props) => (props.name === "rule" ? "#20818C" : "#27668C")};
  color: white;
  border-radius: 5px;
  margin-right: 5px;
`;
export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #590902;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  border-style: none;
  cursor: pointer;
  border: 1px solid black;
`;

// Select
export const RuleWrap = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin: 5px 0;
`;
export const Select = styled.select`
  margin-right: 4px;
  height: 30px;
  border-radius: 5px;
  text-indent: 4px;
  cursor: pointer;
  min-width: 70px;
  &.AndOrSelect {
    background: #a6775b;
    color: #fff;
    border: 1px solid black;
  }
`;

export const Option = styled.option``;

export const Ul = styled.ul``;

export const Li = styled.li``;

export const Input = styled.input`
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid black;
  height: 30px;
`;

export const NewGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b18a7a;
  border-radius: 5px;
  padding: 12px;
  border: 1px solid black;
  margin-top: 10px;
`;

export const InnerGroupBox = styled.div`
  flex-direction: column;
  background-color: #a68f7b;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid black;
  margin-top: 5px;
`;
