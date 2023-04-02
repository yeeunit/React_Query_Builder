import * as A from "./style";
import AndOrSelect from "./AndOrSelect";
import RuleBox from "./RuleBox";
import STEP1 from ".";

const NestedBoxComponent = (props) => {
  console.log("props", props);
  // console.log("props.listIndex", props.listIndex);
  // console.log("props.nestedIndex", props.nestedIndex);
  // console.log("props.nestedList", props.nestedList);

  return (
    <>
      <A.Wrapper>
        <A.QueryBuilderWrap>
          <A.BtnWrap>
            <A.AddBtn name="rule" onClick={() => props.onClickAdd("rule")}>
              + RULE
            </A.AddBtn>
            <A.AddBtn name="group" onClick={() => props.onClickAdd("group")}>
              + GROUP
            </A.AddBtn>

            <A.DeleteBtn
              onClick={() =>
                props.onDeleteGroup(
                  // props.list,
                  props.listIndex
                )
              }
              // onClick={() => props.onClickRemove(props.listIndex)}
            >
              x?
            </A.DeleteBtn>
          </A.BtnWrap>

          {props.list.map((listItem, listIndex) => (
            <div key={listIndex}>
              {listItem.type === "rule" && (
                <>
                  <A.RuleWrap>
                    <RuleBox />
                    <A.DeleteBtn onClick={() => props.onClickRemove(listIndex)}>
                      X1
                    </A.DeleteBtn>
                  </A.RuleWrap>
                  {listIndex !== props.list.length - 1 && <AndOrSelect />}
                </>
              )}

              {listItem.type === "group" && (
                <>
                  <A.NewGroupBox>
                    <A.BtnWrap>
                      <A.AddBtn
                        name="rule"
                        onClick={(type) =>
                          props.onClickAddNested(listIndex, "rule")
                        }
                      >
                        +rule
                      </A.AddBtn>
                      <A.AddBtn
                        name="group"
                        onClick={(type) =>
                          props.onClickAddNested(listIndex, "group")
                        }
                      >
                        +group
                      </A.AddBtn>
                      <A.DeleteBtn
                        onClick={() => props.onClickRemove(listIndex)}
                      >
                        X2
                      </A.DeleteBtn>
                    </A.BtnWrap>

                    <A.InnerGroupBox>
                      {listItem.nested.map((nestedItem, nestedIndex) => (
                        <div key={nestedIndex}>
                          {nestedItem.type === "rule" && (
                            <>
                              <A.RuleWrap>
                                <RuleBox />
                                <A.DeleteBtn
                                  onClick={() =>
                                    props.onClickRemoveNested(
                                      listIndex,
                                      nestedIndex
                                    )
                                  }
                                >
                                  X3
                                </A.DeleteBtn>
                              </A.RuleWrap>
                              {nestedIndex !== listItem.nested.length - 1 && (
                                <AndOrSelect />
                              )}
                            </>
                          )}

                          {nestedItem.type === "group" && (
                            <>
                              <STEP1
                                // key={nestedIndex}
                                list={props.list}
                                listItem={listItem}
                                listIndex={listIndex}
                                nestedList={listItem.nested}
                                nestedIndex={nestedIndex}

                                // onClickRemoveNested={props.onClickRemoveNested}
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </A.InnerGroupBox>
                  </A.NewGroupBox>
                </>
              )}
            </div>
          ))}
        </A.QueryBuilderWrap>
      </A.Wrapper>
    </>
  );
};

export default NestedBoxComponent;
