import AndOrSelect from "./AndOrSelect";
import RuleBox from "./RuleBox";
import * as A from "./style";

const Group = ({ rootData, groupData, updateViewData, fields, isRoot }) => {
  const onChangeCondition = (e) => {
    console.log(e.target.value);
    groupData.isAnd = e.target.value;
    updateViewData({ ...rootData });
  };
  const onAddGroup = (e) => {
    groupData.rules.push({ isGroup: true, isAnd: true, rules: [] });
    updateViewData({ ...rootData });
  };
  const onAddRule = (e) => {
    groupData.rules.push({
      isGroup: false,
      selectedField: "",
      selectedValue: "",
      selectedCondition: "",
    });
    updateViewData({ ...rootData });
  };

  return (
    <>
      <A.BoxWrap>
        <A.InnerGroupBox>
          <A.BtnWrap>
            <A.AddBtn onClick={onAddRule}>Rule</A.AddBtn>
            <A.AddBtn onClick={onAddGroup}>Group</A.AddBtn>
          </A.BtnWrap>
          <AndOrSelect
            value={groupData.isAnd}
            onChange={onChangeCondition}
          ></AndOrSelect>
          {groupData.rules.map((item) => {
            if (item.isGroup) {
              return (
                <Group
                  rootData={rootData}
                  groupData={item}
                  updateViewData={updateViewData}
                  fields={fields}
                ></Group>
              );
            } else {
              return <RuleBox rule={item} fields={fields}></RuleBox>;
            }
          })}
        </A.InnerGroupBox>
      </A.BoxWrap>
    </>
  );
};

export default Group;
