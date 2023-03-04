import { Button } from "@mui/material";
import React, { useState } from "react";
import { formatQuery, QueryBuilder } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.scss";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

const QueryBuilderComponent = () => {
  const [query, setQuery] = useState({
    combinator: "and",
    rules: [
      { field: "firstName", operator: "=", value: "Steve" },
      { field: "lastName", operator: "=", value: "Vai" },
    ],
  });

  return (
    <div className="QueryBuilderComponent">
      <h1 className="query_builder_title">Query Builder Practice</h1> <br />
      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={(q) => setQuery(q)}
      />
      <h4>
        SQL as result of <code>formatQuery(query, 'sql')</code>:
      </h4>
      <pre>{formatQuery(query, "sql")}</pre>
      <button className="searchBtn">검색하기</button>
      {/* <Button variant="contained">Search</Button> */}
    </div>
  );
};

export default QueryBuilderComponent;
