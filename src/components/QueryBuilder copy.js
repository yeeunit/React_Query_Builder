// import React from 'react'
// import { useState } from "react";
// import axios from "axios";
// import { useQuery } from "react-query";
// import { QueryBuilder } from 'react-querybuilder';
// import 'react-querybuilder/dist/query-builder.scss';

// const schema = {
//     fields: [
//       { name: "title", label: "Title", type: "string" },
//       { name: "author", label: "Author", type: "string" },
//       { name: "published", label: "Published", type: "date" },
//     ],
//     operators: [
//       { name: "=", label: "=" },
//       { name: "<", label: "<" },
//       { name: ">", label: ">" },
//       { name: "<=", label: "<=" },
//       { name: ">=", label: ">=" },
//     ],
//   };

// const fetchBooks = async (query) => {
//     const response = await axios.get("/books", { params: { query } });
//     return response.data;
//   };

// const QueryBuilder = () => {

//     const [query, setQuery] = useState(null);

//   const { data, isLoading, error } = useQuery(["books", query], () =>
//     fetchBooks(query)
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (<>
//     <div>QueryBuilder</div>

//         <QueryBuilder
//         fields={schema.fields}
//         operators={schema.operators}
//         onQueryChange={(q) => setQuery(q)}
//     />
//     <ul>
//         {data.map((book) => (
//         <li key={book.id}>
//             {book.title} by {book.author} ({book.published})
//         </li>
//         ))}
//     </ul>

//   </>)
// }

// export default QueryBuilder
