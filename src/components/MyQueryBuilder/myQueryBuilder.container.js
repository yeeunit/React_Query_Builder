import { useState } from "react";
import MyQueryBuilderUI from "./myQueryBuilder.presenter";

export default function MyQueryBuilder(props) {
  const [ruleId, setRuleId] = useState(1);
  const [ruleList, setRuleList] = useState([]);

  const [id, setId] = useState(1);
  const [groupList, setGroupList] = useState([]);

  const onClickAddRule = () => {
    setRuleId((prev) => prev + 1);
    console.log("ruleId", ruleId);
    let ruleArr = [...ruleList];
    ruleArr.push(ruleId);
    setRuleList(ruleArr);
    console.log("ruleList", ruleList);
  };

  const onClickRemoveRule = () => {
    setRuleId((prev) => prev - 1);
    console.log("ruleId", ruleId);
    let ruleArr = [...ruleList];
    ruleArr.pop(ruleId);
    setRuleList(ruleArr);
    console.log("ruleList", ruleList);
  };

  const onClickAddGroup = () => {
    setId((prev) => prev + 1);
    console.log("id", id);
    let groupArr = [...groupList];
    groupArr.push(id);
    setGroupList(groupArr);
    console.log("groupArr", groupArr);
  };

  const onClickRemoveGroup = () => {
    setId((prev) => prev - 1);
    let groupArr = [...groupList];
    groupArr.pop(id);
    setGroupList(groupArr);
  };

  return (
    <>
      <MyQueryBuilderUI
        ruleId={ruleId}
        ruleList={ruleList}
        id={id}
        groupList={groupList}
        onClickAddRule={onClickAddRule}
        onClickRemoveRule={onClickRemoveRule}
        onClickAddGroup={onClickAddGroup}
        onClickRemoveGroup={onClickRemoveGroup}
      />
    </>
  );
}
