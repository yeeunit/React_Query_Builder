// import axios from "axios";
// import { useState } from "react";
// import * as A from "./myQueryBuilder.styles";

// const fields = [
//     { name: 'firstName', label: 'First Name' },
//     { name: 'lastName', label: 'Last Name' },
//   ];

//   const initialQuery = {
//     combinator: 'and',
//     rules: [
//       { field: 'firstName', operator: 'beginsWith', value: 'Stev' },
//       { field: 'lastName', operator: 'in', value: 'Vai,Vaughan' },
//     ],
//   };

// export default function MyQueryBuilderUI() {
//   const [query, setQuery] = useState({
//     fields: [],
//     operator: "",
//     value: "",
//   });
//   const options = [
//     {
//       label: "Apple",
//       value: "apple",
//     },
//     {
//       label: "Mango",
//       value: "mango",
//     },
//     {
//       label: "Banana",
//       value: "banana",
//     },
//     {
//       label: "Pineapple",
//       value: "pineapple",
//     },
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setQuery((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const buildQuery = () => {
//     const queryString = query.stringify({
//       fields: query.fields.join(","),
//       operator: query.operator,
//       value: query.value,
//     });
//     return `https://example.com/api/data?${queryString}`;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const queryUrl = buildQuery();
//     axios
//       .get(queryUrl)
//       .then((response) => {
//         // Handle the server response
//       })
//       .catch((error) => {
//         // Handle the error
//       });
//   };

// const onClickAddGroup = () => {
//     let groupArr = [...groupList];
//     groupArr.push(value);
//     setGroupList(groupArr);
//     console.log("groupArr", groupArr);
// let groupArr = [...groupList];
// let counter = groupArr.slice(-1)[0];
// counter += 1;
// groupArr.push(counter);
// setGroupList(groupArr);
// console.log("groupArr", groupArr);
//   };

//   return (
//     <>
//       <A.Wrapper>
//         <h2> Let's make My Query Builder UI</h2>

//         <A.BuilderWrap>
//           <A.OptionWrap>
//             <A.Select>
//               <option value="and">AND</option>
//               <option value="or">OR</option>
//             </A.Select>
//             <A.RuleBtn>+ Rule</A.RuleBtn>
//             <A.GroupBtn>+ Group</A.GroupBtn>
//           </A.OptionWrap>

//           <A.OptionSelect>
//             <option disabled selected>
//               Select Number
//             </option>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//           </A.OptionSelect>
//           <select>
//             {options.map((option) => (
//               <option value={option.value}>{option.label}</option>
//             ))}
//           </select>
//           <A.CloseBtn>X</A.CloseBtn>

//           <A.NewBuilderBox>new box</A.NewBuilderBox>

//           <form onSubmit={handleSubmit}>
//             <label>
//               Fields:
//               <input
//                 type="text"
//                 name="fields"
//                 value={query.fields}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Operator:
//               <select
//                 name="operator"
//                 value={query.operator}
//                 onChange={handleChange}
//               >
//                 <option value="equals">Equals</option>
//                 <option value="contains">Contains</option>
//                 <option value="starts_with">Starts with</option>
//                 <option value="ends_with">Ends with</option>
//               </select>
//             </label>
//             <label>
//               Value:
//               <input
//                 type="text"
//                 name="value"
//                 value={query.value}
//                 onChange={handleChange}
//               />
//             </label>
//             <button type="submit">Search</button>
//           </form>
//         </A.BuilderWrap>
//       </A.Wrapper>
//     </>
//   );
// }
