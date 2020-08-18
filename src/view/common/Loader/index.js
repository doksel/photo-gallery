import React from "react";

import LoaderIcon from "../../../images/load.svg";

import { WrapLoader, BoxLoader } from "./styles";

const Loader = ({ loading }) => {
  return (
    <BoxLoader>
      <WrapLoader active={loading}>
        <img src={LoaderIcon} alt="loader" />
      </WrapLoader>
    </BoxLoader>
  );
};
export default Loader;
