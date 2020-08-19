import React from "react";

import { WrapInput } from "./styles";

const Input = ({ placeholder, type = "text", onChange, value }) => (
  <WrapInput>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </WrapInput>
);

export default Input;
