import React from "react";
import * as A from "./style";

const ObtionWrap = () => {
  return (
    <div>
      <A.OptionWrap>
        <A.OptionSelect>
          <A.Option>1</A.Option>
        </A.OptionSelect>

        <A.OperatorSelect>
          <A.Option>a</A.Option>
        </A.OperatorSelect>
        <A.Input />
      </A.OptionWrap>
    </div>
  );
};

export default ObtionWrap;
