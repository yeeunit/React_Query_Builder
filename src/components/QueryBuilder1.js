import React, { useState } from "react";
import Select from "react-select";
import { colourOptions } from "./data";
import { QueryBuilderDnD } from "@react-querybuilder/dnd";
import * as ReactDnD from "react-dnd";
import * as ReactDndHtml5Backend from "react-dnd-html5-backend";
import "react-querybuilder/dist/query-builder.scss";
import "./styles.scss";
import { fields } from "./fields";
import "react-datepicker/dist/react-datepicker.css";
import {
  formatQuery,
  QueryBuilder,
  defaultValidator,
} from "react-querybuilder";
import { CustomValueEditor } from "./CustomValueEditor";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const initialQuery = {
  combinator: "and",
  rules: [
    { field: "firstName", operator: "beginsWith", value: "Stev" },
    { field: "lastName", operator: "in", value: "Vai,Vaughan" },
  ],
};

const QueryBuilder1 = () => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <>
      <div className="QueryBuilderComponent">
        <h1 className="query_builder_title">QueryBuilder1</h1> <br /> <br />
        <Select
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className
        />{" "}
        <br /> <br />
        <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
          <QueryBuilder
            fields={fields}
            query={query}
            onQueryChange={(q) => setQuery(q)}
            addRuleToNewGroups
            debugMode
            listsAsArrays
            resetOnOperatorChange
            showCloneButtons
            showCombinatorsBetweenRules
            showLockButtons
            showNotToggle
            validator={defaultValidator}
            controlClassnames={{ queryBuilder: "queryBuilder-branches" }}
            controlElements={{ valueEditor: CustomValueEditor }}
          />
        </QueryBuilderDnD>
        <br /> <br />
        <h4>Query</h4>
        <pre>
          <code>
            {formatQuery(query, { format: "sql", parseNumbers: true })}
          </code>
        </pre>
      </div>
    </>
  );
};

export default QueryBuilder1;
