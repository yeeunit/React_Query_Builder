import { useState } from "react";
import AndOrSelect from "./AndOrSelect";
import RuleBox from "./RuleBox";
import * as A from "./style";

const NestedBoxComponent = () => {
  const [list, setList] = useState([]);

  // Add Rule or Group
  const onClickAdd = (type) => {
    setList((prevState) => [...prevState, { type: type, nested: [] }]);
  };

  // Remove Rule or Group
  const onClickRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  // Add Nested Rule or Group
  const onClickAddNested = (index, type) => {
    console.log("onClickAddNested");
    const newList = [...list];
    console.log("newList", newList);
    console.log("index", index);
    const parentItem = newList[index];
    console.log("parentItem", parentItem);

    parentItem.nested.push({ type: type, nested: [] });
    setList(newList);
  };

  // Remove Nested Rule or Group
  const onClickRemoveNested = (parentIndex, index) => {
    const newList = [...list];
    newList[parentIndex].nested.splice(index, 1);
    setList(newList);
  };

  console.log("list2", list);

  return (
    <>
      <A.BoxWrap>
        <A.BtnWrap>
          <A.AddBtn name="rule" onClick={() => onClickAdd("rule")}>
            + Rule{" "}
          </A.AddBtn>
          <A.AddBtn name="group" onClick={() => onClickAdd("group")}>
            + Group{" "}
          </A.AddBtn>

          <A.DeleteBtn onClick={(index) => onClickRemove(index)}>
            {" "}
            xxx{" "}
          </A.DeleteBtn>
        </A.BtnWrap>

        {list.map((item, index) => (
          <div key={index}>
            {item.type === "rule" && (
              <>
                <A.RuleWrap>
                  <RuleBox />
                  <A.DeleteBtn onClick={() => onClickRemove(index)}>
                    X
                  </A.DeleteBtn>
                </A.RuleWrap>
                {index !== list.length - 1 && <AndOrSelect />}
              </>
            )}

            {item.type === "group" && (
              <>
                <A.NewRuleBox>
                  <A.BtnWrap>
                    <A.AddBtn
                      name="rule"
                      onClick={(type) =>
                        onClickAddNested(index, (type = "rule"))
                      }
                    >
                      +Rule{" "}
                    </A.AddBtn>
                    <A.AddBtn
                      name="group"
                      onClick={(type) =>
                        onClickAddNested(index, (type = "group"))
                      }
                    >
                      +Group{" "}
                    </A.AddBtn>
                    <A.DeleteBtn onClick={() => onClickRemove(index)}>
                      x{" "}
                    </A.DeleteBtn>
                  </A.BtnWrap>

                  <A.InnerGroupBox>
                    {item.nested.map((nestedItem, nestedIndex) =>
                      nestedItem.type === "rule" ? (
                        <>
                          <A.RuleWrap>
                            <RuleBox />
                            <A.DeleteBtn
                              onClick={() => onClickRemoveNested(index)}
                            >
                              X
                            </A.DeleteBtn>
                          </A.RuleWrap>
                          {nestedIndex !== item.nested.length - 1 && (
                            <AndOrSelect />
                          )}
                        </>
                      ) : (
                        <>
                          <NestedBoxComponent
                            key={nestedIndex}
                            list={item.nested}
                            parentIndex={index}
                            index={nestedIndex}
                            onRemove={onClickRemoveNested}
                          />
                        </>
                      )
                    )}
                  </A.InnerGroupBox>
                </A.NewRuleBox>
              </>
            )}
          </div>
        ))}
      </A.BoxWrap>
    </>
  );
};

export default NestedBoxComponent;
