import styled from "styled-components";

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #a8a8ac;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
`;
export const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 30px;
  background: ${(props) => (props.name === "group" ? "#3CB49D" : "#167C80")};
  font-size: 14px;
  font-weight: 900;
  border: 1px solid gray;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const GroupBtn = styled.button`
  width: 80px;
  height: 30px;
  background: #3cb49d;
  font-size: 14px;
  font-weight: 900;
  border: 1px solid gray;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const RuleBtn = styled.button`
  width: 80px;
  height: 30px;
  background: #167c80;
  font-size: 14px;
  font-weight: 900;
  border: 1px solid gray;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  background: #e8e8ed;
  /* color: #fff; */
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
`;

export const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RuleWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const OptionSelect = styled.select`
  height: 30px;
  width: 60px;
  border-radius: 5px;
  cursor: pointer;
  text-indent: 4px;
  margin-bottom: 10px;
  background: #f1f1f6;
`;

export const Option = styled.option``;

export const NewRuleBox = styled.div`
  /* background-color: #B7E5D6; */
  /* background: #F1F1F6; */
  border-radius: 8px;
  padding: 14px;
  border: 1px solid gray;
  margin: 10px 0;
`;

export const InnerGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid black;
  height: 30px;
`;
