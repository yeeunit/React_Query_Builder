import { useEffect, useState } from "react";
import * as A from "./myQueryBuilder.styles";
import { OptionGroup } from "./operators";

export default function MyQueryBuilderUI(props) {
  const [data, setData] = useState();

  const getMovieData = async () => {
    let response = await fetch("http://localhost:3001/movie");
    let result = await response.json();
    setData(result);
  };
  console.log("data", data);

  let movieId = data && data.map((el) => el.id);
  let movieList = data && data.map((el) => el.movie);
  let runtime = data && data.map((el) => el.runtime);

  useEffect(() => {
    getMovieData();
  }, []);

  // let movieTitles = data && data.map((el) => el.movie);
  // console.log("movieTitles", movieTitles);

  return (
    <>
      <A.Wrapper>
        <h3> Let's make My Query Builder UI</h3>

        <A.BuilderWrap>
          <A.OptionWrap>
            <A.Select>
              <option value="and">AND</option>
              <option value="or">OR</option>
            </A.Select>
            <A.RuleBtn onClick={props.onClickAddRule}>+ Rule</A.RuleBtn>
            <A.GroupBtn onClick={props.onClickAddGroup}>+ Group</A.GroupBtn>
          </A.OptionWrap>

          <>
            {props.ruleList &&
              props.ruleList.map((item, index) => (
                <A.RulBox key={index}>
                  <A.OptionSelect>
                    <option disabled>Select Movie</option>
                    {movieList.map((m, index) => (
                      <option key={index} value={m}>
                        {m}
                      </option>
                    ))}
                  </A.OptionSelect>
                  <A.OperatorSelect>
                    {OptionGroup.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </A.OperatorSelect>
                  <A.Input type="text" />
                  <A.CloseBtn onClick={props.onClickRemoveRule}>X</A.CloseBtn>
                </A.RulBox>
              ))}
          </>

          <>
            {props.groupList &&
              props.groupList.map((item, index) => (
                <A.NewGroupBox key={index}>
                  <A.OptionWrap>
                    <A.Select>
                      <option value="and">AND</option>
                      <option value="or">OR</option>
                    </A.Select>
                    <A.RuleBtn>+ Rule</A.RuleBtn>
                    <A.GroupBtn>+ Group</A.GroupBtn>
                    <A.CloseBtn onClick={props.onClickRemoveGroup}>
                      X
                    </A.CloseBtn>
                  </A.OptionWrap>

                  {/* <A.InnerGroupBox>
                      <A.OptionWrap>
                        <A.Select>
                          <option value="and">AND</option>
                          <option value="or">OR</option>
                        </A.Select>
                        <A.RuleBtn>+ Rule</A.RuleBtn>
                        <A.GroupBtn onClick={onClickAddGroup}>
                          + Group
                        </A.GroupBtn>
                        <A.CloseBtn onClick={onClickRemoveGroup}>X</A.CloseBtn>
                      </A.OptionWrap>
                    </A.InnerGroupBox> */}
                </A.NewGroupBox>
              ))}
          </>

          {/*           
          <A.OptionSelect>
            <option disabled selected>
              Select Number
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </A.OptionSelect>
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <A.CloseBtn>X</A.CloseBtn>

          <A.NewBuilderBox>new box</A.NewBuilderBox>

          <form onSubmit={handleSubmit}>
            <label>
              Fields:
              <input
                type="text"
                name="fields"
                value={query.fields}
                onChange={handleChange}
              />
            </label>
            <label>
              Operator:
              <select
                name="operator"
                value={query.operator}
                onChange={handleChange}
              >
                <option value="equals">Equals</option>
                <option value="contains">Contains</option>
                <option value="starts_with">Starts with</option>
                <option value="ends_with">Ends with</option>
              </select>
            </label>
            <label>
              Value:
              <input
                type="text"
                name="value"
                value={query.value}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Search</button>
          </form> */}
        </A.BuilderWrap>
      </A.Wrapper>
    </>
  );
}
