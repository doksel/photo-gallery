import React from "react";

import { WrapInput } from "./styles";

const Input = ({ placeholder, type, onChange }) => (
  <WrapInput>
    <input type={type} placeholder={placeholder} onChange={onChange} />
  </WrapInput>
);

export default Input;
