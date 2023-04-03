import React from "react";
import * as A from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const RuleBox = ({ fields, rule }) => {
  return (
    <>
      <div>
        <A.OptionSelect>
          {fields.map((field) => {
            return <option value={field.type}>{field.name}</option>;
          })}
        </A.OptionSelect>
      </div>
    </>
  );
};

export default RuleBox;
