import * as A from "./style";

const AndOrSelect = ({ value, onChange }) => {
  console.log(onChange);
  return (
    <>
      <select value={value} onChange={onChange}>
        <A.Option value={true}>AND</A.Option>
        <A.Option value={false}>OR</A.Option>
      </select>
    </>
  );
};

export default AndOrSelect;
