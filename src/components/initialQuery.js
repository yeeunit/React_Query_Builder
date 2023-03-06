import { format, subDays } from "date-fns";

const initialRange = [subDays(new Date(), 14), new Date()]
  .map((d) => format(d, "yyyy-MM-dd"))
  .join(",");

export const initialQuery = {
  rules: [
    {
      field: "name",
      operator: "=",
      value: "Steve Vai",
    },
    {
      field: "dateOfBirth",
      operator: "=",
      value: "1960-06-06",
    },
    {
      field: "dateRange",
      value: initialRange,
      operator: "between",
    },
  ],
  combinator: "and",
  not: false,
};
