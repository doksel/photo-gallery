import React from "react";

import { WrapButton } from "./styles";

const Button = ({ text, onClick, loading, type, children }) => (
  <WrapButton type={type}>
    <button onClick={(e) => onClick && !loading && onClick(e)}>
      {children}
    </button>
  </WrapButton>
);

export default Button;
