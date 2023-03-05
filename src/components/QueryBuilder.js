// import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatQuery, QueryBuilder } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.scss";
import { useQuery } from "react-query";

// const fields = [
//   { name: "firstName", label: "First Name" },
//   { name: "lastName", label: "Last Name" },
// ];

const schema = {
  fields: [
    { name: "m.id", label: "ID", type: "integer" },
    { name: "m.name", label: "영화", type: "string" },
    { name: "a.actor", label: "출연", type: "string" },
    { name: "c.name", label: "배역", type: "string" },
    { name: "m.date", label: "날짜", type: "date" },
    { name: "m.rate", label: "평점", type: "integer" },
    { name: "g.name", label: "장르", type: "date" },
    { name: "s.name", label: "자막", type: "string" },
    { name: "m.runtime", label: "상영시간", type: "string" },
  ],
  operators: [
    { name: "=", label: "=" },
    { name: "<", label: "<" },
    { name: ">", label: ">" },
    { name: "<=", label: "<=" },
    { name: ">=", label: ">=" },
  ],
};

const fetchBooks = async (query) => {
  // console.log("query", query);
  const sql =
    query && formatQuery(query, { format: "sql", parseNumbers: true });
  // console.log(sql);
  const response = await axios.get("http://localhost:3001/query", {
    params: { sql },
  });
  console.log(sql);
  // console.log(response.data);
  return response.data;
};

const QueryBuilderComponent = () => {
  const [query, setQuery] = useState(null);

  // const [query, setQuery] = useState({
  //   combinator: "and",
  //   rules: [
  //     { field: "firstName", operator: "=", value: "Steve" },
  //     { field: "lastName", operator: "=", value: "Vai" },
  //   ],
  // });

  // const sql =
  //   query && formatQuery(query, { format: "sql", parseNumbers: true });
  // console.log(sql);
  // const onChangeQuery = () => {
  //   setQuery(sql);
  // };

  // useEffect(() => {
  //   fetchBooks();
  // }, [query]);

  const { data, error } = useQuery(["movies", query], () => fetchBooks(query));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="QueryBuilderComponent">
      <h1 className="query_builder_title">Query Builder Practice</h1> <br />
      <QueryBuilder
        // fields={fields}
        query={query}
        fields={schema.fields}
        operators={schema.operators}
        // onQueryChange={onChangeQuery}
        onQueryChange={(q) => setQuery(q)}
      />
      {/* <h4>SQL as result of formatQuery({query}, 'sql')</h4> */}
      {/* <span>{formatQuery(query, "sql")}</span> */}
      {/* <span>query:{query}</span> */}
      {/* <button className="searchBtn">검색하기</button> */}
      {/* <Button variant="contained">Search</Button> */}
      {/* {formatQuery(query, { format: "sql", parseNumbers: true })} */}
      <ul>
        {data &&
          data.map((el) => (
            <li key={el.id}>
              <span>{el.id} . </span>
              <span> {el.movie} </span>
              <div>{el.actor}</div>
              <div>{el.character}</div>
              <div> {el.genre} </div>
              <div>{el.date}</div>
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QueryBuilderComponent;
