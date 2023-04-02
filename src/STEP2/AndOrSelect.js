import * as A from "./style";

const AndOrSelect = () => {
  return (
    <>
      <A.OptionSelect>
        <A.Option value="and">AND</A.Option>
        <A.Option value="or">OR</A.Option>
      </A.OptionSelect>
    </>
  );
};

export default AndOrSelect;
