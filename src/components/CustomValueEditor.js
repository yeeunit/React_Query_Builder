import { format, parse } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ValueEditor } from "react-querybuilder";

const dateFormat = "yyyy-MM-dd";

export const CustomValueEditor = (props) => {
  if (props.fieldData.datatype === "date") {
    return (
      <div>
        <DatePicker
          dateFormat={dateFormat}
          selected={
            !props.value ? null : parse(props.value, dateFormat, new Date())
          }
          onChange={(d) =>
            props.handleOnChange(d ? format(d, dateFormat) : null)
          }
        />
      </div>
    );
  } else if (props.fieldData.datatype === "dateRange") {
    const [startDate, endDate] = props.value.split(",");
    return (
      <div>
        <DatePicker
          selectsRange
          dateFormat={dateFormat}
          startDate={
            !startDate ? null : parse(startDate, dateFormat, new Date())
          }
          endDate={!endDate ? null : parse(endDate, dateFormat, new Date())}
          onChange={(range) => {
            const [s, e] = range;
            props.handleOnChange(
              [
                !s ? "" : format(s, dateFormat),
                !e ? "" : format(e, dateFormat),
              ].join(",")
            );
          }}
        />
      </div>
    );
  }
  return <ValueEditor {...props} />;
};
