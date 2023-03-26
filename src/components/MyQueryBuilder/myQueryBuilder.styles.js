import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1000px;
  height: auto;
  border: 1px solid gray;
  padding: 50px;
`;

export const BuilderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: auto;
  background-color: #f2cb05;
  border-radius: 10px;
  padding: 18px;
  border: 1px solid black;
`;

export const OptionWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  margin-right: 4px;
  width: 66px;
  height: 30px;
  border-radius: 5px;
  text-indent: 4px;
  cursor: pointer;
`;

export const RuleBtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid black;
  width: 70px;
  height: 30px;
  background-color: #026873;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 4px;
`;

export const GroupBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: #8c2370;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  border-style: none;
  margin-right: 4px;
  cursor: pointer;
  border: 1px solid black;
`;

export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #a62c21;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  border-style: none;
  cursor: pointer;
  border: 1px solid black;
`;

export const RulBox = styled.div`
  display: flex;
  /* border: 1px solid black; */
  margin-bottom: 10px;
`;

export const OptionSelect = styled.select`
  height: 26px;
  width: 130px;
  border-radius: 5px;
  cursor: pointer;
  text-indent: 4px;
  margin-right: 5px;
`;

export const OperatorSelect = styled.select`
  height: 26px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  text-indent: 4px;
  margin-right: 5px;
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid black;
`;

export const Option = styled.option`
  display: inline;
  width: 100px;
`;

export const NewGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  height: auto;
  background-color: #f29a2e;
  border-radius: 8px;
  padding: 14px;
  border: 1px solid black;
  margin-bottom: 10px;
  visibility: ${(props) => props.hidden && "hidden"};
`;

export const InnerGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: auto;
  background-color: #f27333;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 8px;
`;
